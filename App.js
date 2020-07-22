import React, { Component } from "react";
import { Button, View } from "react-native";
import screen1 from "./src/screens/drawer/screen1";
import screen2 from "./src/screens/drawer/screen2";
import screen3 from "./src/screens/drawer/screen3";

import Tab1 from "./src/screens/tabs/Tab1";
import Tab2 from "./src/screens/tabs/Tab2";
import Tab3 from "./src/screens/tabs/Tab3";

import Detail from "./src/detail";
import Feed from "./src/feed";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import SafeAreaView from "react-native-safe-area-view";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

let createHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Bottom Tabs" component={createBottomTabs} />
      <Stack.Screen name="Top Tabs" component={createTopTabs} />
    </Stack.Navigator>
  );
};

let createTopTabs = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Tab 1" component={Tab1} />
      <MaterialTopTab.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTab.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTab.Navigator>
  );
};

let createBottomTabs = () => {
  return (
    <MaterialBottomTab.Navigator>
      <MaterialBottomTab.Screen name="Tab 1" component={Tab1} />
      <MaterialBottomTab.Screen name="Tab 2" component={Tab2} />
      <MaterialBottomTab.Screen name="Tab 3" component={Tab3} />
    </MaterialBottomTab.Navigator>
  );
};
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={screen1} />
          <Drawer.Screen name="Favorites" component={screen2} />
          <Drawer.Screen name="Settings" component={screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
