import React from 'react';
import { View, Button } from 'react-native';

const Login = ({navigation}) => {

  return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => navigation.replace('Home')}  title={"Login"}  />
        </View>
    );
};

export default Login;