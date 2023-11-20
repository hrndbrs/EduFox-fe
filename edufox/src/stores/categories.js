import { defineStore } from "pinia"
import client from "../api/config"

const useCategoriesStore = defineStore("categories", {
    state: () => ({
        loading: true,
        categories: [],
        error: null
    }),
    actions: {
        getCategories() {
            client
                .get("/categories")
                .then(({ data }) => {
                    this.categories = data.data
                })
                .catch(err => {
                    this.error = err
                })
                .finally(() => {
                    this.loading = false
                })
        }
    }
})

export default useCategoriesStore