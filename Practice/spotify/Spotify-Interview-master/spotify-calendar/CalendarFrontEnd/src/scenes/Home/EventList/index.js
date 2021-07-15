import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Edit from "material-ui/svg-icons/content/create";
import Delete from "material-ui/svg-icons/action/delete";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const EventList = ({ classes, onEdit, onDelete, tilesData }) => (
  <GridList cols={1} cellHeight={400} padding={1}>
    {tilesData.map((tile, i) => (
      <GridTile
        key={i}
        title={
          tile.eventDescription === ""
            ? "No Description"
            : tile.eventDescription
        }
        subtitle={
          <span>
            Event Date <b>{tile.date}</b> Start Time{" "}
            <b> {tile.eventStartTime} </b> End Time <b> {tile.eventEndTime} </b>{" "}
          </span>
        }
        actionIcon={
          <div>
            <IconButton onClick={() => onEdit(tile)}>
              <Edit color="white" />
            </IconButton>
            <IconButton onClick={() => onDelete(tile)}>
              <Delete color="white" />
            </IconButton>
          </div>
        }
      >
        <img
          style={{ width: 300, height: 300 }}
          alt={tile.date}
          src={tile.img}
        />
      </GridTile>
    ))}
  </GridList>
);

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventList);
