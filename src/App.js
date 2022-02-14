import "./App.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { sha1 } from "crypto-hash";

function App() {
  const clientId = "kbyuFDidLLm280LIwVFiazOqjO3ty8KH";
  const redirectUrl = "http://6dca-46-117-240-58.ngrok.io/callback";
  const scope = "openid%20profile%20email";
  const responseType = "code";

  const handleClick = async () => {
    const state = "e7199af2c091e7672917c390e3faa709bbc88b81";
    const nonce = await sha1("nonce secret");

    const options = {
      headers: new Headers({
        "content-type": "application/json",
        baggage:
          "request_context=CiIKIGRmMzg4ZGZiNzgwZjE1NjMwYmQzM2I5MjUyZWJlNTYxEkMSCjEzNTc5MjQ2ODAaBQjbv9o5IAEoZjAAOgoKCHRlc3RVc2VyQhoKGDVkNzQ5OTViYzU0NjUzMDAxNDQ2YzA5MUgA",
        traceparent: "00-df388dfb780f15630bd33b9252ebe561-f260d70ccadf84d0-01",
      }),
      mode: "no-cors",
    };

    const data = await fetch(
      `http://localhost:8105/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}&state=${state}&nonce=${nonce}`,
      options
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={handleClick}>
          Connect with Fiverr
        </Button>
      </header>
    </div>
  );
}

export default App;
