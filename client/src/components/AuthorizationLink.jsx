import React from "react";
import { Button } from "reactstrap";

export const AuthorizationLink = ({}) => {
  const link =
    "http://www.strava.com/oauth/authorize?" +
    "client_id=" +
    process.env.REACT_APP_CLIENT_ID +
    "&response_type=code" +
    "&redirect_uri=http://localhost:3000/exchange_token" +
    "&approval_prompt=force" +
    "&scope=activity:read_all";

  return <Button href={link}>Connect</Button>;
};

export default AuthorizationLink;
