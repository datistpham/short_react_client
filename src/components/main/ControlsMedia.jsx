import { togglePlayPauseFunction } from "../../docs/f/handle_media/playpause"
import { TogglePlayPauseVideo, ToggleVolume } from "../../docs/f/handle_media/toggle"
import { toggleVolumeFunction } from "../../docs/f/handle_media/togglevolume"
import { memo } from "react"

const ControlsMedia= (props)=> {
    return (
        <div className="controls-media" ref={props.ref}>
            <PlayMedia state={props.state} setState={props.setState} refVideo={props.refVideo} />
            <DisplayVolume state={props.state} setState={props.setState} refVideo={props.refVideo} />
        </div>
    )
}

export default memo(ControlsMedia)

const PlayMedia= (props)=> {
    
    return (
        <div className="play-media" onClick={()=> {TogglePlayPauseVideo(props.setState, props.state);togglePlayPauseFunction(props.state, props.refVideo)}}>
            {
                props.state.playVideo=== true ?

                <PauseIcon />
                : 
                <PlayIcon />

            }
            {/* pause */}
        </div>
    )
}
const PlayIcon= ()=> {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M8 5v14l11-7z" className="style-scope yt-icon"></path></g></svg>
    )
}
const PauseIcon= ()=> {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" className="style-scope yt-icon"></path></g></svg>
    )
}

const DisplayVolume= (props)=> { 

    return (
        <div className="display-volume" onClick={()=> {ToggleVolume(props.setState, props.state);toggleVolumeFunction(props.state, props.refVideo)}}>
            {
                props.state.volume=== true ?
                <VolumeIcon />
                : 
                <MuteIcon />
            }
        </div>
    )
}

const VolumeIcon= ()=> {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" className="style-scope yt-icon"></path></g></svg> 
    )
}

const MuteIcon= ()=> {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" className="style-scope yt-icon"></path></g></svg>
    )
}