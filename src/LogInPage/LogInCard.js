import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.common.white,
    minWidth: "45%",
    minHeight: 250,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: theme.spacing(2),
  },
  topIndicatior: {
    width: "calc(100% + 2rem)",
    background: theme.palette.secondary.dark,
    height: 8,
    margin: theme.spacing(-2),
  },
  content: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
}));

const LogInCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const { login } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log(email, password);
    history.push("/");
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.topIndicatior} />
      <div className={classes.content}>
        <div style={{ textAlign: "center" }}>
          <Typography variant='subtitle1'>Nordhemsgatan 16-20</Typography>
        </div>
        <form className={classes.content} onSubmit={handleSubmit}>
          <TextField
            id='email-input'
            label='Email'
            type='email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ width: "40%" }}
              type='submit'
              variant='contained'
              color='primary'
            >
              Logga in
            </Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default LogInCard;
