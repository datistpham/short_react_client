import * as Scroll from "react-scroll"

const resetScroll= ()=> {
    const scroll= Scroll.animateScroll
    scroll.scrollTo(88)
}

export { resetScroll }