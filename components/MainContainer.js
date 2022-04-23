import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedScreen from "./screens/feedscreen/FeedScreen";
import EventScreen from "./screens/eventscreen/EventScreen";
import ProfileScreen from "./screens/profilescreen/ProfileScreen";
import colours from "../theme/colours";
import { LinearGradient } from "expo-linear-gradient";

const feedScreen = "Feed";
const eventScreen = "Events";
const profileScreen = "Profile";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer style={styles.footer}>
      <Tab.Navigator
        initialRouteName={feedScreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === eventScreen) {
              iconName = focused ? "list" : "list-outline";
            } else if (routeName === feedScreen) {
              iconName = focused ? "map" : "map-outline";
            } else if (routeName === profileScreen) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={40}
                color={colours.purple}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              />
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 10,
            right: 10,
            elevation: 0,
            borderRadius: 15,
            backgroundColor: "black",
            height: 90,
          },
        })}
      >
        <Tab.Screen name={eventScreen} component={EventScreen} />
        <Tab.Screen name={feedScreen} component={FeedScreen} />
        <Tab.Screen name={profileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
