import * as Scroll from "react-scroll"

const scrollLess= (x, y,index, z, t, time)=> {
    const scroll= Scroll.animateScroll
    x(()=> true)
    scroll.scrollMore(parseInt(y) * index + z, {
        duration: t
    })

    setTimeout(()=> x(()=> false), time)

}

export { scrollLess }