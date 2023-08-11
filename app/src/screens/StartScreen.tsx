import { Avatar, Flex, Text } from "@radix-ui/themes";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RevealAnwser from "../components/RevealAnwser";

function StartScreen() {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [tracks, setTracks] = useState<DZ.PlaylistTrack[]>([]);
  const [currentTrack, setCurrentTrack] = useState<DZ.PlaylistTrack | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the tracks of the playlist
    DZ.api<DZ.DeezerResponse<DZ.PlaylistTrack>>(`/playlist/${playlistId}/tracks`, function (response) {
      if (response.data && response.data.length > 0) {
        console.log(response.data);
        // Shuffle the tracks
        response.data.sort(() => Math.random() - 0.5);
        setTracks(response.data);
        setCurrentTrack(response.data[0]);
      }
    });
  }, [playlistId]);

  useEffect(() => {
    console.log('currentTrack');
    // Need to request the Track to get the Year of the song
    if (currentTrack) {
      DZ.api<DZ.Track>(`/track/${currentTrack.id}`, function (response) {
        if (response) {
          console.log(response);
          // Format the date to only get the year
          const date = new Date(response.release_date);
          const year = date.getFullYear().toString();
          console.log(year)
          setAnswer(year);
        }
      });
    }
  }, [currentTrack]);

  const handleNext = useCallback(() => {
    // Remove the current track from the list
    const newTracks = tracks.filter((track) => track.id !== currentTrack?.id);
    // Set the new current track
    setCurrentTrack(newTracks[0]);
    // Set the new tracks
    if (newTracks.length === 0) {
      // If there is no more tracks, go to the end screen
      navigate("/end");
    }
    setTracks(newTracks);
  }, [currentTrack, tracks]);

  return (
    <>
      <Flex gap={"9"}>
        {currentTrack && (
          <Flex gap="3" align="center" direction={"column"}>
            <Avatar size={"9"} src={currentTrack.album.cover_big} fallback="U" />
            <Flex direction={"row"} align={"center"} gap={"3"}>
              <Text as="div" size="2" weight="bold">
                {currentTrack.artist.name}
              </Text>
              <Text as="div" size="5" weight="bold">
                {currentTrack.title}
              </Text>
            </Flex>
            <audio key={currentTrack.id} controls autoPlay>
              <source
                src={currentTrack.preview}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <RevealAnwser answer={answer} handleNext={handleNext}/>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default StartScreen;
