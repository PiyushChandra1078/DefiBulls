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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const CoinIcon = { h: "12", w: "12", mr: "5" };

function Header() {
  return (
    <HStack w="100%" px={{ base: "1%", md: "3%", lg: "7%", xl: "10%" }} 
      display={{ lg: "flex" }}
    >

      {/* Left side content */}
      <VStack
        w={{ base: "100%", lg: "50%" }}
        alignItems={{ base: "center", lg: "center", xl: "flex-start" }}
        p="2%"
      >
        <motion.div
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
         
        >
          <Heading as="h5" size="xm" color="#EF6B3D" textTransform="uppercase"  >
            In love with React & Next
          </Heading>
          <Heading
            size={{ base: "2xl", lg: "2xl", xl: "3xl" }}
            color="white"
            
          >
           Empower Your Finances with DefiBulls
            <Box as="span" fontWeight="bold" color="#EF6B3D" position="relative">
              {" "}
              Buy, Sell & Trade
            </Box>
           
          </Heading>

          <Text fontSize="lg" mt="20px" color="white">
          Embark on a transformative journey in the world of cryptocurrency with DefiBulls. Our platform integrates state-of-the-art technology to provide you with unparalleled algorithmic trading capabilities. Take control of your financial destiny and experience a new era of precision, transparency, and profitability.
          </Text>

          <HStack mt="25px">
            <Button
              w={{ base: "7em", lg: "12em" }}
              h="2.5em"
              bg="#EF6B3D"
              _hover={{ bg: "#A24F32" }}
              color="white"
              borderRadius="0"
              fontSize="20px"
            >
              Get Started
              <ArrowForwardIcon ml="5px" mt="4px" />
            </Button>
          </HStack>

          {/* Reusable Coin Stack Component */}
          <CoinStack />
        </motion.div>
      </VStack>

      <Spacer />

      {/* Right side image */}
      <VStack>
        <MotionImage
          src="/HeaderImg/RightSideImg.png"
          alt="Header image"
          objectFit="cover"
          h={{ md: "30em", lg: "30em", xl: "35em" }}
          initial={{ x: "200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        />
      </VStack>
    </HStack>
  );
}

// Reusable Coin Stack Component
function CoinStack() {
  return (
    <HStack mt="5" spacing={5}>
      <Image src="/HeaderImg/btc-logo.svg" sx={CoinIcon} />
      <Image src="/HeaderImg/ltc-logo.svg" sx={CoinIcon} />
      <Image src="/HeaderImg/eth-logo.svg" sx={CoinIcon} />
    </HStack>
  );
}

export default Header;
