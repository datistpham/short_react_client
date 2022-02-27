import { createContext } from "react"

const ContextVideo= createContext()

const ContextVideoProvider= ({ children })=> {

    return (
        <ContextVideo.Provider value={{a :1}}>
            {children}
        </ContextVideo.Provider>
    )
}

export { ContextVideo, ContextVideoProvider }