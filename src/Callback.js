import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

const Callback = (props) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cookies = new Cookies();
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (cookies.get("state") !== state) {
      //stop here, state values are not identical
      return;
    }

    const data = getUserInfo(code);
  }, []);

  const getUserInfo = async (code) => {
    return await fetch("https://shrouded-shore-46750.herokuapp.com/user_info", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    });
  };
};

export default Callback;
