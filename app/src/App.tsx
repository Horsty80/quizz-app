import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState<DZ.User | null>(null);

  const handleLogin = () => {
    // Then, request the user to log in
    DZ.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          DZ.api("/user/me", function (response) {
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
    <main>
      <Flex align={"center"} justify={"center"}>
        {user ? (
          <Text align={"center"}>{user.name}</Text>
        ) : (
          <Button onClick={handleLogin}>Login with Deezer</Button>
        )}
      </Flex>
    </main>
  );
}

export default App;
