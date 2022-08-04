import { useEffect } from "react";
import axios from "axios";

import { PhoneIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { ChatAlt2Icon } from "@heroicons/react/solid";

const MessageList = ({
  messages,
  currentCustomer,
  currentMessage,
  setMessages,
}) => {
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const responseMessages = await axios.get(
          `http://localhost:8080/customers/${currentCustomer.id}/messages/?sort=date%3Adesc&page_size=100`
        );
        setMessages(responseMessages.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [currentCustomer, setMessages]);

  return (
    <div className="">
      {messages.map((message) => {
        return (
          <div key={message.id} className="p-2 border-b-2 border-gray-500">
            {message.type === "phone" && (
              <PhoneIcon className={`h-4 ${message.read && "text-gray-400"}`} />
            )}

            {message.type === "email" &&
              (message.read ? (
                <MailOpenIcon className="h-4 text-gray-400" />
              ) : (
                <MailIcon className="h-4" />
              ))}

            {message.type === "sms" && (
              <ChatAlt2Icon
                className={`h-4 ${message.read && "text-gray-400"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
