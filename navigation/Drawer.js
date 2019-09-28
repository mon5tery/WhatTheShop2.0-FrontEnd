import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Text, Image } from "react-native";
import { Container, Content, Header, Left, Body, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

import BanakStack from "./BanakStack";
import Login from "../components/Login";
import customNavigator from "./customNavigator";
import Register from "./customNavigator";
import Profile from "../components/Profile";

const DrawerNav = createDrawerNavigator(
  {
    Home: BanakStack,
    Login: Login,
    Register: Register,
    Profile: Profile
  },
  {
    headerMode: "float",
    // drawerBackgroundColor: "transparent"
    contentComponent: customNavigator,
    initialRoutteName: "Home",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default DrawerNav;
