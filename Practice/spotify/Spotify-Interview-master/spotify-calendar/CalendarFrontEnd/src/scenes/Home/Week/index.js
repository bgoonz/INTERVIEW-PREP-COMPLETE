import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Badge from "@material-ui/core/Badge";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  day: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "35px",
    borderLeft: "solid 1px #CCCCCC",
    cursor: "pointer",
    transition: "all .2s",
  },
});

const Week = ({ classes, date, month, select, apiEvents }) => {
  let days = [];
  for (var i = 0; i < 7; i++) {
    var day = {
      name: date.format("dd"),
      number: date.date(),
      date: date,
    };
    let userEvent = 0;
    apiEvents.forEach((event) => {
      if (moment(day.date.format("YYYY MM DD")).isSame(event.date)) {
        userEvent++;
      }
    });
    days.push(
      userEvent > 0 ? (
        <span
          key={day.date.toString()}
          className={classes.day}
          onClick={select.bind(null, day)}
        >
          <Badge badgeContent={userEvent} color="primary">
            {day.number}
          </Badge>
        </span>
      ) : (
        <span
          key={day.date.toString()}
          className={classes.day}
          onClick={select.bind(null, day)}
        >
          {day.number}
        </span>
      )
    );
    date = date.clone();
    date.add(1, "d");
  }

  return (
    <Grid container spacing={24}>
      {days}
    </Grid>
  );
};

Week.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Week);
