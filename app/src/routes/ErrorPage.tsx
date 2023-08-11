import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button, Flex, Text } from "@radix-ui/themes";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <main>
      <Flex gap={"6"} align={"center"} justify={"center"} direction={"column"}>
        <Flex direction={"column"}>
          <h1 className="text-4xl font-bold">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="text-slate-400">
            <i>{errorMessage}</i>
          </p>
        </Flex>
          <Button size={"3"} onClick={() => window.location.href="/"}>Go back home</Button>
      </Flex>
    </main>
  );
}
