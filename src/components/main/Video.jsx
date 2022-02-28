// import { useEffect } from "react"
import { useRef, memo } from "react"
import { useEffect } from "react"
// import { useContext } from "react"
import { useRecoilState } from "recoil"
// import bear from "../../assets/mov_bbb.mp4"
import { offsetHeight } from "../../state_management/recoil/atom"
// import { MyContext } from "../context-provider/MyContext"
import ContainerVideo from "./ContainerVideo"
// import { ContextVideo } from "./ContextVideo"
import ControlsMedia from "./ControlsMedia"
import Interactive from "./Interactive"
import Options from "./Option"
// const sleep = ms => new Promise(r => setTimeout(r, ms))
import { useInView } from "react-intersection-observer"
// import oneKb from "../../assets/1kb.png"
import { useState } from "react"
import { useContext } from "react"
import { MyContext } from "../context-provider/MyContext"
import FrameComment from "../main/FrameComment"
import { useLazyQuery } from "@apollo/client"
import { GetUser } from "../../graphql/get_user"

const Video= (props)=> {
    // const { refVideo }= useContext(MyContext)
    const refVideo= useRef(null)
    const [state, setState]= useState(()=> ({
        playVideo: false,
        volume: true
    }))

    const myRef= useRef(null)
    const { ref, inView }= useInView({
        threshold: 0
    })
    // const { data }= useContext(ContextVideo)
    // useEffect(()=> {
    //     (async()=> {
    //         await sleep(500)
    //         refVideo.current.muted= false

    //     })()
    // }, [refVideo])
    // eslint-disable-next-line
    const [value, setValue]= useRecoilState(offsetHeight)
    const [blobVideo, setBlobVideo]= useState(()=> null)
    const { fcomment }= useContext(MyContext)

    const [getUserAction, { data }]= useLazyQuery(GetUser)

    useEffect(()=> {
        setValue(myRef.current.offsetHeight)
    }, [myRef, setValue])
    useEffect(()=> {
        if(inView=== true) {
            refVideo.current.play()
            setState(prev=> ({...prev, playVideo: true}))
        }
    }, [inView])
    useEffect(()=> {
        fetch(props.source)
        .then(response=> response.blob())
        .then(blob => {
           setBlobVideo(()=> URL.createObjectURL(blob)) 
        })
        .catch(err=> console.log(err))
    }, [props.source])
    return (
        <div className="container-video">
            
            <div className="wrapper-video" ref={myRef} >
                <ControlsMedia state={state} setState={setState} refVideo={refVideo} />
                    {
                        inView=== true ?
                        <ContainerVideo title={props.title} refVideo={refVideo} source={blobVideo} position={props.position} setPosition={props.setPosition} issetTurnOffInstruction={props.issetTurnOffInstruction} addData={props.addData} />
                        : <ObserverImage imagesnapshot={props.imagesnapshot} />

                    }
                <Interactive title={props.title} tag={props.tag} author_name={props.author_name} author_avatar={props.author_avatar} />
                <Options getUserAction={getUserAction} id_video={props.id_video} number_of_like={props.number_of_like} number_of_dislike={props.number_of_dislike} number_of_comment={props.number_of_comment} />
            </div>
            {
                (fcomment=== true && inView=== true) &&
                <FrameComment data={data} number_of_comment={props.number_of_comment} id_comment={props.comment}  />
                }        
            <div ref={ref} className="observer-point" style={{position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
        </div>
    )
}

const ObserverImage= memo((props)=> {
    
    return (
        <div className="observer-image" >
            <img src={props.imagesnapshot} alt="Open" />
        </div>
    )
})

// const ObserverPoint= (props)=> {
//     return (
//         <div ref={props.ref} className="observer-point">1</div>
//     )
// }

export default Video