import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from "react-native-navigation";

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    );
  }
}

Navigation.registerComponent('App', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "App"
      }
    }
  });
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
