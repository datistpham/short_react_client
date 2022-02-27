import { selector } from "recoil"
import { offsetHeight } from "./atom"

const setOffsetHeight= selector({
    key: 'setOffsetHeight',
    get: ({get})=> {
        const value= get(offsetHeight)
        return value  
    }
})

export { setOffsetHeight }