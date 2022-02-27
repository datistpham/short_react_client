// import { useContext } from "react"
// import { ContextVideo } from "./ContextVideo"

const Interactive= (props)=> {
    return (
        <div className="interactive">
            <Description title={props.title} />
            <Tag tag={props.tag} />
            <Author author_avatar={props.author_avatar} author_name={props.author_name} />
        </div>
    )
}

export default Interactive

const Description= (props)=> {
    return (
        <div className="description">
            {props.title} 
        </div>
    )
}
const Tag= (props)=> {
    return (
        <div className="tag">
            {props.tag}
        </div>
    )
}
const Author= (props)=> {
    return (
        <div className="author">
            <Wrapper author_avatar={props.author_avatar} author_name={props.author_name} />
            <Subscribe />
        </div>
    )
}
const Wrapper= (props)=> {

    return (
        <div className="wrapper">
            <AuthorAvatar author_avatar={props.author_avatar} />
            <AuthorName author_name={props.author_name} />
        </div>
    )
}
const AuthorAvatar= (props)=> {
    
    return (
        <div className="author-avatar">
            <img referrerPolicy="no-referrer" src={props.author_avatar} alt="open" />
        </div>
        )
}
const AuthorName= (props)=> {
    
    return (
        <div className="author-name">
            {props.author_name}
        </div>
    )
}

const Subscribe= ()=> {
    return (
        <div className="subscribe">
            Subscribe
        </div>
    )
}