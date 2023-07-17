import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { trackApi } from "./services/track";
import Card from "./components/Card/Card";

function App() {
  const [trigger, result] = trackApi.useLazyGetMockTrackQuery();
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    trigger("", true);
    setCount(count + 1);
  }, [trigger, setCount, count]);

  return (
    <div>
      <div className="card">
        {result.isLoading && <Card label="Loading">Loading...</Card>}
        {result.isError && <Card label="Error">Error!</Card>}

        {result.isSuccess && (
          <Card label="Success">
            <div className="song__player">
            {result.data.title} : <a href={result.data.preview}>Preview</a>
            {/* maybe remove controls */}
            <audio controls autoPlay>
              <source src={result.data.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            </div>
          </Card>
        )}
      </div>

      <Button text="" onClick={handleClick}>
        {count ? "Next song" : "Play song"}
      </Button>
    </div>
  );
}

export default App;
