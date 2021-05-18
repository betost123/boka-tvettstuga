import { makeStyles } from "@material-ui/core";
import React from "react";
import LogInCard from "./LogInCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  cardPosition: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(-6),
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardPosition}>
      <LogInCard />
    </div>
  );
};

export default Content;
