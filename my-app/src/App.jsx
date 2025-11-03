import "./App.css";
import { useState, useRef, useEffect } from "react";
import {AiFillSound} from "react-icons/ai";
import PopUp from './popup';

function App() {
  const [candies, setCandies] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_candies');
    return saved !== null ? parseInt(saved) : 0;
  });
  
  const [treats, setTreats] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_treats');
    return saved !== null ? parseInt(saved) : 0;
  });
  
  const [tricks, setTricks] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_tricks');
    return saved !== null ? parseInt(saved) : 0;
  });
  
  const [doorsOpened, setDoorsOpened] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_doorsOpened');
    return saved !== null ? parseInt(saved) : 0;
  });
  
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_highScore');
    return saved !== null ? parseInt(saved) : 0;
  });

  const [clickedDoors, setClickedDoors] = useState(() => {
    const saved = localStorage.getItem('trickOrTreat_clickedDoors');
    return saved ? JSON.parse(saved) : [];
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");

  useEffect(() => {
    localStorage.setItem('trickOrTreat_candies', candies);
  }, [candies]);

  useEffect(() => {
    localStorage.setItem('trickOrTreat_treats', treats);
  }, [treats]);

  useEffect(() => {
    localStorage.setItem('trickOrTreat_tricks', tricks);
  }, [tricks]);

  useEffect(() => {
    localStorage.setItem('trickOrTreat_doorsOpened', doorsOpened);
  }, [doorsOpened]);

  useEffect(() => {
    localStorage.setItem('trickOrTreat_highScore', highScore);
  }, [highScore]);

  useEffect(() => {
    localStorage.setItem('trickOrTreat_clickedDoors', JSON.stringify(clickedDoors));
  }, [clickedDoors]);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the game?')) {
      setCandies(0);
      setTreats(0);
      setTricks(0);
      setDoorsOpened(0);
      setClickedDoors([]);
      localStorage.removeItem('trickOrTreat_candies');
      localStorage.removeItem('trickOrTreat_treats');
      localStorage.removeItem('trickOrTreat_tricks');
      localStorage.removeItem('trickOrTreat_doorsOpened');
      localStorage.removeItem('trickOrTreat_clickedDoors');
    }
  };

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

        <div className="right">
          <div className="sound-box">
          <AiFillSound value={{className: 'react-icon'}} />
          <SoundButton />
        </div>
        
          <button onClick={handleReset} className="reset-btn">Reset Game</button>
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
        <p>{popUpMessage}</p>
      </PopUp>

      <div className="cards">
        {Array.from({length: 12}, (_, index) => (
          <MyComponent
            key={index}
            doorIndex={index}
            candies={candies}
            setCandies={setCandies}
            setTreats={setTreats}
            setTricks={setTricks}
            setDoorsOpened={setDoorsOpened}
            highScore={highScore}
            setHighScore={setHighScore}
            setShowPopUp={setShowPopUp}
            setPopUpMessage={setPopUpMessage}
            trickMessages={trickMessages}
            treatMessages={treatMessages}
            clickedDoors={clickedDoors}
            setClickedDoors={setClickedDoors}
          />
        ))}
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

const MyComponent = ({
  doorIndex,
  candies,
  setCandies,
  setTreats,
  setTricks,
  setDoorsOpened,
  highScore,
  setHighScore,
  setShowPopUp,
  setPopUpMessage,
  trickMessages,
  treatMessages,
  clickedDoors,
  setClickedDoors
}) => {
 
  const isClicked = clickedDoors.includes(doorIndex);
  const getTarget = useRef(null);

  const handleClick = () => {
    if (isClicked) return;

    setClickedDoors(prev => [...prev, doorIndex]);

    if (getTarget.current) {
      getTarget.current.classList.add("checked");
    }

    const determiner = Math.floor(Math.random() * 2);

    if (determiner === 1) {
      setTreats(prev => prev + 1); // Treats
      const randomTreat = treatMessages[Math.floor(Math.random() * treatMessages.length)];
      setPopUpMessage(randomTreat)
    } else {
      setTricks(prev => prev + 1); // Tricks
      setCandies(prev => Math.max(0, prev - 2));
      const randomTrick = trickMessages[Math.floor(Math.random() * trickMessages.length)];
      setPopUpMessage(randomTrick);
    }

    setShowPopUp(true);

    setCandies(prev => {
      const newCandy = prev + 1;
      if (newCandy > highScore) {
        setHighScore(newCandy);
      }
      return newCandy;
    });
    setDoorsOpened(prev => prev + 1);

  }

  return (
    <div className={`card ${isClicked ? 'checked': ''}`} onClick={handleClick} ref={getTarget}>
          <p>{isClicked ? "Knocked": "Knock"}</p>
    </div>

);
};

export default App;