import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography color="textSecondary"> {title}</Typography>

          <h2 className="infoBox__cases">{cases}</h2>

          <Typography className="infoBox__total" color="textSecondary"> {title}</Typography>
          {total}
        </CardContent>

        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default InfoBox;