import {
  HStack,
  Heading,
  VStack,
  Text,
  Button,
  Image,
  Center,
  Divider,
  Box,
  // List,
  // ListItem,
  // ListIcon,
  Icon,
  FormControl,
  Input,
  Spacer,
  Hide,
} from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaYoutube,
  FaFacebook,
  FaInvision,
  FaDiscord,
} from "react-icons/fa";
// import SideBar from "../NavigationBar/NavItem/SideBar";

const buttonsOther = [
  { name: "Launch App", link: "https://example.com/button1" },
  { name: "Strategic Vault", link: "https://example.com/button1" },
  { name: "Stats", link: "https://example.com/button1" },
  { name: "Audits", link: "https://example.com/button1" },
  { name: "Careers", link: "https://example.com/button1" },
  // { name: "Branding", link: "https://example.com/button1" },
  // { name: "Terms of Use", link: "https://example.com/button1" },
  // { name: "Privacy Policy", link: "https://example.com/button1" },
];

const buttonsCommunity = [
  { name: "Twitter", link: "https://example.com/button1" },
  { name: "Discord", link: "https://example.com/button1" },
  { name: "Telegram", link: "https://example.com/button1" },
  { name: "Reddit", link: "https://example.com/button1" },
  { name: "News", link: "https://example.com/button1" },
  { name: "Newsletter", link: "https://example.com/button1" },
];
const buttonsDeveloper = [
  { name: "Join Our Rise", link: "https://example.com/button1" },
  { name: "Docs", link: "https://example.com/button1" },
  { name: "Github", link: "https://example.com/button1" },
  { name: "Discord", link: "https://example.com/button1" },
];
function Footer() {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        alignItems="flex-start"
        py="16"
        // px="20em"
        // borderWidth="thin"
        px={{ base: "2%", md: "4%", lg: "8%", xl: "10%" }}
        // p={5}
        // w="full"
        // h="full"
        color="white"
        bgColor="transparent"
        backdropFilter={"blur(50px)"}
        borderBottom="2px solid #EF6B3D"
        display={{ lg: "flex" }}
      >
        <VStack w={{ base: "95%", lg: "40%" }} alignItems="flex-start">
          <HStack>
            <Image
              boxSize={12}
              bg="#370351"
              borderRadius="full"
              objectFit="cover"
              src={"/HeaderImg/logo.svg"}
              alt="Company logo"
            />
            <Center h={50}>
              <Divider orientation="vertical" />
            </Center>
            <Heading size="md" color="white">
              Defi
              <Box as="span" fontWeight="bold" color="#EF6B3D">
                Bulls
              </Box>
            </Heading>
          </HStack>
          <Text fontSize="md" pb="2" py="20px" borderBottom="1px solid #EF6B3D">
          Our platform combines cutting-edge technology with a commitment to user education, empowering you to navigate the world of crypto with confidence and ease
          </Text>
          <Heading size={"sm"} py="10px">
            Social Media
          </Heading>
          <HStack w="100%" gap="20px">
            <Icon as={FaTwitterSquare} boxSize={7} />
            <Icon as={FaYoutube} boxSize={8} />
            <Icon as={FaFacebook} boxSize={7} />
            <Icon as={FaDiscord} boxSize={8} />
            <Icon as={FaInvision} boxSize={7} />
          </HStack>
        </VStack>

        <HStack
          alignItems="flex-start"
          my={{ base: "2rem", lg: "0" }}
          justifyContent="space-around"
          w="100%"
        >
          <VStack alignItems="flex-start" p="5px">
            <Heading size="md">Community</Heading>
            {buttonsDeveloper.map((buttonsDeveloper, index) => (
              <Button
                key={index}
                variant="unstyled"
                h="7"
                px="2"
                as="a"
                href={buttonsDeveloper.link}
                target="_blank"
                _hover={{
                  color: "#EF6B3D",
                }}
              >
                {buttonsDeveloper.name}
              </Button>
            ))}
          </VStack>
          
          <VStack alignItems="flex-start" p="5px">
          <Hide below="sm">
              <Heading size="md">Community</Heading>
              {buttonsCommunity.map((buttonsCommunity, index) => (
                <Button
                  key={index}
                  variant="unstyled"
                  h="7"
                  px="2"
                  as="a"
                  href={buttonsCommunity.link}
                  target="_blank"
                  _hover={{
                    color: "#EF6B3D",
                  }}
                >
                  {buttonsCommunity.name}
                </Button>
              ))}
                </Hide >
            </VStack>
        
          <VStack alignItems="flex-start" p="5px">
            <Heading size="md">Other</Heading>
            {buttonsOther.map((buttonsOther, index) => (
              <Button
                key={index}
                variant="unstyled"
                h="7"
                px="2"
                as="a"
                href={buttonsOther.link}
                target="_blank"
                _hover={{
                  color: "#EF6B3D",
                }}
              >
                {buttonsOther.name}
              </Button>
            ))}
          </VStack>
        </HStack>

        <VStack w={{ lg: "45%", xl: "35%" }} alignItems="flex-start">
          <Heading size="md">Subscribe to Our Newletter</Heading>

          <FormControl w="70%" isRequired mt="1em">
            <Input placeholder="Email" h="3em" bg="#370351" borderRadius="0" />
          </FormControl>

          <Button
            bgColor="#EF6B3D"
            h="2.5em"
            w="50%"
            color="white"
            borderRadius="0"
            _hover={{
              bg: "#A24F32",
            }}
          >
            Send
          </Button>
        </VStack>
      </HStack>

      <VStack
        mx={{ base: "0", md: "2%", lg: "8%", xl: "10%" }}
        w="80%"
        mb="2em"
      >
        <HStack justifyContent="center">
          <Text color="white">2023 @ Company.Ltd | All right reserved</Text>
        </HStack>
      </VStack>
    </>
  );
}

export default Footer;
