import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Resources = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "start", width: "100%"}}>
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "black"}}>Resources</Text>
      </View>

      <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '40%', height: "80%", borderRadius: 10 }} onPress={()=>navigation.navigate('Blogs')}>
          <Text>Blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '40%', height: "80%", borderRadius: 10 }} onPress={()=>navigation.navigate('Podcasts')}>
          <Text>Podcasts</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
      <TouchableOpacity style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '40%', height: "80%", borderRadius: 10 }} onPress={()=>navigation.navigate('EBooks')}>
          <Text>EBooks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '40%', height: "80%", borderRadius: 10 }} onPress={()=>navigation.navigate('Tools')}>
          <Text>Tools</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Resources