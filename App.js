import React, { Component } from "react";
import AppContainer from "./navigation";
import { Spinner } from "native-base";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }


import BanakCard from "./components/BanakList/BanakCard";
import BanakList from "./components/BanakList";
import banakStore from "./stores/BanakStore";

export default class App extends React.Component {

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return <AppContainer />;
  }
}
