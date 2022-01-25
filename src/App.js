import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat/Chat";
import JoinSidebar from "./pages/JoinSidebar";
import Contact from "./pages/Contact";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RegisterSecret from "./pages/Auth/RegisterSecret";
import LoginSecret from "./pages/Auth/LoginSecret";

function App() {
  return (
      <Routes>
          <Route path="/" element={<JoinSidebar />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/registration-secret" element={<RegisterSecret />} />
          <Route path="/login-secret" element={<LoginSecret />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
