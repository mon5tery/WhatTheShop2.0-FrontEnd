import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import BanakStack from "./BanakStack";
import Loginscreen from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";

const DrawerNav = createDrawerNavigator(
  {
    Home: BanakStack,
    Login: Loginscreen,
    Register: Register,
    Profile: Profile
  },
  {
    headerMode: "float"
  }
);

export default DrawerNav;
