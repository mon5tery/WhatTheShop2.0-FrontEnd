import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";
import BanakModal from "../BanakModal";
//
class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerLeft: (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Text>...</Text>
      </Button>
    ),
    headerRight: <BanakModal />
  });

  render() {
    // if (authStore.user) {
    //   return this.props.navigation.replace("Profile");
    // }
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() => authStore.login(this.state, this.props.navigation)}
        >
          <Text>Login</Text>
        </Button>

        {/* <Button full onPress={() => this.props.navigation.replace("Register")}>
          <Text>Register</Text>
        </Button> */}
      </Form>
    );
  }
}
export default withNavigation(observer(Login));
