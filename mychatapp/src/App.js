import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./components/Chat Room/ChatRoom";
import EntryForm from "./components/Chat Room/Entry Form/EntryForm";

function App() {
  return (
    <div className="App">
      <div
        className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<EntryForm />} />
            <Route path="chat/:roomId" element={<ChatRoom />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
