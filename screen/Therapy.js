import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { Button,Text, ButtonText, Divider, Pressable, ScrollView } from "@gluestack-ui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorCard from '../components/DoctorCard';

const Therapy = () => {
    const mindconvologo = require('../assets/logo-mind.png');
    return (
        <View style={{ flex: 1}}>
            <View style={{ borderBottomWidth: 1, flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, borderBottomColor: 'lightgrey',  backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>MindConvo</Text>
                <Pressable onPress={()=>console.log("object")}>
                    <Ionicons name="send" size={25} color="#F7813E" />
                </Pressable>
            </View>
            <ScrollView style={{ flex: 0.9, backgroundColor: 'white' }} stickyHeaderIndices={[1]}>
                <View style={{paddingVertical: 100, marginTop: -10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'wheat', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, marginBottom: 10}}>
                    <Text>Some Advertisment</Text>
                </View>
                <Divider my="$0.5" />
                <View style={{ backgroundColor: '#fff',paddingVertical: 10, paddingHorizontal: 20, position: 'sticky', top: 0, zIndex: 1}}>
                    <Text size="2xl" bold={true}>Recommended Therapist</Text>
                </View>
                <DoctorCard  />
                <DoctorCard  />
                <DoctorCard  />
                <DoctorCard  />
                <DoctorCard  />
                <DoctorCard  />
                <DoctorCard  />
            </ScrollView>
        </View>
    );
}

// experience, profession, name, image, location, rating, price,languages, speciality, education

export default Therapy;
