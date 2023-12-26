import React from "react";
import SideBar from "./Sidebar";
// import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Box,
  HStack,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Spacer,
  Icon,
  Hide,
} from "@chakra-ui/react";
import {
  MdRocket,
  MdWindow,
  MdCloud,
  MdFileCopy,
  MdMessage,
  MdShare,
} from "react-icons/md";
function Nav() {
  return (
    <HStack w="100%" px={{base:"1%",md:"3%",lg:"6%",xl:"10%"}} py="5" alignContent="start">
      {/* logo title ------  */}
      <HStack cursor="pointer">
        <Image
          bg="#370351"
          boxSize={16}
          borderRadius="full"
          objectFit="cover"
          src={"/HeaderImg/logo.svg"}
          alt="Company logo"
        />
        <Center h={50}>
          <Divider orientation="vertical" />
        </Center>
        <Heading size="md" color="white">
          Defi<Box as="span" fontWeight="bold" color="#EF6B3D">Bulls</Box>
        </Heading>
      </HStack>

      <Spacer />

      {/* Nav links ------ */}
      <HStack>
        <Box>
          <HStack display={{ base: "none", lg: "flex" }}>
            <Button bg="transparent" color="RGBA(255, 255, 255, 0.64)"  _hover={{
              color:"#EF6B3D",
            }}>
              Exchange
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button background="transparent" color="RGBA(255, 255, 255, 0.64)"_hover={{
              color:"#EF6B3D",
            }}>
                  About
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent borderTop="2px solid #EF6b3d" color="white"background="transparent" backdropFilter={"blur(70px)"}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody >
                    <Link display="flex" py="2">
                      <Icon as={MdWindow} boxSize={5} mr="3" />
                      Build with Us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdRocket} boxSize={5} mr="3" /> Join us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdCloud} boxSize={5} mr="3" />
                      Validator Incentives
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdFileCopy} boxSize={5} mr="3" />
                      Build with Us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdShare} boxSize={5} mr="3" />
                      Join us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdMessage} boxSize={5} mr="3" />
                      Validator Incentives
                    </Link>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <Button background="transparent" color="RGBA(255, 255, 255, 0.64)" _hover={{
              color:"#EF6B3D",
            }} >
                  Features
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent  borderTop="2px solid #EF6b3d" color="white"background="transparent" backdropFilter={"blur(70px)"}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Link display="flex" py="2">
                      <Icon as={MdWindow} boxSize={5} mr="3" />
                      Build with Us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdRocket} boxSize={5} mr="3" /> Join us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdCloud} boxSize={5} mr="3" />
                      Validator Incentives
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdFileCopy} boxSize={5} mr="3" />
                      Build with Us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdShare} boxSize={5} mr="3" />
                      Join us
                    </Link>
                    <Link display="flex" py="2">
                      <Icon as={MdMessage} boxSize={5} mr="3" />
                      Validator Incentives
                    </Link>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
            <Button bg="transparent" color="RGBA(255, 255, 255, 0.64)" _hover={{
              color:"#EF6B3D",
            }} >
              Community
            </Button>
          </HStack>
        </Box>
      </HStack>

      {/* Nav button------ */}
      <HStack pr="10px">
        <Hide below="md">
          <Button
            colorScheme="green"
            bg="#370351"
            _hover={{
              bg: "#12042E",
            }}
            borderRadius="0"
          >
            Login
          </Button>
        </Hide>
        <Hide below="sm">
          <Button
            bgColor="#370351"
            color="#EF6B3D"
            _hover={{
              bg: "#12042E",
            }}
            borderRadius="0"
          >
            Get Started
          </Button>
        </Hide>
        <Box display={{ base: "flex", lg: "none" }}>
          <SideBar />
        </Box>
      </HStack>
    </HStack>
  );
}

export default Nav;
