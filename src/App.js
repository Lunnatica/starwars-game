import React, { useEffect } from 'react';
import './style/App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PlayArea from "./components/PlayArea/PlayArea"
import { useDispatch } from "react-redux"
import { setUpListCount } from './redux/swapiListsCount';
import { peopleURL, starshipsURL } from "./constants"


function App() {

  const dispatch = useDispatch()


  useEffect(() => { // setup count of both lists to be able to fetch ids directly
    function fetchData(url) {
      fetch(url)
      .then(res => res.json())
      .then(res => {
        if (url === peopleURL) dispatch(setUpListCount("people", res.count))
        else dispatch(setUpListCount("starships", res.count))
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
