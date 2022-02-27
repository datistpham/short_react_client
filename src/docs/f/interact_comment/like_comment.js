const LikeComment= (setState, x, y, z, t ,q)=> {
    if(y=== true) {
        setState(prev=> ({...prev, like: x+1, toggle: !y}))
        z({variables: { id_token: t, comment_liked: q }})
    }   
    else {
        setState(prev=> ({...prev, like: x-1, toggle: !y}))
        z({variables: { id_token: t, comment_liked: q }})

    }
}

export { LikeComment }