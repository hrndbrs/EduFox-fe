import { defineStore } from "pinia"
import client from "../api/config"
import { decodeToken } from "../utils/jwt"

const useUserStore = defineStore("user", {
    state: () => ({
        isLoggedIn: false,
        profile: {}
    }),
    actions: {
        checkCredentials() {
            const token = localStorage.getItem("access_token")
            if (token !== null) {
                try {
                    this.profile = decodeToken(token)
                    this.isLoggedIn = true
                } catch (err) {
                    console.log(err.message)
                }
            } else {
                this.isLoggedIn = false
                this.profile = {}
            }
        },
        handleLogin(input) {
            return client
                .post('/login', input)
                .then(({ data }) => {
                    localStorage.setItem('access_token', data.access_token)
                })
        },
        handleLogout() {
            localStorage.removeItem("access_token")
            this.checkCredentials()
        },
        async midTrans() {
            try {
                const { data } = await client.post("/transaction", null, {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                const token = data?.data?.token

                // console.log(token)

                if (token) {
                    window.snap.pay(token, {
                        onSuccess: async (result) => {
                            try {
                                console.log(result)
                                const { data } = await client.patch("/transaction", {}, {
                                    headers: {
                                        access_token: localStorage.getItem('access_token')
                                    }
                                })
                                localStorage.setItem("access_token", data.access_token)
                                this.checkCredentials()
                            } catch (err) {
                                console.log(JSON.stringify(err, null, 4))
                            }
                        },
                        onPending: function (result) { console.log('pending'); console.log(result); },
                        onError: function (result) { console.log('error'); console.log(result); },
                        onClose: () => console.log('customer closed the popup without finishing the payment')
                    })
                }
            } catch (err) {
                console.log(err.message)
            }
        },
    }
})

export default useUserStore