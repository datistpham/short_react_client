import axios from "axios"
import { sleep } from "../components/main/FrameComment"

const loadmorecomment= async (id_comment, minvalue, x, y, t, m)=> {
    try {
        await sleep(750)
        const res= await axios.get("http://localhost:4000/comment/l/", {params: {id_comment: id_comment, minvalue: minvalue, id: m}})
        const result= await res.data
        result.map(item=> x(prev=> ([...prev, item])))
        t(prev=> ({...prev,loadingMore: false ,minItem: Math.min(...result.map(item=> item.like_)),  id: result.find(item=> item.like_ === Math.min(...result.map(item=> item.like_)))!== undefined ? result.find(item=> item.like_ === Math.min(...result.map(item=> item.like_))).id : -1}))
        return result
    }catch(err) {
        throw err
    }
}

export { loadmorecomment }