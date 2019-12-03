import React, { useEffect } from 'react';
import './style/App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"
import { useDispatch } from "react-redux"
import { setUpList } from './redux/swapiLists';

const peopleURL = "https://swapi.co/api/people/" 
const starshipsURL = "https://swapi.co/api/starships/" 

function App() {

  const dispatch = useDispatch()

  useEffect(() => { // retrieve list of people and list of starships
    function fetchData(url) {
      fetch(url)
      .then(res => res.json())
      .then(res => {
        if (url === peopleURL) dispatch(setUpList("people", res))
        else dispatch(setUpList("starship", res))
      })
    }
    fetchData(peopleURL)
    fetchData(starshipsURL)
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
