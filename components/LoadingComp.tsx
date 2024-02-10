import { HStack, Heading, Spinner } from "native-base";
import React from "react";

const Example = () => {
    return <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>;
  };