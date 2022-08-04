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
    const fetchDatas = async () => {
      try {
        const responseCustomer = await axios.get(
          "http://localhost:8080/customers"
        );
        setCustomers(responseCustomer.data);
        setCurrentCustomer(responseCustomer.data[0]);

        const responseMessages = await axios.get(
          `http://localhost:8080/customers/${responseCustomer.data[0].id}/messages/?sort=date%3Adesc&page_size=100`
        );
        setMessages(responseMessages.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDatas();
  }, []);

  return (
    <div className="App">
      <Header
        customers={customers}
        currentCustomer={currentCustomer}
        setCurrentCustomer={setCurrentCustomer}
      />
      <div className="flex w-full">
        <MessageList
          messages={messages}
          currentCustomer={currentCustomer}
          currentMessage={currentMessage}
          setMessages={setMessages}
        />
        <MessageDetails />
      </div>
    </div>
  );
}

export default App;
