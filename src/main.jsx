import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENTID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage" // to save user to localStorage when he/she logins with social app
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
