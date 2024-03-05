import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Discover = ({ navigation }) => {
    return (
        <View>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Therapy')}
        />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Discover;
