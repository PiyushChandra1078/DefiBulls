import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  HStack,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  VStack,
  Hide,
  Spacer,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

const CoinIcon = { h: "10", w: "10", mr: "2" };
const BtnStyle = {
  color: "#EF6B3D",
  borderWidth: "thin",
  borderColor: "#EF6B3D",
  background: "transparent",
};

const coinData = [
  { symbol: "BTC", pair: "BTC/USD", price: 69546, change: "+30.48%" },
  { symbol: "ETH", pair: "ETH/USD", price: 69546, change: "+29.48%" },
  { symbol: "LTC", pair: "LTC/USD", price: 69546, change: "+30.48%" },
];

function CoinChart() {
  return (
    <Box w="100%" px={{ base: "1%", md: "3%", lg: "7%", xl: "10%" }}>
      <Hide below="md">
      <Table variant="simple" color="white"  >
        <Thead>
          <Tr>
            <Th>Cryptocurrency</Th>
            <Th isNumeric>Last Price</Th>
            <Th isNumeric>Charge 24h</Th>
            <Th>chart </Th>
            <Th>Start Trade</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coinData.map((coin, index) => (
            <Tr key={index}>
              <Td>
                <HStack>
                  <Image
                    src={`/HeaderImg/${coin.symbol.toLowerCase()}-logo.svg`}
                    sx={CoinIcon}
                  />
                  <Box fontSize="18px">
                    {coin.symbol}
                    <Box
                      ml="5px"
                      as="span"
                      fontSize="15px"
                      color="gray.500"
                      display={{ base: "none", md: "inline" }}
                    >
                      {coin.pair}
                    </Box>
                  </Box>
                </HStack>
              </Td>

              <Td isNumeric fontSize="20px">
                {coin.price}
                <Box ml="10px" as="span" fontSize="15px" color="gray.500">
                  <Box display={{ base: "none", md: "inline" }}>
                    .710
                  </Box>
                  USD
                </Box>
              </Td>
              <Td
                isNumeric
                color={coin.change.includes("+") ? "green" : "red"}
                fontWeight="bold"
                fontSize="20px"
              >
                {coin.change}
                {/* <BsArrowUpRight /> */}
              </Td>
              <Td>chart</Td>
              <Td>
                <Button sx={BtnStyle}>Trade</Button>
              </Td>

            </Tr>
          ))}
        </Tbody>
        </Table>
        </Hide>
      <VStack display={{ base: "inline", md: "none" }}>
        <CoinCard/>
      </VStack>
    </Box>
  );
}

function CoinCard() {
  return (
    <>
      {coinData.map((coin, index) => (
        <StatGroup
          color="white"
        borderRadius="15px"
          m="1em"
          bg="#370351"
          alignContent="center"
          p="1em"
          alignItems="center"
        >
          <Stat>
            <HStack>
              <Image
                src={`/HeaderImg/${coin.symbol.toLowerCase()}-logo.svg`}
                sx={CoinIcon}
              />
              <Box fontSize="20px">
              <Hide below="23em">  {coin.symbol}</Hide>
                <Box
                  ml="5px"
                  as="span"
                  fontSize="15px"
                  color="gray.500"
                  display={{ base: "none", sm: "inline" }}
                >
                  {coin.pair}
                </Box>
              </Box>
            </HStack>
          </Stat>
          <Spacer />
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber fontSize="lg"> {coin.price}USD</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {coin.change}
            </StatHelpText>
          </Stat>
          <Spacer />
          <Stat>
            {/* <StatLabel>Clicked</StatLabel> */}
            <Button sx={BtnStyle} w="full">
              Trade
            </Button>
          </Stat>
        </StatGroup>
      ))}
    </>
  );
}

export default CoinChart;
