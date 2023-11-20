export const decodeToken = (token) => {
    const decoded = JSON.parse(atob(token.split(".")[1]))

    if (typeof decoded !== "object") throw new Error()

    return decoded
}