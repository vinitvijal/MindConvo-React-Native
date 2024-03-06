import React from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

const Discover = ({ navigation }) => {
    return (
        <SafeAreaView>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Discover;
