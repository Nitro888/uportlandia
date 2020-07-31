import { connect } from "react-redux";
import * as actions from "../../actions";
import DrWho from "./DrWho";

const mapDispatchToProps = dispatch => ({
  redirectToRegnForm() {
    dispatch(actions.redirectToRegnForm());
  }
});

export default connect(null, mapDispatchToProps)(DrWho);
