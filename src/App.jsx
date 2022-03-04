import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

function App() {
    return <div>
        <Header></Header>
        <Note title="Task 1" content= "Buy Food"></Note>
        <Note title="Task 2" content= "Eat Food"></Note>
        <Footer></Footer>
    </div>
}

export default App;