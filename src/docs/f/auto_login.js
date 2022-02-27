import { getAuth } from "firebase/auth"

const AutoLogin= async ()=> {
    const auth= getAuth()
    auth.onAuthStateChanged(user=> {
        if(user) {
            console.log(user)
        }
        else {
            console.log("user Log out")
        }
    })
}

export { AutoLogin }