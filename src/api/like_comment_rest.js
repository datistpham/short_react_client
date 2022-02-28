import axios from "axios"

const like_comment_rest= async (data, id_comment, comment)=> {
    const res= await axios.get("http://localhost:4000/like_comment/", {
        params: { data, id_comment, comment}
    })
    const result= await res.data
    return result
}

export { like_comment_rest }