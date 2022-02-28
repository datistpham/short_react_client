import { like_comment_rest } from "../../../api/like_comment_rest"

const LikeComment= (setState, x, y, z, t ,q, m, n )=> {
    if(y=== true) {
        setState(prev=> ({...prev, like: x-1, toggle: !y}))
        m({variables: { id_token: t, comment_liked: q }})
        like_comment_rest(x-1, q, n)
    }   
    else {
        setState(prev=> ({...prev, like: x+1, toggle: !y}))
        z({variables: { id_token: t, comment_liked: q }})
        like_comment_rest(x+1, q, n)
    }
}

export { LikeComment }