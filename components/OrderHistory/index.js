import React, { Component } from "react";
import { observer } from "mobx-react";

import { ScrollView } from "react-native";
//Stores
import previousOrders from "../../stores/previousOrders";
//Components
import Order from "./order";

class Orders extends Component {
  static navigationOptions = () => ({
    title: "Previous Orders",
    fontSize: 20
  });
  componentDidMount() {
    previousOrders.fetchOrders();
  }
  render() {
    const orders = previousOrders.orders.map(order => {
      return <Order order={order} key={order.id} />;
    });

    return <ScrollView>{orders}</ScrollView>;
  }
}

export default observer(Orders);
