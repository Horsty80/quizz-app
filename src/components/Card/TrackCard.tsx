import { PropsWithChildren } from "react";
import { Track } from "../../features/track/Track";
import Card from "./Card";

export type TrackCardProps = PropsWithChildren<Partial<Track>>;

function TrackCard({ id, album, title, preview }: TrackCardProps) {
  console.log(title, preview);
  return (
    <Card label="">
      <div className="song__player">
        {album && <img src={album.cover_small} alt="" />}
        {title} : <a href={preview}>Preview</a>
        {/* maybe remove controls */}
       <audio key={id} controls autoPlay>
          <source src={preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Card>
  );
}

export default TrackCard;
