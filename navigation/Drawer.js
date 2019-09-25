import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import LolStack from "./BanakStack";
import Login from "../components/Login";

const DrawerNav = createDrawerNavigator(
  {
    Home: LolStack,
    Login: Login
  },
  {
    headerMode: "float"
  }
);

export default DrawerNav;
