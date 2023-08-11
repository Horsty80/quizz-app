import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function SelectionModeScreen() {
  const [user, setUser] = useState<DZ.User | null>(null);
  const [startTheGame, setStartTheGame] = useState<boolean>(false);

  const handleLogin = () => {
    // Then, request the user to log in
    DZ.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          DZ.api<DZ.User>("/user/me", function (response) {
            setUser(response);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { perms: "basic_access,email" }
    );
  };

  return (
    // On this screen we propose to the user to use his own playlists
    // or to use a random playlist created by me like Top 100 France or Top 100 Rock
    <>
      {(startTheGame || user) && <Navigate to="/start" replace={true} />}
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"7"}>
        <Flex align={"start"} justify={"center"} gap={"5"}>
          <Button disabled size={"3"} onClick={() => setStartTheGame(true)}>
            Use a random playlist
          </Button>
          <Flex align={"center"} justify={"center"} direction={"column"}>
            <Button size={"3"} onClick={handleLogin}>
              Use my playlists
            </Button>
            <Text color="gray">(need to login)</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SelectionModeScreen;
