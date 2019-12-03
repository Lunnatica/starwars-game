import React, { useEffect } from 'react'
import './style/App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"
import { useDispatch } from "react-redux"
import { setUpList } from './redux/swapiLists'
import { peopleURL, starshipsURL } from "./constants"

function App() {

  const dispatch = useDispatch()

  useEffect(() => { // retrieve list of people and list of starships
    function fetchData(url, resourceType) {
      fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(setUpList(resourceType, res.results))
        if(res.next) fetchData(res.next, resourceType) 
      })
    }
    fetchData(peopleURL, "people")
    fetchData(starshipsURL, "starships")
  }, [])

  return (
    <div className="App">
      <Header />
      <PlayArea />
      <Footer />
    </div>
  );
}

export default App;
