import "./App.css";

function App() {
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
          <CandiesCount />
        </div>
        <div className="box box-2">
          <p>Treats found</p>
          <TreatsFound />
        </div>
        <div className="box box-3">
          <p>Tricks Hit</p>
          <TricksHit />
        </div>
        <div className="box box-3">
          <p>Highscore</p>
          <HighScore />
        </div>
      </div>
    </div>
  )
};

const SoundButton = () => (
  <button>Sound On</button>
);

const CandiesCount = () => {
  return <p className="count">0</p>
};

const TreatsFound = () => {
  return <p className="count">0</p>
};

const TricksHit = () => {
  return <p className="count">0</p>
};

const HighScore = () => {
  return <p className="count">0</p>
}

export default App;