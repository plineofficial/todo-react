export const LocalStorage = {
    get(key) {
        return Array.from(JSON.parse(localStorage.getItem(key)))
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
  }