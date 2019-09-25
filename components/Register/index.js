import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  };

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
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
          onPress={() => authStore.signup(this.state, this.props.navigation)}
        >
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default withNavigation(observer(Register));
