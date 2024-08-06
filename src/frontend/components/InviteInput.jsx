import React from "react";
import { Text, Box, Button, HStack, Input, Flex } from '@chakra-ui/react';

const InviteInput = () => {
    return (
        <Box alignContent='center'  width='27vh' >
        <Flex 
            ml='3vh'
            
             
            borderRadius='md'
            p='1px'
        >
            <HStack className='valfont' border='2px white' justifyContent='center' width='100%' spacing='2px'>
                <Input 
                    placeholder="Username" 
                    variant="unstyled" 
                    height='80%' 
                    width='70%'
                    className="valfont"
                    border='white'
                    bg='transparent' 
                    _placeholder={{ color: 'whiteAlpha.700' }} 
                    color='white' 
                />
                <Button bg='#FE4553' borderRadius='0.5vh' height='80%' ml='1vh' width='4vh' border='none'>
                    <Text color='white'>></Text>
                </Button>
            </HStack>
        </Flex>
        </Box>
    );
}

export default InviteInput;
