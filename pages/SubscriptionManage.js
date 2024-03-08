import { Button, SafeAreaView } from '@gluestack-ui/themed';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const SubscriptionManage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Manage Subscription
            </Text>
            <Button onPress={() => navigation.navigate('Profile')}>
                <Text>Go to Profile</Text>
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default SubscriptionManage;
