import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useRef, memo } from "react"
import { useContext } from "react"
import { MyContext } from "../context-provider/MyContext"
import { nanoid } from "nanoid"
import CircularProgress from '@mui/material/CircularProgress'
import { LikeComment } from "../../docs/f/interact_comment/like_comment"
import { useMutation } from "@apollo/client"
import { LikeCommentGraph } from "../../api/like_comment"


const sleep = ms => new Promise(r => setTimeout(r, ms));
const FrameComment= (props)=> {
    
    return (
        <div className="framecomment">
            <Wrapper number_of_comment={props.number_of_comment} id_comment={props.id_comment} data={props.data} />
        </div>
    )
}

export default memo(FrameComment)

const Wrapper= (props)=> {
    return (
        <div className="comment">
            <Section1 number_of_comment={props.number_of_comment} />
            <Section2 />
            <Section3 id_comment={props.id_comment} data={props.data} />
        </div>
    )
}

const Section1= (props)=> {
    return (
        <div className="section1">
            <Wrapper1 number_of_comment={props.number_of_comment} />
            <Wrapper2 />
        </div>
    )
}
const CountComment= (props)=> {
    return (
        <div className="count-comment">
            {
                props.number_of_comment
            }
        </div>
    )
    
}
const Wrapper1= (props)=> {
    return (
        <div className="wrapper1">
            <Title /> 
            <CountComment number_of_comment={props.number_of_comment} />
        </div>
    )
}
const Title= ()=> {
    return (
        <div className="title">
            Comments
        </div>
    )
}
const Wrapper2= ()=> {
    const { CloseCommentFunctionD }= useContext(MyContext)
    return (
        <div className="wrapper2">
            <FilterComment />
            <CloseComment f={CloseCommentFunctionD} /> 
        </div>
    )
}
const FilterComment= ()=> {
    return (
        <div className="filter-comment">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z" className="style-scope yt-icon"></path></g></svg>
        </div>
    )
}

const CloseComment= (props)=> {
    return (
        <div className="close-comment" onClick={()=> props.f()}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z" className="style-scope yt-icon"></path></g></svg>
        </div>
    )
}

const Section2= ()=> {
    return (
        <div className="section2">
            <CommentAction />
        </div>
    )
}

const CommentAction= ()=> {
    return (
        <div className="comment-action">
            <CommentActionAvatar />
            <CommentActionInput />
        </div>
    )
}
const CommentActionAvatar= memo(()=> {
    const { photoUrl }= useContext(MyContext)
    return (
        <div className="comment-action-avatar">
            <img src={photoUrl} alt="open" referrerPolicy="no-referrer" />
        </div>
    )
})
const CommentActionInput= memo(()=> {
    const { setComment, comment }= useContext(MyContext)
    return (
        <div className="wrapper-action-input">
            <div className="comment-action-input">
                <input type="text" value={comment} placeholder="Public comment..." onChange={(e)=> setComment(e)} />
            </div>
            {
                comment.length>0 &&
                <SendComment />
            }
        </div>
    )
})

const SendComment= memo(()=> {
    const ref1= useRef(null)
    const ref2= useRef(null)
    const { commentEmpty,ResetComment }= useContext(MyContext)
    return (
        <div className="send-comment">
            <ButtonSendComment customRef={ref1} title="Submit" disabled={!commentEmpty} color={commentEmpty=== false ? '#aaaaaa' : '#fff' } backgroundColor={commentEmpty=== false ? 'rgba(255, 255, 255, 0.1)' : "#2e89ff"} />
            <ButtonSendComment customRef={ref2} title="Cancel" disabled={false} f={ResetComment} />
        </div>
    )
})
const ButtonSendComment= memo((props)=> {
    return (
        <button disabled={props.disabled} ref={props.customRef} className="button-send-comment" onClick={()=> props.f()} style={{color: props.color, backgroundColor: props.backgroundColor}}>
            {props.title}
        </button>
    )
})

