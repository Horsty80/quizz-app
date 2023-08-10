import { Model, createServer } from "miragejs";
import tracks from "./datas/tracks.json";

export default function () {
  createServer({
    models: {
      track: Model,
    },

    seeds(server) {
      server.db.loadData({
        tracks,
      })
    },
    routes() {
      // https://api.deezer.com/api/track
      this.get("https://api.deezer.com/api/track/:id", (schema, request) => {
        const id = request.params.id;
        const track = schema.db.tracks.find(id)
        return track;
      });
    },
  });
}
