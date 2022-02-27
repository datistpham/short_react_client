import oneKb from "../../../assets/1kb.png"
import * as Scroll from "react-scroll"
// import { scrollMore } from "../handle_scroll/scrollMore"

const swipeDown= (e, x, y, z, t)=> {
    const img= new Image()
    const scroll= Scroll.animateScroll
    img.src= oneKb
    e.dataTransfer.setDragImage(img, 0 , 0)
    // console.log("mouse location", e.clientX, e.clientY)
    if(e.clientY - x < 0) {
        scroll.scrollMore(parseInt(y) + 56, {
            duration: 500
        })
        z()
        t()
    }
    else {
        scroll.scrollMore(-1 * (parseInt(y)+ 56), {
            duration: 500
        })
    }
}

export { swipeDown }