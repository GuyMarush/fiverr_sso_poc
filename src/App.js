import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { sha1 } from "crypto-hash";
import { Routes, Route } from "react-router-dom";
import Callback from "./Callback";
import Cookies from "universal-cookie";

function App() {
  const clientId = "e154112d4c3a4bd5a58d559876ddafef";
  const redirectUrl = "https://guyssopoc.herokuapp.com//callback";
  const scope = "openid%20profile%20email";
  const responseType = "code";
  let state = "";
  let nonce = "";

  const handleClick = async () => {
    state = await sha1("state secret");
    nonce = await sha1("nonce secret");

    const cookies = new Cookies();
    cookies.set("state", state);
    cookies.set("nonce", nonce);

    const data = await fetch(
      `https://accounts.dev.fiverr.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}&state=${state}&nonce=${nonce}`
    );

    window.location.href = data.url;
  };

  return (
    <div className="App-body">
      <Routes>
        <Route path="/callback" element={<Callback state={state} />} />
        <Route
          path="/"
          element={
            <Button variant="contained" onClick={handleClick}>
              Connect with Fiverr!!
            </Button>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
