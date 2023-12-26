import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Avatar,
  Flex,
  Box,
  IconButton,
  Button,
  Image,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

const testimonialsData = [
  {
    text: "DefiBulls delivers on its promises. The algorithmic trading is efficient, and the transparent reporting keeps me in the loop. I've seen consistent profits and appreciate the user-friendly interface.",
    author: "John siko",
    role: "Crypto Enthusiast",
    avatarSrc: "/HeaderImg/Testimonials/people1.jpg",
  },
  {
    text: "DefiBulls made crypto trading accessible for me. The educational resources are helpful, and the diversified portfolio minimizes risks. It's a great platform for beginners",
    author: "Chris L.",
    role: "Novice Trader",
    avatarSrc: "/HeaderImg/Testimonials/people2.jpg",
  },
  {
    text: "DefiBulls impressed me with its commitment to security. The algorithm is adaptive, and the risk management strategies instill confidence. Regular market updates and analytics are a bonus.",
    author: "Sophia W. Adebayo",
    role: "Security-Focused User",
    avatarSrc: "/HeaderImg/Testimonials/people3.jpg",
  },
  {
    text: "DefiBulls is my choice for generating passive income through crypto. The transparent profit distribution and excellent customer support make it a reliable platform for growing assets.",
    author: "Ryan colson",
    role: "Seasoned Trader",
    avatarSrc: "/HeaderImg/Testimonials/people4.jpg",
  },
  // Add more testimonials as needed
];
const BtnStyle = {
  w: { sm: "8em", md: "10em" },
  h: "2em",
  bg: "#EF6B3D",
  color: "white",
  borderRadius: "0",
  fontSize: "16px",
};
function Testimonials() {
  return (
    <VStack
      my="5em"
      w="100%"
      px={{ base: "3%", md: "3%", lg: "7%", xl: "10%" }}
    >
      <HStack w="100%" mb="25px" justifyContent="space-between">
        <Heading textColor="white">Testimonials</Heading>
        <Button
          sx={BtnStyle}
          _hover={{
            bg: "#A24F32",
          }}
        >
          READ MORE
        </Button>
      </HStack>

      <HStack>
        <SimpleGrid spacing={15} columns={{ sm: 2, xl: 4 }}>
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              maxW="sm"
              bg="#370351"
              textColor="white"
              borderRadius="20px"
            >
              <CardBody>
                <Text>{testimonial.text}</Text>
              </CardBody>
              <CardFooter>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={testimonial.author}
                      src={testimonial.avatarSrc}
                    />
                    <Box>
                      <Heading size="sm" textColor="#EF6B3D">
                        {testimonial.author}
                      </Heading>
                      <Text>{testimonial.role}</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                  />
                </Flex>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </HStack>
    </VStack>
  );
}

export default Testimonials;
