import axios from "axios"
import { sleep } from "../components/main/FrameComment"

const load_feedback_comment= async (id_comment, minvalue, m, x)=> {
    x(prev=> ({...prev, loading: true}))
    await sleep(750)
    const res= await axios.get("http://localhost:4000/comment/l/", {params: {id_comment: id_comment, minvalue: minvalue, id: m}})
    const result= await res.data
    x(prev=> ({...prev, loading: false ,minValue: Math.min(...result.map(item=> item.like_)),  id: result.find(item=> item.like_ === Math.min(...result.map(item=> item.like_)))!== undefined ? result.find(item=> item.like_ === Math.min(...result.map(item=> item.like_))).id : -1}))
    return result
    
}

const count_feedback_comment= async (id_comment)=> {
    const res= await axios.get("http://localhost:4000/count/feed_back/comment", {params: {id_comment: id_comment}})
    const result= await res.data['count (name_comment)']
    return result
}

export { load_feedback_comment, count_feedback_comment }