// 
const Section3= (props)=> {
    const [state, setState]= useState(()=> ({
        data: [],
        loading: true
    }))
    useEffect(()=> {
        (async()=> {
            try {
                const res= await axios("http://localhost:4000/comment/", {
                    params: { id_comment: props.id_comment }
                })
                const result= await res.data
                await sleep(1500)
                setState((prev)=> ({...prev, data: result, loading: false}))
        
            }catch(error) {
                console.log(error)
            }
        })()
    }, [props.id_comment])

    if(state.loading=== true) {
        return (
            <div className="loading" style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center',alignItems: 'center'}}><CircularProgress color="secondary" /></div>
        )    
    }
    else {
        return (
    
            <div className="section3">
                {
                    state.data.map(item=> <ItemSection3 key={nanoid()} {...item} data={props.data} comment={props.id_comment} />)
                }
            </div>
        )
    }
    
}

const ItemSection3= (props)=> {
    return (
        <div className="item-section3">
            <AvatarComment avatar={props.avatar_comment}  />
            <Container {...props} data={props.data} />
        </div>

    )
}

const AvatarComment= (props)=> {
    return (
        <div className="avatar-comment">
            <AvatarCommentImage avatar={props.avatar} /> 
        </div>
    )
}
const AvatarCommentImage= (props)=> {
    return (
        <div className="img-avatar">
            <img src={props.avatar} alt="open" referrerPolicy="no-referrer" />
        </div>
    )
}
const WrapperNameandTimestamp= (props)=> {
    return (
        <div className="wrapper-name-and-timestamp"> 
            <NameComment name_comment={props.name_comment} />
            <TimeStamp timestamp={props.timestamp} />
            <Edited edited={props.edited} />
        </div>
    )
}
const NameComment= (props)=> {
    return (
        <div className="name-comment">
            {props.name_comment}
        </div>
    )
}
const TimeStamp= (props)=> {
    return (
        <div className="timestamp">
            &nbsp;{props.timestamp}
        </div>
    )
}
const Edited= (props)=> {
    return (
        <div className="edited">
            &nbsp;( edited )
        </div>
    )
}
const Container= (props)=> {
    return (
        <div className="container">
            <WrapperNameandTimestamp name_comment={props.name_comment} timestamp={props.timestamp} edited={props.edited} />
            <Content content={props.content} />
            <WrapperLikeandDislike like={props.like_} id_comment={props.id_comment} data={props.data} />
        </div>
    )
}

const Content= (props)=> {
    return (
        <div className="content">
            {props.content}
        </div>
    )
}
const WrapperLikeandDislike= (props)=> {
    return (
        <div className="wrapper-like-and-dislike">
            <CountLike like={props.like} id_comment={props.id_comment} data={props.data} />
            <CountDislike />
            <Feedback />
        </div>
    )
}


const CountLike= (props)=> {
    const [state, setState]= useState(()=> ({
        like: props.like,
        toggle: true
    }))
    const { tokenId }= useContext(MyContext)

    const [LikeCommentAction]= useMutation(LikeCommentGraph)
    return (
        <div className="count-like">
            <button className="btn-count-like" onClick={()=> LikeComment(setState, state.like, state.toggle, LikeCommentAction, tokenId, props.id_comment)}>
                {
                    (((props.data.user.comment_liked.substr(0,props.data.user.comment_liked.length - 2 ).split(" ")).includes(props.id_comment))=== true) ?

                    <LikedIconComment /> : 

                <LikeIconComment />

            }
            
            </button>
            <NumberOfLike like={state.like} />
        </div>
    )
}
const NumberOfLike= (props)=> {
    return (
        <div className="number-of-like">
            {props.like}
        </div>
    )
}
const NumberOfDislike= ()=> {
    return (
        <div className="number-of-dislike">
            
        </div>
    )
}
const CountDislike= ()=> {
    return (
        <div className="count-dislike">
            <button className="btn-count-dislike">
                <DislikeIconComment />
            </button>
            <NumberOfDislike />
        </div>

    )
}
const Feedback= ()=> {
    return (
        <div className="feedback">
            Reply
        </div>
    )
}

const LikeIconComment= ()=> (
    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z" className="style-scope yt-icon"></path></g></svg>
)
const LikedIconComment= ()=> (
    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7l0,7ZM4,14H1V7H4Z" className="style-scope yt-icon"></path></g></svg>
)
const DislikedIconComment= ()=> (
    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9l0-7ZM12,2h3V9H12Z" className="style-scope yt-icon"></path></g></svg>
)
const DislikeIconComment= ()=> (
    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><g className="style-scope yt-icon"><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z" className="style-scope yt-icon"></path></g></svg>
)