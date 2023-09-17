import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
          {/* <Button colorScheme="blue">Button</Button> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
