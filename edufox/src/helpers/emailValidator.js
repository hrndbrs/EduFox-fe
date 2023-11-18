export default function emailValidator(str) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
}