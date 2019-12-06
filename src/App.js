import React from 'react'
import './style/App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"


function App() {
  return (
    <div className="App"> 
      <Header />
      <PlayArea />
      <Footer />
    </div>
  )
}

export default App
