import "./style/App.css";
import { useEffect, useState } from "react";

// COMPONENTS
import Header from "./Components/Header";
import MessageList from "./Components/MessageList";
import MessageDetails from "./Components/MessageDetails";

function App() {
  // TODO : fetch data
  const [customers, setCustomers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <MessageList />
        <MessageDetails />
      </div>
    </div>
  );
}

export default App;
