import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { styles } from "./style/style"

class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Nav Drawer</Text>
        <Button title="go to feed" onPress={() => this.props.navigation.navigate('Detail')}></Button>
      </View>
    );
  }
}

export default Feed;
