import { createServer } from "miragejs"
import track from "./features/track/mockTrack.json";

export default function () {
  createServer({
    routes() {
        // https://api.deezer.com/api/track
      this.get("https://api.deezer.com/api/track", () => (track))
    },
  })
}