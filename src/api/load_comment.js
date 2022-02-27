import axios from "axios"

const loadComment= async (id_comment)=> {
    try {
        const res= await axios("http://localhost:4000/comment/", {
            params: { id_comment: id_comment }
        })
        const result= await res.data
        return result

    }catch(error) {
        console.log(error)
    }
}

export { loadComment }