import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: 400,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    color: theme.palette.primary.light,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">BOKA TVETTSTUGA</Typography>
    </div>
  );
};

export default Hero;
