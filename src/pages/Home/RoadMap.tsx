import React from "react";
import {
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Card,
  Stack,
  CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const cardData = [
  {
    imageSrc: "/HeaderImg/RoadMap/step1.png",
    title: "step 1",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.beverage of Italian origin made with espresso and steamed milk.",
  },
  {
    imageSrc: "/HeaderImg/RoadMap/step2.png",
    title: "step 2",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.beverage of Italian origin made with espresso and steamed milk.",
  },
  {
    imageSrc: "/HeaderImg/RoadMap/step3.png",
    title: "step 3",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.beverage of Italian origin made with espresso and steamed milk.",
  },
  {
    imageSrc: "/HeaderImg/RoadMap/step4.png",
    title: "step 4",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.beverage of Italian origin made with espresso and steamed milk.",
  },
];
const borderRadiusArray = [
  "20px 20px 0px 20px",
  "20px 20px 0px 20px",
  "20px 0px 20px 20px",
  "20px 0px 20px 20px",
];
function RoadMap() {
    return (
        <VStack my="7%" px={{ base: "1%", md: "3%", lg: "5%", xl: "10%" }} >
        <Heading color="white" pb="2em">How It Works Section</Heading>
      <HStack w="100%" 
        display={{ lg: "flex" }}>
          
      {/* Left side content */}
      <VStack
        w={{ base: "100%", md: "100%", lg: "60%" }}
        alignItems={{ sm: "center", lg: "flex-start", xl: "flex-start" }}
        p="2%"
          // borderWidth="thick"
            justifyContent="center"
            alignContent="center"
            
      >
        <motion.div
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
              transition={{ duration: 1 }}
            
        >
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  direction={{ base: "column", sm: "row" }}
                  mb="25px"
                  // ml="5em"
                  w={{sm:"90%",lg:"80%"}}
                  bg="#370351"
                  overflow="hidden"
                  alignItems="center"
                 
                  px="10px"
                  // marginRight="2em"
                  // borderRadius="20px 0px 20px 20px"
                  borderRadius={{sm:"20px", lg: borderRadiusArray[index] }}
                  marginLeft= {{
                   sm:index === 1 || index=== 3 ? "0em":'', lg: index === 0 || index === cardData.length - 1 ? '10em' : '',
                  }}
            >
              <Image
                objectFit="cover"
                w="100px"
                h="100px"
                    maxW={{ base: "100%", sm: "200px" }}
                src={card.imageSrc}
                alt={card.title}
              />

              <Stack>
                <CardBody textColor="white">
                  <Heading size="md">{card.title}</Heading>
                  <Text py="2">{card.description}</Text>
                </CardBody>

                {/* <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy Latte
                  </Button>
                </CardFooter> */}
              </Stack>
            </Card>
          ))}
        </motion.div>
      </VStack>

      {/* Right side image */}
      <VStack>
        <MotionImage
          src="/HeaderImg/RoadMapIMG.png"
          alt="Header image"
          objectFit="cover"
              h={{ md: "30em", lg: "30em", xl: "30em", "2xl": "35em" }}
              borderRadius="full"
          initial={{ x: "200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        />
      </VStack>
            </HStack>
            </VStack>
  );
}

export default RoadMap;
