import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

export type RevealAnwserProps = {
  answer: string;
  handleNext: () => void;
};

function RevealAnwser({ answer, handleNext }: RevealAnwserProps) {
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guess === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setGuess("");
    setIsCorrect(false);
    setSubmitted(false);
  };
  
  return (
    <Flex align={"center"} justify={"center"} direction={"column"} gap={"5"}>
      {submitted ? (
        isCorrect ? (
          <Text color="green">Correct!</Text>
        ) : (
          <Text color="red">Wrong answer</Text>
        )
      ) : (
        <form onSubmit={handleSubmit}>
          <Flex align={"center"} justify={"center"} direction={"column"} gap={"5"}>
            <Text>Guess the year:</Text>
            <TextField.Root>
              <TextField.Input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="2023 ?"
              />
            </TextField.Root>
            <Button disabled={!guess} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      )}
      <Button
        onClick={() => {
          handleNext();
          handleReset();
        }}
      >
        Next song
      </Button>
    </Flex>
  );
}

export default RevealAnwser;
