import { useState } from "react"

const useLocalStorage = (key, initialValue) {

    //state to store the value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            //get from local storage by key
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })
}