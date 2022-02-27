const toggleVolumeFunction= (state, refVideo)=> {
    if(state.volume=== true) {
        refVideo.current.volume= 0
    }
    else {
        refVideo.current.volume= 1
    }
}

export { toggleVolumeFunction }