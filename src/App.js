import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import GraphPage from "./GraphPage";
import ChatPage from "./ChatPage";

function App() {
  return (
    <Router>
      <div>
        <h1>Neo4j & LangFlow App</h1>
        <nav>
          <Link to="/">Accueil</Link> |{" "}
          <Link to="/graph">Graph</Link> |{" "}
          <Link to="/chat">Chat</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
