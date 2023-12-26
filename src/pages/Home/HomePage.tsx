import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import CoinChart from "./CoinChart";
import TradView from "./TradView";
import Features from "./Features";
import { HStack, VStack } from "@chakra-ui/react";
import RoadMap from "./RoadMap";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <HStack bgImage="/HeaderImg/bg-circles.png" bgColor="#12042E">
        <HStack backdropFilter={"blur(70px)"}>
          <VStack>
            <Nav />
            <Header />
            <CoinChart />

            <HStack
              bgImage="/HeaderImg/bg-circles-2.png"
              bgColor="#12042E"
              bgSize="cover"
            >
              <HStack backdropFilter={"blur(70px)"}>
                <TradView />
              </HStack>
            </HStack>

        
               <Features />
             
            <RoadMap />
            <Testimonials />
            <AboutUs />
            <Footer />
          </VStack>
        </HStack>
      </HStack>
    </>
  );
}

export default HomePage;
