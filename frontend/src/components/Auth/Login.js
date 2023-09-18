import React from 'react'
import {
    FormControl,
    FormLabel,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";
const Login = () => {

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
 
    const handleClick = () => setShow(!show);
    const postDetails = (pic) => {};
    const submitHandle = () => {};
    return (
        <VStack>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </FormControl>
    
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width={"4.5rem"}>
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        
       
          <Button
            colorScheme="blue"
            width="100%"
            style={{ margintTop: 15 }}
             onClick={submitHandle}
          >
            Login
            </Button>
            <Button
            colorScheme="red"
            width="100%"
            style={{ margintTop: 15 }}
                onClick={() => {
                    setEmail("guest@rahul.com");
                    setPassword("123456");
             }}
          >
            Guest Login
          </Button>
        </VStack>
      );
    };


export default Login