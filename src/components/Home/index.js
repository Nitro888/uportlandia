import React from "react";
import { connect } from "react-redux";

import { showAppDownload } from "../../selectors";
import DrWho from "./DrWhoContainer";

class Home extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
        <DrWho />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showAppDownload: showAppDownload(state)
});

export default connect(mapStateToProps)(Home);
