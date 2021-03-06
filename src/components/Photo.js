import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Photo({ photoItem, showContent }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photoItem.url}
        title={photoItem.title}
      />
      {showContent && (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {photoItem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Album: {photoItem.albumId} Photo: {photoItem.id}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
