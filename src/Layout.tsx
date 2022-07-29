import React, { useEffect, useMemo } from 'react'
import { Outlet, Link } from "react-router-dom";
import { VStack, Flex, useDisclosure, useEventListenerMap } from '@chakra-ui/react';
import axios from 'axios';

import { useStore } from './store';
import Navbar from './Pages/Navbar'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

declare let window: any;

const Layout = () => {
  useEffect(() => {
    AOS.init({ duration: 300 })
  }, [])
  return (
    <Flex
      background={'black'}
      justify={'center'}
      w={'100%'}
    >
      <Flex
        direction='row'
        fontFamily="Caudex, serif"
        textStyle='primary'
        fontWeight='400'
        color={'white'}
        // maxWidth={'1440px'}
        w = {'100%'}
      >
        <Navbar />
        <Outlet />
      </Flex>
    </Flex>
  )
};
export default Layout;
