import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Days from "../Days";
import Week from "../Week";
import FormDialog from "../FormDialog/";
import EventList from "../EventList";
import { GET, DELETE, PUT, POST } from "utils/api.js";
import "./Calander.css";
import { Card, CardTitle, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { MdArrowBack, MdArrowForward } from "react-icons/lib/md";
import { connect } from "react-redux";
import { compose } from "redux";
import { success, error } from "react-notification-system-redux";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class Calander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      open: false,
      eventStartTime: "07:30",
      eventEndTime: "07:30",
      eventDescription: "",
      img: null,
      selected: undefined,
      apiEvents: [],
    };

    this.renderWeeks = this.renderWeeks.bind(this);
    this.select = this.select.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._handleEndTimeChange = this._handleEndTimeChange.bind(this);
    this._handleStartTimeChange = this._handleStartTimeChange.bind(this);
    this._handleImgChange = this._handleImgChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.apiEvents = this.apiEvents.bind(this);
    this.onEditOpen = this.onEditOpen.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  /*
   * Form Dialog Handlers
   */
  _handleStartTimeChange(e) {
    this.setState({
      eventStartTime: e.target.value,
    });
  }

  _handleEndTimeChange(e) {
    this.setState({
      eventEndTime: e.target.value,
    });
  }

  _handleDescriptionChange(e) {
    this.setState({
      eventDescription: e.target.value,
    });
  }

  _handleImgChange(e) {
    console.log(e.target.value);
    this.setState({
      img: e.target.value,
    });
  }

  /*
   * Event List Handlers
   */
  onEditOpen(event) {
    const { user, sendError } = this.props;
    if (user != null) {
      this.setState({
        selected: event,
        eventStartTime: event.eventStartTime,
        eventEndTime: event.eventEndTime,
        eventDescription: event.eventDescription,
        open: true,
        edit: true,
      });
    } else {
      sendError({
        // uid: 'once-please', // you can specify your own uid if required
        title: `Error`,
        message: "Must Be Signed On To Edit Events",
        position: "tr",
      });
    }
  }

  select(day) {
    const { user, sendError } = this.props;
    if (user != null) {
      this.setState({
        selected: day,
        open: true,
        edit: false,
      });
    } else {
      sendError({
        // uid: 'once-please', // you can specify your own uid if required
        title: `Error`,
        message: "Must Be Signed On To Create Events",
        position: "tr",
      });
    }
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
  };

  /*
   * RESTFUL Handlers
   */
  apiEvents() {
    GET().then((apiEvents) => {
      console.log("get successful");
      this.setState({ apiEvents });
    });
  }

  onDelete(event) {
    const { user, sendError } = this.props;
    if (user != null) {
      const body = {
        id: event.key,
      };
      DELETE(body, event.key).then((res) => {
        console.log("delete successful");
        this.apiEvents();
      });
    } else {
      sendError({
        // uid: 'once-please', // you can specify your own uid if required
        title: `Error`,
        message: "Must Be Signed On To Create Events",
        position: "tr",
      });
    }
  }

  onSubmit() {
    const {
      img,
      edit,
      eventEndTime,
      eventStartTime,
      eventDescription,
      selected,
    } = this.state;
    if (edit) {
      const body = {
        id: selected.key,
        date: selected.date,
        eventStartTime,
        eventEndTime,
        eventDescription,
      };
      PUT(body, body.id).then((val) => console.log("edit successful"));
    } else {
      const body = {
        date: selected.date.format("YYYY MM DD"),
        eventStartTime,
        eventEndTime,
        eventDescription,
        img:
          img == null
            ? `https://source.unsplash.com/collection/${190727}/${480}${480}/?sig=${
                Math.floor(Math.random()) + selected.number
              }`
            : img,
      };
      POST(body).then((val) => console.log("post successful"));
    }
    this.setState({ open: false });
  }

  componentDidMount() {
    this.apiEvents();
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.open !== nextState.open) {
      this.apiEvents();
    }
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.props.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          select={(day) => this.select(day)}
          apiEvents={this.state.apiEvents}
        />
      );
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
    return weeks;
  }

  render() {
    const { classes } = this.props;
    const {
      apiEvents,
      img,
      open,
      handleClose,
      onSubmit,
      eventStartTime,
      eventEndTime,
      eventDescription,
    } = this.state;
    const formProps = {
      open,
      eventStartTime,
      eventEndTime,
      eventDescription,
      img,
    };
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormDialog
                _handleDescriptionChange={this._handleDescriptionChange}
                _handleImgChange={this._handleImgChange}
                _handleEndTimeChange={this._handleEndTimeChange}
                _handleStartTimeChange={this._handleStartTimeChange}
                handleClose={this.handleClose}
                onSubmit={this.onSubmit}
                {...formProps}
              />
              <Card>
                <CardTitle
                  actAsExpander={true}
                  showExpandableButton={true}
                  title={this.props.renderMonthLabel()}
                />
                <CardActions>
                  <FlatButton
                    label={
                      <span>
                        {" "}
                        <MdArrowBack size={20} /> Previous{" "}
                      </span>
                    }
                    onClick={this.props.previousMonth}
                  />
                  <FlatButton
                    label={
                      <span>
                        {" "}
                        Next <MdArrowForward size={20} />{" "}
                      </span>
                    }
                    onClick={this.props.nextMonth}
                  />
                </CardActions>
                <CardText expandable={true}>
                  <Days />
                  {this.renderWeeks()}
                </CardText>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <EventList
                tilesData={apiEvents}
                onEdit={this.onEditOpen}
                onDelete={this.onDelete}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Calander.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    (state) => ({ user: state.userReducer.user }),
    (dispatch) => ({
      sendSuccess: (msg) => dispatch(success(msg)),
      sendError: (msg) => dispatch(error(msg)),
    })
  )
)(Calander);
