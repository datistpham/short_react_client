// import swipe from "../../assets/swipe_instruction.gif"
import { memo } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { useState } from "react";

const SwipeUpInstruction= ()=> {
    return (
        <div className="swipe_up">
            <ArrowBackIosIcon />
        </div>
    )
}

const SwipeDownInstruction= ()=> {
    return (
        <div className="swipe_down">
            <ArrowBackIosIcon />
        </div>
    )
}

const ContainerSwipe= ()=> {
    // const [turnOffInstruction, setTurnOffInstruction]= useState(()=> false)
    return (
        <div className="container-swipe">
            <SwipeUpInstruction />
            <Instruction />
            <SwipeDownInstruction />
        </div>
    )
}
const Instruction= ()=> {
    return (
        <div style={{fontSize: 14, fontWeight: 600}}>
            Hold mouse and drag up or down to navigate video
        </div>
    )
}

export default memo(ContainerSwipe)