import { Avatar, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectPlaylistScreen() {
    const [playlists, setPlaylists] = useState<DZ.Playlist[]>([]);
    
    useEffect(() => {
    DZ.api<DZ.DeezerResponse<DZ.Playlist>>('user/me/playlists', function(response){
        console.log(response);
        if (response.data) {
            setPlaylists(response.data);
        }
    });
    }, []);

  return (
    <Flex gap={"9"}>
      {playlists.map(({id, title, nb_tracks, picture_big}) => (
        <Link key={id} to={`/start/${id}`} style={{textDecoration: "none"}}>
          <Flex gap="3" align="center" direction={"column"}>
            <Avatar
              size={"9"}
              src={picture_big}
              fallback="P"
            />
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