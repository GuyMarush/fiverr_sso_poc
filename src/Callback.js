import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Callback = (props) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (cookies.get("state") !== state) {
      //stop here, state values are not identical
      console.log("not identical state");
      return;
    }

    console.log("identical state");

    const response = test;
  }, []);

  return searchParams.get("code");
};

export default Callback;
