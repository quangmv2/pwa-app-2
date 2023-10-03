import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useReactPWAInstall } from "./hooks/pwa-install";
import AppRouter from "./AppRouter";

function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  console.log(isInstalled(), supported());

  const handleClick = () => {
    pwaInstall({
      title: "Install Web App",
      logo: logo,
      features: (
        <ul>
          <li>Cool feature 1</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() =>
        alert("App installed successfully or instructions for install shown")
      )
      .catch(() => alert("User opted out from installing"));
  };

  return (
    <div>
      {supported() && !isInstalled() ? (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      ) : (
        <AppRouter />
      )}
    </div>
  );
}

export default App;
