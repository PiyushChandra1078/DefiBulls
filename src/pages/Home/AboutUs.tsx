import React from "react";
import {
    Button,
    HStack,
    VStack,
    Image,
    Heading,
    Text,
    Spacer,
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
  } from "@chakra-ui/react";
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  import { motion } from "framer-motion";
  
  const MotionImage = motion(Image);
  
  const cardData = [
    {
      heading: "Expertise and Dedication",
      text: "Backed by a team of financial experts and tech innovators, DefiBulls is driven by a passion for pushing the boundaries of what's possible in the dynamic world of cryptocurrency. Our commitment to excellence fuels our continuous pursuit of the latest advancements and the development of innovative trading solutions.",
      buttonText: "Buy Latte",
    },
    {
      heading: "Transparency and Trust",
      text: "DefiBulls places transparency and trust at the core of its operations. We believe in fostering a relationship built on openness and accountability. From transparent profit distribution mechanisms to detailed performance analytics, we ensure our users have the information they need to make informed decisions and trust the DefiBulls platform with confidence.",
      buttonText: "Buy Latte",
    },
  ];
  
  function AboutUs() {
    const imageAnimationProps = {
      initial: { x: "-200%" },
      animate: { x: 0 },
      transition: { duration: 1 },
    };
    const textAnimationProps = {
      initial: { x: "200%" },
      animate: { x: 0 },
      transition: { duration: 1 },
    };
  
    return (
      <VStack my="5%"  w="100%" px={{ base: "1%", md: "3%", lg: "7%", xl: "10%" }} 
      display={{ lg: "flex" }}>
        <Heading color="white" mb="15px">
          Trading Overview
        </Heading>

        <HStack bg="#370351" borderRadius="20px" mb="20px" mx="10px" display={{md:"flex"}}>
          <VStack w={{ base: "100%", md: "90%", lg: "50%" }}>
            <MotionImage
              src="/HeaderImg/TradViewImg.png"
              alt="Header image"
              objectFit="cover"
              h={{ md: "25em", lg: "25em", xl: "30em" }}
              {...imageAnimationProps}
            />
          </VStack>
  
          <VStack
            w={{ base: "100%", md: "90%", lg: "50%" }}
            alignItems={{
              base: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
            p="2%"
          >
            <motion.div {...textAnimationProps}>
              <Heading size="2xl" color="white" position="relative">
              Discover DefiBulls: Simplifying Crypto Trading
                <Box as="span" fontWeight="bold" color="#EF6B3D">
                for Everyone, Everywhere
                </Box>
              </Heading>
  
              <Text fontSize="lg" mt="20px" color="white">
              Welcome to DefiBulls, where innovation meets integrity in the realm of cryptocurrency trading. Established with a vision to redefine the future of finance, DefiBulls brings together a team of seasoned experts and tech enthusiasts dedicated to providing a seamless and secure trading experience. Our mission is to empower individuals, from beginners to seasoned investors, with cutting-edge algorithmic trading strategies, transparent practices, and a commitment to financial success.
              </Text>
              <HStack mt="25px">
                <Button
                  w={{ base: "7em", lg: "12em" }}
                  h="2.5em"
                  bg="#EF6B3D"
                  _hover={{
                    bg: "#A24F32",
                  }}
                  color="white"
                  borderRadius="0"
                  fontSize="20px"
                >
                  Get Started
                  <ArrowForwardIcon ml="5px" mt="4px" />
                </Button>
              </HStack>
            </motion.div>
          </VStack>
  
          <Spacer />
        </HStack>
  
        <HStack display={{ md: "flex" }}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              bg="#370351"
              textColor="white"
              borderRadius="20px"
              m="10px"
            >
              <Stack>
                <CardBody p="2em">
                  <Heading size="md" mb="20px">{card.heading}</Heading>
  
                          <Text>{card.text}</Text>
                          <Button
                              w={{ base: "7em", lg: "9em" }}
                              mt="15px"
                    h="2.3em"
                    bg="#EF6B3D"
                    _hover={{
                      bg: "#A24F32",
                    }}
                    color="white"
                    borderRadius="0"
                  >
                    {card.buttonText}
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </HStack>
      </VStack>
    );
  }
  
  export default AboutUs;
  