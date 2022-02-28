import Video from "./Video"
import { ContextVideoProvider } from "./ContextVideo"
// import * as Scroll from "react-scroll"
// import _ from "lodash"
import { useEffect } from "react"
import { NextVideo, PreviousVideo } from "./NextAndPrevious"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { loadmorevideo } from "../../graphql/loadmorevideo"
// import oneKb from "../../assets/1kb.png"
// import { useRecoilValue } from "recoil"
// import { setOffsetHeight } from "../../state_management/recoil/selector"
// import { swipeUp } from "../../docs/f/swipe_video/swipe_up"
// import { swiping } from "../../docs/f/swipe_video/swiping_mouse"
// import { swipeDown } from "../../docs/f/swipe_video/swipe_down"
import ContainerSwipe from "./swipe_instruction"
import { resetScroll } from "../../docs/f/handle_scroll/reset_scroll"



const Main= (props)=> {
    useEffect(()=> {
        document.addEventListener("load", resetScroll)
        return ()=> document.removeEventListener("load", resetScroll)
    }, [])
    const [listVideo, setListVideo]= useState(()=> ([]))
    const { data, loading, error }= useQuery(loadmorevideo)
    // const value= useRecoilValue(setOffsetHeight)
    // const [disabled, setDisabled]= useState(()=> false)
    const [position, setPosition]= useState(()=> ({
        positionStartX: 0,
        positionStartY: 0,

    }))
    const [turnOffInstruction, setTurnOffInstruction]= useState(()=> true)
    const issetTurnOffInstruction= ()=> {
        setTurnOffInstruction(()=> false )
    }
    const addData= ()=> {
        setListVideo(prev=> ([...prev, data.videorand1[0]]))
    }
    useEffect(()=> {
        if(props.loading=== false) {
            setListVideo(()=> props.data.video5)
        }
    }, [props.data, props.loading])
    // const getCoordinate= (e)=> {
    //     const img= new Image()
    //     img.src= oneKb
    //     e.dataTransfer.setDragImage(img, 0 , 0)
    //     console.log("mouse location: ", e.clientX, e.clientY)
    // }
    if(loading) {
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
        )
    }
    else if(error) {
        return (
            <div>Error</div>
        )
    }
    else {
        return (
            <ContextVideoProvider>
                <div className="wrap-main">
                    <div className="main">
                        {
                            listVideo.map((props, key)=> <Video position={position} setPosition={setPosition} issetTurnOffInstruction={issetTurnOffInstruction} addData={addData} {...props} key={key} />)
                        }
                        {
                            <>
                                <PreviousVideo />
                                <NextVideo addData={addData} />
                                {
                                    turnOffInstruction=== true &&
                                    <ContainerSwipe />
                                }
                            </>
                        }
                    </div>
                </div>
            </ContextVideoProvider>
        )
    }
}


export default Main