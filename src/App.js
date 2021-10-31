import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, HStack } from "@chakra-ui/layout";
import { Icon, Stack, Select, Link, Text, Spinner } from "@chakra-ui/react";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { GameCard } from "./components/gameCard";
import { GameGrid } from "./components/gameGrid";
import { Image } from "@chakra-ui/image";
import Typical from "react-typical";

const baseURL =
  "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter";

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [groupFilterParams, setGroupFilterParams] = useState(["All"]);
  const [levelFilterParams, setLevelFilterParams] = useState(["All"]);
  const [searchParams] = useState(["Topic"]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setIsLoaded(true);
      setGamesList(response.data);
    });
  }, []);

  function search(gamesList) {
    return gamesList.filter((game) => {
      if (game.Group == groupFilterParams) {
        return searchParams.some((newGame) => {
          return (
            game[newGame]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        });
      }
      if (game.Level == levelFilterParams) {
        return searchParams.some((newGame) => {
          return (
            game[newGame]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        });
      }
      if (game.Level == levelFilterParams && game.Group == groupFilterParams) {
        return searchParams.some((newGame) => {
          return (
            game[newGame]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        });
      } else if (groupFilterParams == "All" && levelFilterParams == "All") {
        return searchParams.some((newGame) => {
          return (
            game[newGame]
              .toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (!isLoaded) {
    return (
      <Stack>
        <Spinner
          position="fixed"
          left="0px"
          right="0px"
          zIndex="9999"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Stack>
    );
  } else {
    return (
      <>
        <Box
          maxW="7xl"
          mx="auto"
          w="100%"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack>
            <Stack spacing="4">
              <Image boxSize="150px" src="naijakidslogo.png" />
              <Stack direction="row" spacing="4" justify="space-between">
                {" "}
                <Text as="i" fontSize="xl">
                  <Typical
                    steps={[
                      "Hi there, my name is Olamide 🙃🙃",
                      1500,
                      "This is my one page catalogue   for the react front-end internship task 🕶️🕺",
                      1500,
                      "This project was built using React and ChakraUI 😎🎩",
                      1500,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </Text>
                <Stack>
                  <Link
                    fontWeight="bold"
                    color="green.900"
                    href="https://github.com/Sholamide/naijakids"
                    isExternal
                  >
                    Github Repo
                    <Icon as={FaExternalLinkSquareAlt} />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <HStack px="12px" py="18px" direction="row">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsSearch} px="4px" />}
              />
              <Input
                variant="flushed"
                placeholder="Search games by Topic"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </InputGroup>

            <Select
              icon={<Icon as={BsCaretDownFill} />}
              variant="filled"
              aria-label="Filter games by Groups"
              onChange={(e) => {
                setGroupFilterParams(e.target.value);
              }}
            >
              <option value="All">Filter Games by Groups</option>
              <option value="Academic">Academic</option>
              <option value="Financial Literacy">Financial Literacy </option>
            </Select>
            <Select
              icon={<Icon as={BsCaretDownFill} />}
              variant="filled"
              aria-label="Filter games by Levels"
              onChange={(e) => {
                setLevelFilterParams(e.target.value);
              }}
            >
              <option value="All">Filter Games by Levels</option>
              <option value="Key Stage 1">Key Stage 1</option>
              <option value="Financial Literacy">Financial Literacy</option>
              <option value="Key Stage 2">Key Stage 2</option>
            </Select>
          </HStack>
          <GameGrid>
            {search(gamesList).map((game) => (
              <GameCard key={game.GameTitle} game={game} />
            ))}
          </GameGrid>
        </Box>
      </>
    );
  }
}

export default App;
