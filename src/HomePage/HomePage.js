import { Typography } from "@material-ui/core";
import React from "react";
import { useAuth } from "../contexts/Auth";

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      Hello you are in bitch!
      <Typography>{currentUser.email}</Typography>
    </div>
  );
};

export default HomePage;
