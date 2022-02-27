import * as Scroll from "react-scroll"


const scroll= Scroll.animateScroll
const swiping= (e, x, y)=> {
    if(e.clientY < x) {
        scroll.scrollMore(parseInt(y) + 56, {
            duration: 500
        })    
    }
    else {
        scroll.scrollMore(-1 * (parseInt(y) + 56))
    }
    console.log(e.clientY- x)
}

export { swiping }