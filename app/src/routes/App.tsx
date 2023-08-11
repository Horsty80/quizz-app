import { Flex, Text } from "@radix-ui/themes";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"9"}>
        <Link style={{textDecoration:"none"}} to="/">
          <Text align={"center"} size={"9"}>
            How old are you ?
          </Text>
        </Link>
        <Outlet />
      </Flex>
    </main>
  );
}

export default App;
