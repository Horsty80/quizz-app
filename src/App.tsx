import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { trackApi } from "./services/track";
import Card from "./components/Card/Card";
import TrackCard from "./components/Card/TrackCard";
import { tracksId } from "./datas/staticTracks";

function App() {
  const [trigger, result] = trackApi.useLazyGetMockTrackQuery();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const [fullYear, setFullYear] = useState("????");

  const revealYear = useCallback(() => {
    setIsReveal(true);
  }, []);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    setIsReveal(false);
    if (count === tracksId.length) {
      // reset
      setCount(0);
      trigger(tracksId[0]);
      return;
    }

    trigger(tracksId[count]).then(() => {
      setIsLoading(false);
    });
    setCount((prev) => prev + 1);
  }, [count, trigger]);

  useEffect(() => {
    if (result.isSuccess && result.data) {
      const date = new Date(result.data.release_date);
      const year = date.getFullYear();
      setFullYear(`${year}`);
    }
  }, [result])


  return (
    <div>
      <div className="card">
        {result.isLoading || (isLoading && <Card label="Loading">Loading...</Card>)}
        {result.isError && <Card label="Error">Error!</Card>}

        {result.isSuccess && result.data && (
          <TrackCard
            id={result.data.id}
            album={result.data.album}
            title={result.data.title}
            preview={result.data.preview}
          />
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        {count > 0 && (
          <>
            <Button text="" onClick={revealYear}>
              <span>Reveal year</span>
            </Button>
            <span style={{ padding: "20px" }}>or</span>
          </>
        )}
        <Button text="" onClick={handleClick}>
          {count ? "Next song" : "Play song"}
        </Button>
      </div>

      <div>
        {/* Show year response */}
        {count > 0 && (
          <>
            <span style={{ padding: "20px", display: "flex", flexDirection: "column"  }}>
              {" "}
              <strong>Year:</strong>{" "}
            </span>
            <span style={{ padding: "20px", fontSize: "30px" }}>
              {isReveal ? fullYear : "????"}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
