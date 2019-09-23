// if (!this.props.user) return <Redirect to="/login" />;

import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
  }
}
export default withNavigation(Profile);
