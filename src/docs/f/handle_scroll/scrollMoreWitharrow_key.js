import { scrollMore } from "./scrollMore"


const nextkeyup= (e, x, y, z, t, m, time)=> {
    e.preventDefault()
    if(e.keyCode=== 40) {
        scrollMore(x, y, z, t, m, time)
    }
}

export { nextkeyup }