import oneKb from "../../../assets/1kb.png"


const swipeUp= (e, setPosition)=> {
    const img= new Image()
    img.src= oneKb
    e.dataTransfer.setDragImage(img, 0 , 0)
    e.dataTransfer.effectAllowed = "cursor"
    // console.log("mouse location", e.clientX, e.clientY)
    setPosition(prev=> ({...prev, positionStartX: e.clientX, positionStartY: e.clientY}))
}

export { swipeUp }