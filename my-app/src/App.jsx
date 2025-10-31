import "./App.css";
import { useState } from "react";
import {useRef} from "react";

function App() {
  const [candies, setCandies] = useState(0);
  const [treats, setTreats] = useState(0);
  const [tricks, setTricks] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h1>
            Trick or Treat
          </h1>
          <p>Knock on 12 doors. Would you get a candy or scares? </p>
        </div>

        <SoundButton />
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
          <HighScore />
        </div>
      </div>

      <div className="cards">
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
        <MyComponent 
        candies ={candies}
        setCandies ={setCandies}
        setTreats ={setTreats}
        setTricks={setTricks} />
      </div>

      <footer>
        <div className="progress-top">
          <p>Progress</p>
          <ProgressCount />
        </div>
        <div className="progress-bar"></div>
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

const HighScore = () => {
  return <p className="count">0</p>
}

const ProgressCount = ({count}) => {
  return <p><span>{count}</span>/12 Doors</p>
}

const MyComponent = ({count, candies, setCandies, setTreats, setTricks, setCount}) => {
 
  const [isClicked, setIsClicked] = useState("Knock");
  const getTarget = useRef(null);

  const handleClick = () => {
    setIsClicked("Knocked");
    setCandies(candies + 1);
    setCount(count + 1)
    
    if(getTarget.current) {
      getTarget.current.classList.add("checked");
    }

   const determiner = Math.floor(Math.random() * 2);

   if (determiner == 1) {
    setTreats(prev => prev + 1);
    alert("Have some candy bars");
   } else {
    setTricks(prev => prev + 1);
    alert("Have some tricks");
   }
  }

  return (
    <div className="card" onClick={handleClick} ref={getTarget}>
          <p>{isClicked}</p>
    </div>
  );
};

export default App;