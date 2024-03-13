import { View } from 'react-native'
import React from 'react'
import { Box, Button, ButtonText, Center, HStack, Icon, Input, InputField, VStack } from '@gluestack-ui/themed'
import { Heading } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import {ArrowLeftIcon} from 'lucide-react-native'
import { User } from 'lucide-react-native'
import { Avatar } from '@gluestack-ui/themed'

const Account = () => {
  return (
    <View >
  
      <View>
          <Box p='$5' maxWidth='$96' mt="$1/4">
          <Center ml="$10">
            <VStack space="2xl" alignItems="center">
              <HStack space="md" justifyContent="center">
                <Avatar bgColor="#806210" rounded="$full">
                  <Icon as={User} color="white" size="xl" />
                </Avatar>
              </HStack>
              <Heading size="sm" mt="-$4">Sumona</Heading>
              <Text mt="-$6" fontSize={'$xs'}>
                sumona123@gmail.com
              </Text>
            </VStack>
          </Center>
          
          <Box mt="$12" ml="$5">
            <VStack space='xl'>
              <Text fontSize='$sm' mt="$4">
                Bio
              </Text>
              <Input mt="-$4">
                <InputField
                  py='$2'
                  placeholder=""
                />
              </Input>
            </VStack>
            <VStack space='xl'>
              <Text fontSize='$sm' mt="$4">
                Gender
              </Text>
              <Input mt="-$4">
                <InputField
                  py='$2'
                  placeholder=""
                />
              </Input>
            </VStack>
            <VStack space='xl'>
              <Text fontSize='$sm' mt="$4">
                Contact
              </Text>
              <Input mt="-$4">
                <InputField
                  py='$2'
                  placeholder=""
                />
              </Input>
            </VStack>
            <VStack space='xl'>
              <Text fontSize='$sm' mt="$4">
                DOB
              </Text>
              <Input mt="-$4">
                <InputField
                  py='$2'
                  placeholder=""
                />
              </Input>
            </VStack>
            <VStack space='lg' pt='$4'>
              <Button
                size='sm' bg="#806210" mt="$6"
              >
                <ButtonText >
                  Edit Profile
                </ButtonText>
              </Button>
            </VStack>
          </Box>
          </Box>
        </View>
      
    </View>
  )
}

export default Account