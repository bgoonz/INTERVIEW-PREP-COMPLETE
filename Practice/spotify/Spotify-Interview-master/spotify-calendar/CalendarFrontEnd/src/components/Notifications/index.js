import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import Notifications from "react-notification-system-redux";

class NotificationContainer extends React.Component {
  render() {
    const { notifications } = this.props;

    //Optional styling
    const style = {
      NotificationItem: {
        // Override the notification item
        DefaultStyle: {
          // Applied to every notification, regardless of the notification level
          margin: "10px 5px 2px 1px",
          position: "relative",
          padding: ".75rem 1.25rem",
          marginBottom: "1rem",
          border: "1px solid transparent",
          borderRadius: ".25rem",
        },
      },
    };

    return (
      <Paper>
        <Notifications notifications={notifications} style={style} />
      </Paper>
    );
  }
}

export default connect((state) => ({ notifications: state.notifications }))(
  NotificationContainer
);
