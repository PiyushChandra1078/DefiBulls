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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

function TradView() {
  const coinIconStyles = { h: "12", w: "12", mr: "5" };
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
    <>
      <VStack  my="5em"  w="100%" px={{ base: "1%", md: "3%", lg: "7%", xl: "10%" }} 
     >
        <Heading color="white"> Trading Overview </Heading>
        <HStack  display={{ lg: "flex" }}>
          <VStack>
            <MotionImage
              src="/HeaderImg/TradViewImg.png"
              alt="Header image"
              objectFit="cover"
              h={{ md: "30em", lg: "40em", xl: "40em" }}
              {...imageAnimationProps}
            />
          </VStack>
          <Spacer />
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
              <Heading
                as="h6"
                size="sm"
                color="#EF6B3D"
                textTransform="uppercase"
              >
                Overview
              </Heading>
              <Heading size="2xl" color="white" position="relative">
              Revolutionize Your Trading Experience {" "}
                <Box as="span" fontWeight="bold" color="#EF6B3D">
                with DefiBulls
                </Box>
              </Heading>

              <Text fontSize="lg" mt="20px" color="white">
              Explore a dynamic and efficient trading experience with DefiBulls. Our platform leverages cutting-edge algorithmic trading to navigate the complexities of the cryptocurrency market. Whether you're a novice investor or an experienced trader, DefiBulls offers a transparent and user-friendly interface, ensuring a seamless journey into the world of crypto trading.
              </Text>
              <List spacing={2} mt="15px">
                <ListItem color="white">
                  <ListIcon as={MdCheckCircle} color="white" />
                  Algorithmic Precision
                </ListItem>
                <ListItem color="white">
                  <ListIcon as={MdCheckCircle} color="white" />
                  User-Friendly Interface
                </ListItem>
              </List>
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

         
        </HStack>
      </VStack>
    </>
  );
}

export default TradView;
