import React, { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { TClientState, attemptLogin } from "../store/slices/client";

const SteamPage = () => {
  const clientState = useSelector(
    (state: { client: TClientState }) => state.client
  );

  const [username, setUsername] = useState<string>(clientState.username || "");
  const [password, setPassword] = useState<string>(clientState.password || "");
  const [steamGuard, setSteamGuard] = useState<string>("");

  const dispatch = useDispatch();

  const setClientDetails = () => {
    if (!username || !password) return;

    dispatch(attemptLogin({ username, password, steamGuard: "" }));
  };

  useEffect(() => {
    if (!clientState.username || !clientState.password) return;
  }, [clientState]);

  return (
    <>
      <span>Steam Playtime Booster</span>
      <div className="divider"></div>
      <div className="section">
        <div>
          <h3 className="input-header">STEAM USERNAME</h3>
          <input
            type="text"
            placeholder="username"
            className="extend"
            spellCheck={false}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <h3 className="input-header">STEAM PASSWORD</h3>
          <input
            type="password"
            placeholder="password"
            className="extend"
            spellCheck={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <h3 className="input-header">STEAM GUARD</h3>
          <input
            type="password"
            placeholder="steam guard code (if enabled)"
            className="extend"
            spellCheck={false}
            value={steamGuard}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={setClientDetails} className="submit extend">
          LOGIN
        </button>
      </div>
    </>
  );
};

export default SteamPage;
