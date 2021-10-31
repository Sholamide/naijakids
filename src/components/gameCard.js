import {
  AspectRatio,
  Box,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const GameCard = (props) => {
  const { game, rootProps } = props;
  const {
    GameTitle,
    GameDescription,
    // Topic,
    // Group,
    // Level,
    // Subject,
    GameImage,
  } = game;
  return (
    <Stack
      bg="green.100"
      borderWidth="5px"
      borderColor="red.900"
      borderRadius="base"
      px={{ base: "4", md: "6" }}
      py={{ base: "4", md: "6" }}
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio>
          <Image
            src={GameImage}
            alt={GameTitle}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xl",
            })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            bg="green.900"
            p="10px"
            mx="auto"
            borderRadius="2xl"
            fontWeight="bold"
            color="white"
          >
            Title
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            {GameTitle}
          </Text>
        </Stack>
        <Stack spacing="1">
          <Text
            fontWeight="bold"
            bg="red.900"
            p="5px"
            mx="auto"
            borderRadius="2xl"
            color="white"
            fontSize="sm"
          >
            Game Description
          </Text>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.100")}
          >
            {GameDescription}
          </Text>
        </Stack>
        {/* <HStack>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.100")}
          >
            {Topic}
          </Text>
        </HStack> */}
        {/* <HStack>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.100")}
          >
            {Group}
          </Text>
        </HStack> */}
        {/* <HStack>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.100")}
          >
            {Level}
          </Text>
        </HStack> */}
        {/* <HStack>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.100")}
          >
            {Subject}
          </Text>
        </HStack> */}
      </Stack>
    </Stack>
  );
};
