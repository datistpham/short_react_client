import { useRecoilValue } from "recoil"
import { swipeDown } from "../../docs/f/swipe_video/swipe_down"
import { swipeUp } from "../../docs/f/swipe_video/swipe_up"
import { offsetHeight } from "../../state_management/recoil/atom"
import { Helmet } from "react-helmet-async"



const ContainerVideo= (props)=> {
    const value= useRecoilValue(offsetHeight)    
    return (
        <div className="video" draggable={true} onDragStart={(e)=> swipeUp(e, props.setPosition)} onDragEnd={(e)=> swipeDown(e, props.position.positionStartY, value, props.addData, props.issetTurnOffInstruction)}>
            <Helmet >
                <title>{props.title} - Short</title>
            </Helmet>
                        
            <video ref={props.refVideo} src={props.source} loop playsInline /> 
            {/* {props.ObserverPoint} */}
        </div>
    )
}

export default ContainerVideo