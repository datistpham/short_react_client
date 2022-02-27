const TogglePlayPauseVideo= (setState, state)=> {
    setState(prev=> ({...prev, playVideo: !state.playVideo}))
}
const ToggleVolume= (setState, state)=> {
    setState(prev=> ({...prev, volume: !state.volume}))
}

export { TogglePlayPauseVideo, ToggleVolume }