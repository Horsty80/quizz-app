import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

export type RevealAnwserProps = {
  answer: string;
  handleNext: () => void;
};

function RevealAnwser({ answer, handleNext }: RevealAnwserProps) {
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (guess === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Flex align={"center"} justify={"center"} direction={"column"} gap={"5"}>
      <Text>Guess the year:</Text>
      <TextField.Root>
        <TextField.Input
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="2023 ?"
        />
      </TextField.Root>
      <Button onClick={handleSubmit}>Submit</Button>
      {isCorrect ? <Text color="green">Correct!</Text> : <Text color="red">Wrong answer</Text>}
      <Button onClick={handleNext}>Next song</Button>
    </Flex>
  );
}

export default RevealAnwser;
