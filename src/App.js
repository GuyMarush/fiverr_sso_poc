import "./App.css";
import Button from "@mui/material/Button";
import { sha1 } from "crypto-hash";

function App() {
  const clientId = "kbyuFDidLLm280LIwVFiazOqjO3ty8KH";
  const redirectUrl = "https://guymarush.github.io/fiverr_sso_poc/callback";
  const scope = "openid%20profile%20email";
  const responseType = "code";

  const handleClick = async () => {
    const state = "e7199af2c091e7672917c390e3faa709bbc88b81";
    const nonce = await sha1("nonce secret");

    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://accounts.dev.fiverr.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}&state=${state}&nonce=${nonce}`
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
