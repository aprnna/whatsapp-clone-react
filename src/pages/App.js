import "../assets/style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chats from "./chats";
import Layout from "../layout";
import Status from "./status";
import Channels from "./channels";
import Community from "./community";
import Profile from "./profile";
import Settings from "./settings";
import Chat from "./chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Chats />}>
            <Route path="/chat/:id" element={<Chat />} />
          </Route>
          <Route path="/status" element={<Status />} />
          <Route path="/channel" element={<Channels />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
