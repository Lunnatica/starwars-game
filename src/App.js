import React, { useEffect } from 'react';
import './style/App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"



function App() {
  useEffect(() => {
    function fetchData() {
      fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => console.log(res))
    }
    fetchData()
  }, [])
    
      // .then(res => this.setState({ planets: res }))
      // .catch(() => this.setState({ hasErrors: true }))
  

  return (
    <div className="App">
      <Header />
      <PlayArea />
      <Footer />
    </div>
  );
  // const count = useSelector(state => state)
  //   const dispatch = useDispatch()
  //   return (
  //       <div>
  //           <h1>{count}</h1>
  //           <button onClick={() => dispatch(decrement())}>-</button>
  //           <button onClick={() => dispatch(increment())}>+</button>
  //       </div>
  //   )
}

export default App;
