import { Fragment ,memo } from "react"
import Favicon from "./Favicon"
import Login from "./Login"

const Header= ()=> {

    return (
        <Fragment>
        <div className="header-pseudo">
            
        </div>
        <div className="header">
            <Favicon />
            <Login />
        </div>
        </Fragment>
    )
}

export default memo(Header)