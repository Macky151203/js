


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from "react";
import Home from "./comps/Home";
import Chat from "./comps/chat";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:roomId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
