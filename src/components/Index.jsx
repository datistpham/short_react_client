import { useQuery } from "@apollo/client"
import Header from "./header/Header"
import Main from "./main/Main"
import { get5Video } from "../../src/api/get5_video"


const T= ()=> {
    const { loading, data, error }= useQuery(get5Video)

    if(loading=== true  ) {
        return (
            <div className="wrapper">
                <Header />
                <div className="skeleton-main">

                </div>
            </div>
        )
    }
    else if(error=== true) {
        return (
            <div>Error</div>
        )
    }
    else {
        return (
            <div className="wrapper">
                <Header />
                <WrapperMain data={data} loading={loading} error={error} />
            </div>
        )
    }
}

const WrapperMain= (props)=> {
    return (
        <Main data={props.data} loading={props.loading} error={props.error} />
    )
}

export default T