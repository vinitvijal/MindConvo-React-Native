import { View, Text, Image, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Profile = ({navigation}) => {

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
                    <Ionicons name={"cash-outline"} size={25} style={{ marginRight: 10 }} color="#000" />
                    <Text>{"Manage Subscription"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("InviteFriend")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Ionicons name={"people"} size={25} style={{ marginRight: 10 }} color="#000" />
                    <Text>{"Invite Friends"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("FAQ")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <AntDesign name={"questioncircleo"} size={25} style={{ marginRight: 10 }} color="#000" />
                    <Text>{"FAQs"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>navigation.navigate("About")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Ionicons name={"happy-outline"} size={25} style={{ marginRight: 10 }} color="#000" />
                    <Text>{"About MindConvo"}</Text>
                </View>
            </Pressable>
            <Pressable style={{ flex: 0.1, padding: 1, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: "center" }} onPress={()=>alert("Rate US")}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Ionicons name={"star-sharp"} size={25} style={{ marginRight: 10 }} color="#000" />
                    <Text>{"Rate Us"}</Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Profile



