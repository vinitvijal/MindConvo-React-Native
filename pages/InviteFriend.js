import { SafeAreaView } from '@gluestack-ui/themed';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const InviteFriend = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Invite Friend
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default InviteFriend;
