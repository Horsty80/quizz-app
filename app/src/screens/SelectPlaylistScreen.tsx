import { Avatar, Flex, Text } from "@radix-ui/themes";
import playlist from "../mocks/playlists.json";
import { Link } from "react-router-dom";

function SelectPlaylistScreen() {
  return (
    <Flex gap={"9"}>
      {playlist.data.map(({id, title, nb_tracks, picture_big}) => (
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