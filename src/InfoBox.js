import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <div>
      <Card className="infoBox" onClick={props.onClick}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default InfoBox;
