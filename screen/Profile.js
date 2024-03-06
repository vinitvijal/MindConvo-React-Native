import { View, Text, Image, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Profile = ({navigation}) => {
    const faqLogo = require("../assets/icons/icons8-faq-96.png")
    const settingsLogo = require("../assets/icons/icons8-settings-96.png")
    const rateUsLogo = require("../assets/icons/icons8-rate-96.png")
    const aboutLogo = require("../assets/icons/icons8-about-96.png")
    const inviteLogo = require("../assets/icons/icons8-invite-96.png")
    const subscriptionLogo = require("../assets/icons/icons8-membership-card-96.png")

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Pressable onPress={()=>console.log("object")} style={{ flex: 0.1, padding: 1,  marginTop: 50, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
            <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
            />
            <View style={{ flex: 1, justifyContent: "center",  padding: 10, marginLeft: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Dharmender Singh</Text>
                <Text style={{ fontSize: 14 }}>
                    <Text style={{ fontWeight: 'semibold' }}>Free Member</Text>
                </Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="chevron-forward-outline" size={25} color="#F7813E" />
            </TouchableOpacity>
        </Pressable>



        <View style={{flex: 0.8, marginTop: 30}}>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("Subscription")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image source={subscriptionLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"Manage Subscription"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} 
            onPress={()=>console.log("object")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image source={inviteLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"Invite Friends"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("FAQ")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image source={faqLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"FAQs"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("About")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image source={aboutLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"About MindConvo"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>alert("Rate US")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Image source={rateUsLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"Rate Us"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("Settings")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image source={settingsLogo} style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>{"Settings"}</Text>
                </View>
            </Pressable>
        </View>
            <View style={{ position: 'absolute', bottom: 0, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center", width: "100%" }}>
                <View style={{  alignItems: "center", flex: 1, justifyContent: "center" }}>
                    <Text style={{fontSize: 12}}>Privacy Policy</Text>
                    <Text style={{fontSize: 12}}>App Version: 1.0.0</Text>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default Profile



