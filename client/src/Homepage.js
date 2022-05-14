import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import hero from "./Assets/hero.png";
import bg from "./Assets/bg.png";
export default function Homepage() {
  return (
    <Box>
      <Box bg="#8AC4CD" minHeight="100vh">
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "7xl" }}
              >
                <Text as={"span"} color={"white"}>
                  SumNotes
                </Text>
              </Heading>
              <Text color={"white"} fontSize="2xl" fontWeight={500}>
                Summarize school notes and work for more effective study time.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  bg="#C2C693"
                >
                  <Link href="/MasseyHacks">Start Summarizing</Link>
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  align={"center"}
                  w={"50%"}
                  h={"50%"}
                  src={hero}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
