import { defineStore } from "pinia"
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
        }
    }
})

export default useUserStore