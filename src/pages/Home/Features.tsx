import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

function Features() {
  const cardsData = [
    {
      heading: "Algorithmic Trading",
      text: "Utilize advanced algorithms for data analysis and decision-making.Automatic execution of trades based on predefined strategies",
      ImgLink:"/HeaderImg/Features/AlgorithmicTrading.jpg",
    },
    {
      heading: "Diversified Portfolio",
      text: "Offer a range of cryptocurrencies in the trading portfolio.Diversify investments to spread risk and optimize returns.",
      ImgLink:"/HeaderImg/Features/Diversified.jpg",
    },
    {
      heading: "Transparent Reporting",
      text: "Provide real-time reporting on trades, profits, and portfolio performance.Transparent breakdown of fees and charges.",
      ImgLink: "/HeaderImg/Features/Transparent.jpg",
    },
    {
      heading: "Risk Management",
      text: "Implement risk management strategies to protect client investments.Set stop-loss limits and other risk mitigation measures.",
      ImgLink:"/HeaderImg/Features/RiskManagement.jpg",
    },
    {
      heading: "Secure Wallet Integration",
      text: "Clearly outline how profits are calculated and distributed.Automatic and transparent profit-sharing processes.",
      ImgLink:"/HeaderImg/Features/SecureWallet.jpg",
    },
    {
      heading: "User-Friendly Interface",
      text: "Utilize secure cryptocurrency wallets for fund storage.Implement industry-standard security protocols for wallet management.",
      ImgLink:"/HeaderImg/Features/UserFriendlyUI.jpg",
    },
    // Add more data for each card as needed
  ];

  return (
    <VStack w="100%" >
      <Heading color="white" my="1em"> Features</Heading>
      <HStack >
        <SimpleGrid spacing={15} columns={{md:2,xl:3}} >
          {cardsData.map((data, index) => (
            <Card
              key={index}
              w={{ md:"350px",lg:"400px"}}
              bgColor="#370351"
              color="white"
              m="1rem"
              alignItems="center"
              textAlign="center"
              borderRadius="15px"
            >
              <CardHeader>
                <Image
                  src={data.ImgLink}
                  w="12em"
                  h="12em"
                  borderRadius="30px"
                  bgColor="#EF6B3D"
                />
              </CardHeader>
              <CardBody>
                <Heading fontSize="xl">{data.heading}</Heading>
                <Text>{data.text}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  w={{ base: "7em", lg: "8em" }}
                  h="2em"
                  bg="#EF6B3D"
                  _hover={{
                    bg: "#A24F32",
                  }}
                  color="white"
                  borderRadius="0"
                  fontSize="20px"
                >View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </HStack>
    </VStack>
  );
}

export default Features;
