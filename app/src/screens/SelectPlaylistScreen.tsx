import { Avatar, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectPlaylistScreen() {
  const [playlists, setPlaylists] = useState<DZ.Playlist[]>([]);

  useEffect(() => {
    // Fallback with my playlist
    const getPlaylist = (userId = "5455570364") => {
      return DZ.api<DZ.DeezerResponse<DZ.Playlist>>(
        `user/${userId}/playlists`,
        function (response) {
          console.log(response);
          if (response.data) {
            setPlaylists(response.data);
          }
        }
      );
    };

    DZ.getLoginStatus(function (response) {
      if (response.authResponse) {
        console.log(response.authResponse);
        // logged in and connected user, someone you know
        getPlaylist("me");
      } else {
        console.log(response);
        getPlaylist();
        // no user session available, someone you dont know
      }
    });
  }, []);

  return (
    <Flex gap={"9"}>
      {playlists.map(({ id, title, nb_tracks, picture_big }) => (
        <Link key={id} to={`/start/${id}`} style={{ textDecoration: "none" }}>
          <Flex gap="3" align="center" direction={"column"}>
            <Avatar size={"9"} src={picture_big} fallback="P" />
            <Text as="div" size="4" weight="bold">
              {title} - {nb_tracks} songs
            </Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
}

export default SelectPlaylistScreen;
