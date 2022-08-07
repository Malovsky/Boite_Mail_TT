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
  setCurrentMessage,
  setMessages,
}) => {
  function formatDateWTN(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = String(d.getFullYear()).slice(-2),
      hour = "" + d.getHours(),
      min = "" + d.getMinutes();

    const ajd = new Date();

    if (d.toLocaleDateString("en-US") === ajd.toLocaleDateString("en-US")) {
      return [hour, min].join(":");
    } else return [day, month, year].join("-");
  }

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
            onClick={() => setCurrentMessage(message)}
            key={message.id}
            className={`px-2 py-4 justify-between border-b-2 border-r-2 border-gray-500 flex hover:cursor-pointer hover:bg-cyan-100 ${
              message.read && "text-gray-400"
            } ${currentMessage === message && "bg-cyan-100 border-r-4 "}`}
          >
            <div className="flex">
              {message.type === "phone" && (
                <PhoneIcon className={`h-6 mr-4 `} />
              )}

              {message.type === "email" &&
                (message.read ? (
                  <MailOpenIcon className="h-6 mr-4 text-gray-400" />
                ) : (
                  <MailIcon className="h-6 mr-4" />
                ))}

              {message.type === "sms" && (
                <ChatAlt2Icon className={`h-6 mr-4 `} />
              )}
              <div className="flex flex-col">
                <p
                  className={`text-sm ${
                    !message.read && "font-bold"
                  } md:text-xl`}
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

            <p className="text-sm whitespace-nowrap mr-2">
              {formatDateWTN(message.date)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
