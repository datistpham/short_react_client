import { Tooltip } from "@mui/material"
import { useEffect, memo } from "react"
import { useState } from "react"
// import * as Scroll from "react-scroll" 
import { useRecoilValue } from "recoil"
import { scrollMore } from "../../docs/f/handle_scroll/scrollMore"
import { scrollLess } from "../../docs/f/handle_scroll/scrollLess"
import { setOffsetHeight } from "../../state_management/recoil/selector"

const NextVideo= (props)=> {
    const value= useRecoilValue(setOffsetHeight)
    const [disabled, setDisabled]= useState(()=> false)
    // const scroll= Scroll.animateScroll

    // const scrollMore= ()=> {
    //     setDisabled(()=> true)
    //     scroll.scrollMore(parseInt(value) + 56, {
    //         duration: 750
    //     })
    //     props.addData()
    //     setTimeout(()=> setDisabled(()=> false), 750)
    // }
    const nextkeyup= (e)=> {
        e.preventDefault()
        if(e.keyCode=== 40) {
            scrollMore(setDisabled, value, 56, 750, props.addData(), 750)
        }
    }
    useEffect(()=> {
        document.addEventListener("keyup", nextkeyup)
        return ()=> document.removeEventListener("keyup", nextkeyup)
    })
    return (
        <button disabled={disabled} className="next-video" onClick={()=> scrollMore(setDisabled, value,1, 56, 750, props.addData, 750)} style={{cursor: disabled=== true ? "not-allowed" : "pointer"}}>
            <Tooltip placement="left" title={<div>Next 🠗</div>}>
                    <div className="container">
                        <NextIcon />
                    </div>
            </Tooltip>
        </button>
    )
}

const PreviousVideo= memo(()=> {
    const value= useRecoilValue(setOffsetHeight)
    const [disabled, setDisabled]= useState(()=> false)
    // const scroll= Scroll.animateScroll
    // const scrollLess= ()=> {
    //     setDisabled(()=> true)
    //     scroll.scrollMore(parseInt(value) * (-1) - 56, {
    //         duration: 750
    //     })
    //     setTimeout(()=> setDisabled(()=> false), 750)
    // }
    const previouskeyup= (e)=> {
        e.preventDefault()
        if(e.keyCode=== 38) {
            scrollLess(setDisabled, value, -1, -56, 750, 750)
        }
    }
    useEffect(()=> {
        document.addEventListener("keyup", previouskeyup)
        return ()=> document.removeEventListener("keyup", previouskeyup)
    })
    return (
        
        <button disabled={disabled} className="previous-video" onClick={()=> scrollLess(setDisabled, value, -1, -56, 750, 750)} style={{cursor: disabled=== true ? "not-allowed" : "pointer"}}>
            <Tooltip placement="left" title={<div>Previous 🠕 </div>}>
                <div className="container">
                    <PreviousIcon />
                </div>
            </Tooltip>
            </button>
    )
})

const PreviousIcon= memo(()=> (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M16.1,10.4L12,6.2V20h-1V6.2l-4.1,4.1L6.1,9.6l5.4-5.4l5.4,5.4L16.1,10.4z" className="style-scope yt-icon"></path></g></svg>
))
const NextIcon= memo(()=> (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M16.9,14.9l-5.4,5.4l-5.4-5.4l0.7-0.7l4.1,4.1V4h1v14.3l4.1-4.1L16.9,14.9z" className="style-scope yt-icon"></path></g></svg>
))
export { NextVideo, PreviousVideo }
