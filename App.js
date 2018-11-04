import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { useScreens } from 'react-native-screens';

useScreens();
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#000' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Profile"
          onPress={()=>{
            this.props.navigation.navigate("Profile")
          }}
        ></Button>

      </View>
    );
  }
}


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#000'}}>
        <Text>Profile Screen</Text>
        <Button
          title="Back"
          onPress={()=>{
            this.props.navigation.goBack()
          }}
        ></Button>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile:{
    screen:ProfileScreen
  }
});