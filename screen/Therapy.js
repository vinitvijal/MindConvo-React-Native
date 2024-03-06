import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, ButtonText } from "@gluestack-ui/themed";

const Therapy = () => {
    return (
        <SafeAreaView>
            <Text>Therapy</Text>
            <Button action="secondary">
                <ButtonText>Go to Details</ButtonText>
            </Button>
        </SafeAreaView>
    );
}

export default Therapy;
