import { connect } from "react-redux";
import { getUPortProfile } from "../../selectors";

import ClaimExists from "./ClaimExists2";

const mapStateToProps = state => ({
  profile: getUPortProfile(state)
});

export default connect(mapStateToProps)(ClaimExists);
