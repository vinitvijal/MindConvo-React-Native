import React from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

const Discover = ({ navigation }) => {
    return (
        <SafeAreaView>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Therapy')}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Discover;
