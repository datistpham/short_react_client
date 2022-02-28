import axios from "axios"

const undolike_comment_rest= async (data, id_comment)=> {
    const res= await axios.get("http://localhost:4000/like_comment/", {
        params: {data: data, id_comment: id_comment}
    })
    const result= await res.data
    return result
}

export { undolike_comment_rest }