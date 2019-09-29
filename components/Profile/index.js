// import styles from "./styles";
// import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
// //
// class Profile extends Component {
//   componentDidMount = () => {
//     if (authStore.user) {
//       {
//         profileStore.fetchProfile();
//       }
//     }
//   };

//   handlePress() {
//     this.props.navigation.navigate("Orders");
//   }

//   render() {
//     console.log(authStore.user);
//     console.log(profileStore);
//     if (!authStore.user) return <Login />;
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}></View>
//         <Image
//           style={styles.avatar}
//           source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
//         />
//         <View style={styles.body}>
//           <View style={styles.bodyContent}>
//             <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.info}>UX Designer / Mobile developer</Text>
//             <Text style={styles.description}>
//               Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
//               electram expetendis, omittam deseruisse consequuntur ius an,
//             </Text>

//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Opcion 1</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Opcion 2</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// //   return (
// //     <Card>
// //       <CardItem>
// //         <Text>
// //           Welcome to Beldowar {profileStore.profile.username}!{"\n"}
// //         </Text>
// //       </CardItem>
// //       <CardItem>
// //         <Button
// //           danger
// //           onPress={() => authStore.logout(this.props.navigation)}
// //         >
// //           <Text>Logout</Text>
// //         </Button>
// //       </CardItem>
// //     </Card>
// //   );
// // }

// export default observer(Profile);
// // if (!this.props.user) return <Redirect to="/login" />;

// // import { Redirect } from "react-router-dom";
import Login from "../Login";
// import { Component } from "react";
import { observer } from "mobx-react";
// // NativeBase Components
// import { Card, CardItem, Text, Button, Header, Spinner } from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

import { StyleSheet } from "react-native";
import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

class Profile extends Component {
  componentDidMount = () => {
    if (authStore.user) {
      {
        profileStore.fetchProfile();
      }
    }
  };
  render() {
    if (!authStore.user) return <Login />;
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>
              {profileStore.profile.username}
              {"\n"}
            </Text>
            <Text style={styles.info}>Information</Text>
            <Text style={styles.description}>Underconstruction</Text>

            {/* <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 1</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.buttonContainer}
              danger
              onPress={() => authStore.logout(this.props.navigation)}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default observer(Profile);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#a88702",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#787567",
    color: "#ffffff"
  }
});
