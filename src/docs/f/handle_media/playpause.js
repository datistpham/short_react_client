const togglePlayPauseFunction= (state, refVideo)=> {
    if(state.playVideo=== true) {
        refVideo.current.pause()
    }
    else {
        refVideo.current.play()
    }
}

export { togglePlayPauseFunction }