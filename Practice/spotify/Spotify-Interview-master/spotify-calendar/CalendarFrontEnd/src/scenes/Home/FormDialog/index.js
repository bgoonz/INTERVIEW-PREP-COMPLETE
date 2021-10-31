import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const FormDialog = ({
  classes,
  open,
  handleClose,
  img,
  onSubmit,
  eventStartTime,
  eventEndTime,
  eventDescription,
  _handleImgChange,
  _handleDescriptionChange,
  _handleEndTimeChange,
  _handleStartTimeChange,
}) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Event Time </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter your event start and finish time
      </DialogContentText>
      <TextField
        id="startTime"
        value={eventStartTime}
        onChange={_handleStartTimeChange}
        label="Event Start Time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        id="endTime"
        value={eventEndTime}
        onChange={_handleEndTimeChange}
        label="Event Finish Time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        id="textarea"
        value={eventDescription}
        onChange={_handleDescriptionChange}
        label="Event Description"
        placeholder="Come join us"
        multiline
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="img"
        value={img == null ? "" : img}
        onChange={_handleImgChange}
        label="Event Img"
        placeholder="Come join us"
        multiline
        className={classes.textField}
        margin="normal"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onSubmit} color="primary">
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);
