import "./App.css";
import { useState, useRef } from "react";
import {AiFillSound} from "react-icons/ai";
import PopUp from './popup';

function App() {
  const [candies, setCandies] = useState(0);
  const [treats, setTreats] = useState(0);
  const [tricks, setTricks] = useState(0);
  const [count, setCount] = useState(0);
  const [doorsOpened, setDoorsOpened] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [showPopUp, setShowPopUp] = useState(false);

  const trickMessages = [
    "A ghost popped out",
    "Spiders everywhere",
    "A trick for you, your candy just vanished. Woah!",
    "Tricks on you! The candy's fake"
  ];

  const treatMessages = [
    "Delicious Candy",
    "Chocolate Treasure",
    "Yay! You found a candy stash",
    "You've unlocked a golden treat!"
  ];

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h1>
            Trick or Treat
          </h1>
          <p>Knock on 12 doors. Would you get a candy or scares? </p>
        </div>

        <div className="sound-box">
          <AiFillSound value={{className: 'react-icon'}} />
          <SoundButton />
        </div>
      </nav>

      <div className="boxes">
        <div className="box box-1">
          <p>Candies</p>
          <CandiesCount candies = {candies} />
        </div>
        <div className="box box-2">
          <p>Treats found</p>
          <TreatsFound treats = {treats} />
        </div>
        <div className="box box-3">
          <p>Tricks Hit</p>
          <TricksHit tricks = {tricks} />
        </div>
        <div className="box box-3">
          <p>Highscore</p>
          <HighScore highScore ={highScore} />
        </div>
      </div>

      <PopUp showPopUp = {showPopUp} hidePopUp= {() => setShowPopUp(false)}>
        <p>{trickMessages[Math.floor(Math.random() * 4)]}</p>
      </PopUp>

      <div className="cards">
        <MyComponent 
        candies ={candies}
        count = {count}
        setCount = {setCount}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp  = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore =  {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore}
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        count = {count}
        setCount = {setCount}
        setTreats ={setTreats}
        setTricks={setTricks}
        doorsOpened = {doorsOpened}
        setDoorsOpened = {setDoorsOpened}
        highScore = {highScore} 
        setHighScore = {setHighScore}
        setShowPopUp = {setShowPopUp} />
      </div>

      <footer>
        <div className="progress-top">
          <p>Progress</p>
          <ProgressCount doorsOpened = {doorsOpened} />
        </div>
        <div className="progress-bar">
          <div className="filler" style={{width: `${(doorsOpened / 12) * 100}%`}}></div>
        </div>
      </footer>
    </div>
  )
};


const SoundButton = () => (
  <button>Sound On</button>
);

const CandiesCount = ({candies}) => {
  return <p className="count">{candies}</p>
};

const TreatsFound = ({treats}) => {
  return <p className="count">{treats}</p>
};

const TricksHit = ({tricks}) => {
  return <p className="count">{tricks}</p>
};

const HighScore = ({highScore}) => {
  return <p className="count">{highScore}</p>
}

const ProgressCount = ({doorsOpened}) => {
  return <p>{doorsOpened}<span></span>/12 Doors</p>
}

const MyComponent = ({candies, setCandies, setTreats, setTricks, setCount, setDoorsOpened, highScore, setHighScore, setShowPopUp}) => {
 
  const [isClicked, setIsClicked] = useState("Knock");
  const getTarget = useRef(null);

  const handleClick = () => {
    setIsClicked("Knocked");
    getTarget.current.classList.add("checked");

    setShowPopUp(true);


    const determiner = Math.floor(Math.random() * 2);

    if (determiner === 1) {
      setTreats(prev => prev + 1);
      const Message = ({}) => {
        return <p>{treatMessage[0]}</p>
      }
      alert("Have some candy bars");
    } else {
      setTricks(prev => prev + 1);
      const Message = ({}) => {
        return <p>trickMessages[0]</p>
      }
      alert("Have some tricks");
    }

    setCandies(() => {
      const newCandy = candies + 1;
      if (newCandy > highScore) {
        setHighScore(newCandy);
      }
      return newCandy;
    });
    setDoorsOpened(prev => prev + 1);

  }

  return (
    <div className="card" onClick={handleClick} ref={getTarget}>
          <p>{isClicked}</p>
    </div>

);
};

export default App;