import * as Scroll from "react-scroll"

const scrollMore= (x, y,index, z, t, m, time)=> {
    const scroll= Scroll.animateScroll
    x(()=> true)
    scroll.scrollMore(parseInt(y) * index + z, {
        duration: t
    })
    m()
    setTimeout(()=> x(()=> false), time)

}

export { scrollMore }