import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Button,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";

const Hotels = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w={"100vh"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button
        colorScheme="blue"
        m={"1rem"}
        variant="solid"
        onClick={() => navigate("/adminlogin")}
      >
        ADMIN
      </Button>

      <Button
        colorScheme="teal"
        m={"1rem"}
        variant="solid"
        onClick={() => navigate("/signup")}
      >
        USER
      </Button>
    </Flex>
  );
};

export default Hotels;
