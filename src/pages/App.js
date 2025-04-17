import "../assets/style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chats from "./chats";
import Layout from "../layout";
import Status from "./status";
import Channels from "./channels";
import Community from "./community";
import Profile from "./profile";
import Settings from "./settings";
import RoomChat from "./roomChat";
import { useEffect, useState } from "react";
import { getData, getProfileData } from "../data";

function App() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    setData(getData());
    setProfile(getProfileData());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Chats data={data} />}>
            <Route
              path=":id"
              element={<RoomChat data={data} setData={setData} />}
            />
          </Route>
          <Route path="/status" element={<Status data={data} />} />
          <Route path="/channel" element={<Channels />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/profile"
            element={<Profile data={profile} setData={setProfile} />}
          />
          <Route path="/setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
