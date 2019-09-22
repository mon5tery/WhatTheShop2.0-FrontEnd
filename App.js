import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";

import BanakCard from "./components/BanakList/BanakCard";
import BanakList from "./components/BanakList";
import banakStore from "./stores/BanakStore";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
