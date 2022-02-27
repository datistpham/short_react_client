import { getAuth } from "firebase/auth"

const SignOut= ()=> {
    const auth= getAuth()
    auth.signOut()
}

export { SignOut }