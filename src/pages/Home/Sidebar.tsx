import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  VStack,
  Icon,
  HStack,
  Image,
  Center,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
// import LogoTitle from "/HeaderImg/logo.svg";
import { RxDashboard } from "react-icons/rx";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = {
    borderRadius: "md",
    // borderWidth: 'thin',
    px: "3",
    py: "5px",
    h: "9",
    w: "110px",
    ml: "5px",
    fontWeight: "bold",
    fontSize: "15px",
  };
  // useDisclosure
  return (
    <>
      <Icon
        as={RxDashboard}
        color="white"
        boxSize={8}
        onClick={onOpen}
        cursor={"pointer"}
      ></Icon>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerContent
          borderLeftRadius="50px"
          borderLeftWidth="thick"
          borderLeftColor="#EF6B3D"
          bgColor="transparent"
          backdropFilter={"blur(50px)"}
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <HStack cursor="pointer" mb="10px">
              <Image
            
                boxSize={14}
            
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

            <Divider />
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Box sx={navLinks}>
                <Link href="#" color="white">
                  Exchange
                </Link>
              </Box>
              <Box sx={navLinks}>
                <Menu isLazy>
                  <MenuButton fontWeight="bold" color="white">
                    About
                  </MenuButton>
                  <MenuList
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box sx={navLinks}>
                <Menu isLazy>
                  <MenuButton fontWeight="bold" color="white">
                    Features
                  </MenuButton>
                  <MenuList px="25px" py="20px" w="20em">
                    <MenuItem>
                      <Link>Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Join us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Link> Build with Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>
                        <ChatIcon mr="10px" />
                        Join us
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link>Validator Incentives</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box sx={navLinks}>
                <Link href="#" color="white">
                  Community
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
