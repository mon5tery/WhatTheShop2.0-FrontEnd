// if (!this.props.user) return <Redirect to="/login" />;

// import { Redirect } from "react-router-dom";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

class Profile extends Component {
  render() {
    console.log(authStore.user);
    if (!authStore.user) return this.props.navigation.replace("Login");
    if (authStore.user) return this.props.navigation.replace("Banak");
  }
}

export default observer(Profile);
