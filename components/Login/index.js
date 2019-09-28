import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  List,
  Content,
  Spinner,
  View,
  Button,
  Image,
  Left,
  TouchableHighlight,
  Text,
  Form,
  Item,
  Input,
  Container,
  Card,
  Icon
} from "native-base";

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

  render() {
    if (authStore.loading) return <Spinner />;
    // if (authStore.user) {
    //   return this.props.navigation.replace("Profile");
    // }
    return (
      // <Form>
      //   <Item>
      //     <Input
      //       placeholder="Username"
      //       autoCapitalize="none"
      //       onChangeText={username => this.setState({ username })}
      //     />
      //   </Item>
      //   <Item last>
      //     <Input
      //       placeholder="Password"
      //       autoCapitalize="none"
      //       secureTextEntry={true}
      //       onChangeText={password => this.setState({ password })}
      //     />
      //   </Item>
      //   <Button
      //     full
      //     onPress={() => authStore.login(this.state, this.props.navigation)}
      //   >
      //     <Text>Login</Text>
      //   </Button>

      // </Form>

      <Container style={{ justifyContent: "center" }}>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <Text
            style={{
              marginTop: 20,
              alignSelf: "center",
              fontSize: 30,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Login
          </Text>

          <Item>
            <Icon active name="ios-person" style={{ color: "#687373" }} />
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>

          <Item>
            <Icon active name="ios-lock" style={{ color: "#687373" }} />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button
            full
            style={{
              backgroundColor: "#BC8F8F",
              fontWeight: "bold",
              marginTop: 10
            }}
            onPress={() => authStore.login(this.state, this.props.navigation)}
          >
            <Text style={{ fontSize: 20 }}>Login</Text>
          </Button>
          <Button
            full

            style={{
              backgroundColor: "#BC8F8F",
              fontWeight: "bold",
              marginTop: 10
            }}

            onPress={() => this.props.navigation.replace("Register")}
          >
            <Text>Register</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}
export default withNavigation(observer(Login));
