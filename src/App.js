import "./style/App.css";
import axios from "axios";
import { useEffect, useState } from "react";

// COMPONENTS
import Header from "./Components/Header";
import MessageList from "./Components/MessageList";
import MessageDetails from "./Components/MessageDetails";

function App() {
  const [customers, setCustomers] = useState([]);
  const [messages, setMessages] = useState([]);

  const [currentCustomer, setCurrentCustomer] = useState();
  const [currentMessage, setCurrentMessage] = useState();

  useEffect(() => {
    console.log("APP JS TYPEOF : ", typeof customers);
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/customers");
        setCustomers(response.data);
        setCurrentCustomer(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div className="App">
      <Header
        customers={customers}
        currentCustomer={currentCustomer}
        setCurrentCustomer={setCurrentCustomer}
      />
      <div className="flex justify-between">
        <MessageList />
        <MessageDetails />
      </div>
    </div>
  );
}

export default App;
