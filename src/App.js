import { BrowserRouter, Routes, Route } from "react-router-dom"
import T from "./components/Index"
import "../src/style/all.sass"
import "../src/style/header.sass"
import "../src/style/main.sass"
import "../src/style/responsive.sass"
import { app } from "./components/firebase/index"
import { RecoilRoot } from "recoil"

const App= ()=> {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="shorts/" element={<T />} />
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  )
}

export default App