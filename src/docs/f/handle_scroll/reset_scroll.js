import * as Scroll from "react-scroll"

const resetScroll= ()=> {
    const scroll= Scroll.animateScroll
    scroll.scrollTo(56)
}

export { resetScroll }