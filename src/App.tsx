import { useCallback } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import viteLogo from "/vite.svg";

function App() {
  const handleClick = useCallback(() => {
    console.log('click');
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <Button text="" onClick={handleClick}>
          Create a Quizz
        </Button>
        <p>
          Or
        </p>

        <Button text="" onClick={handleClick}>
          Connect to a Quizz
        </Button>
      </div>
    </>
  );
}

export default App;
