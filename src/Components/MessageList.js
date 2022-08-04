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
    <div className="overflow-y-scroll h-screen w-1/3">
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className="px-2 py-4 border-b-2 border-gray-500 flex"
          >
            {message.type === "phone" && (
              <PhoneIcon
                className={`h-6 mr-4 ${message.read && "text-gray-400"}`}
              />
            )}

            {message.type === "email" &&
              (message.read ? (
                <MailOpenIcon className="h-6 mr-4 text-gray-400" />
              ) : (
                <MailIcon className="h-6 mr-4" />
              ))}

            {message.type === "sms" && (
              <ChatAlt2Icon
                className={`h-6 mr-4 ${message.read && "text-gray-400"}`}
              />
            )}
            <div className="flex flex-col">
              <p
                className={`text-sm ${!message.read && "font-bold"} md:text-xl`}
              >
                {message.contact.firstname} {message.contact.lastname}
              </p>
              {message.type === "email" && (
                <p className="text-sm">Message envoyé depuis wethenew.com</p>
              )}
              {message.type === "phone" && (
                <p className="text-sm">
                  Appel téléphonique depuis le Service clients WTN
                </p>
              )}
              {message.type === "sms" && (
                <p className="text-sm">SMS depuis le Service clients WTN</p>
              )}
              <p className="text-sm text-gray-400">{message.subject}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
