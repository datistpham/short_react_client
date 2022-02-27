import { useContext } from "react"
import { LoginOAuth2 } from "../../docs/f/login_oauth2"
import { MyContext } from "../context-provider/MyContext"

const Login= ()=> {
    const { username, photoUrl, login }= useContext(MyContext)
    return (
        <>
            {
                login=== true ? <Logged username={username} photoUrl={photoUrl} /> : <NoLogin />
            }
        </>
    )
}
const NoLogin= ()=> {
    return (
        <div role="button" className="login" onClick={()=> LoginOAuth2()}>
            Login
        </div>
    )
}
const Logged= (props)=> {
    return (
        <div className="logged" >
            <img referrerPolicy="no-referrer" src={props.photoUrl} alt="open" />
        </div>
    )
}

export default Login