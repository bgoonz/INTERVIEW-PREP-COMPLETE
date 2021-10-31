import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

const DayNames = ({ classes }) => (
  <Grid container spacing={24}>
    <span className={classes.day}>Sun</span>
    <span className={classes.day}>Mon</span>
    <span className={classes.day}>Tue</span>
    <span className={classes.day}>Wed</span>
    <span className={classes.day}>Thu</span>
    <span className={classes.day}>Fri</span>
    <span className={classes.day}>Sat</span>
  </Grid>
);

DayNames.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DayNames);
