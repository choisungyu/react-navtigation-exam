import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { styles } from "./style/style";

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Nav Drawer</Text>
        <Button
          title="go to bottom tabs"
          onPress={() => this.props.navigation.navigate("Bottom Tabs")}
        ></Button>
        <Button
          title="go to top tabs"
          onPress={() => this.props.navigation.navigate("Top Tabs")}
        ></Button>
      </View>
    );
  }
}
export default Detail;
