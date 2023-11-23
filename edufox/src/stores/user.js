import { defineStore } from 'pinia'
import { jwtDecode } from "jwt-decode"
import client from '../api/config'

const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    profile: {}
  }),
  actions: {
    checkCredentials() {
      const token = localStorage.getItem('access_token')

      try {
        this.profile = jwtDecode(token)
        this.isLoggedIn = true
      } catch (err) {
        this.isLoggedIn = false
        this.profile = {}
      }
    },
    handleLogin(input) {
      return client.post('/login', input).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
      })
    },
    handleLogout() {
      localStorage.removeItem('access_token')
      this.checkCredentials()
    },

    async enrollCourse(courseId) {
      await client.post(
        '/enrollments/' + courseId,
        {},
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        }
      )
    },

    async midTrans(cb = () => { }) {
      try {
        const { data } = await client.post("/transaction", null, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        const token = data?.data?.token

        if (token) {
          window.snap.pay(token, {
            onSuccess: async () => {
              try {
                // console.log(result)
                const { data } = await client.patch("/transaction", {}, {
                  headers: {
                    access_token: localStorage.getItem('access_token')
                  }
                })
                localStorage.setItem("access_token", data.access_token)
                this.checkCredentials()
                cb()
              } catch (err) {
                cb({ message: "Something went wrong", type: "error" })
              }
            },
            onPending: (result) => { console.log('pending'); console.log(result); },
            onError: () => cb({ message: "Payment is unsuccessful\nPlease try again", type: "error" }),
            onClose: () => cb({ message: "Payment is terminated" })
          })
        }
      } catch {
        // console.log(err.message)
        cb({ message: "Something went wrong", type: "error" })
      }
    },
  }
})

export default useUserStore
