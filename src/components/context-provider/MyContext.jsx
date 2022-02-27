import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth"
import { useEffect } from "react";

const MyContext= createContext()

const ContextProvider= ({children})=> {

    const auth= getAuth()
    const [state, setState]= useState(()=> ({
        fcomment: false,
        username: null,
        photoUrl: null,
        login: false,
        comment: "",
        commentEmpty: false,
        playVideo: true, 
        volume: true,
        tokenId: null
    }))
    const OpenCommentFunctionD= ()=> {
        setState(prev=> ({...prev, fcomment: true}))
    }
    const CloseCommentFunctionD= ()=> {
        setState(prev=> ({...prev, fcomment: false}))
    }
    const setComment= (e)=> {
        setState(prev=> ({...prev, comment: e.target.value}))
        if(e.target.value.length>= 1) {
            setState(prev=> ({...prev, commentEmpty: true}))
        }
        else {
            setState(prev=> ({...prev, commentEmpty: false}))
        }
    }
    
    useEffect(()=> {
        (()=> (auth.onAuthStateChanged(res=> {
            if(res!== null) {
                setState((prev)=> ({
                    ...prev,username: res.displayName, photoUrl: res.photoURL, login: true, tokenId: res.uid
                }))
            }
        })))()
    }, [auth])
    
    // useEffect(()=> {

    // })
    

    const ResetComment= ()=> {
        setState(prev=> ({...prev, comment: ""}))
    }
    return (
        <MyContext.Provider 
            value={{
            fcomment: state.fcomment, OpenCommentFunctionD, CloseCommentFunctionD,
            username: state.username, photoUrl: state.photoUrl, login: state.login,
            comment: state.comment, setComment, commentEmpty: state.commentEmpty,playVideo: state.playVideo,
            ResetComment, tokenId: state.tokenId
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, ContextProvider }