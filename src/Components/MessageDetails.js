import { PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { ChatAlt2Icon } from "@heroicons/react/solid";

const MessageDetails = ({
  currentMessage,
  showMessageOnMobile,
  setShowMessageOnMobile,
}) => {
  const formatDateWTN = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = String(d.getFullYear()).slice(-2),
      hour = "" + d.getHours(),
      min = "" + d.getMinutes();

    return `Le ${[day, month, year].join("-")} à ${[hour, min].join(":")}`;
  };

  return !currentMessage ? (
    <div
      className={`hidden sm:flex justify-center items-center sm:w-2/3 bg-gray-200`}
    >
      <p className="text-xl font-bold">Sélectionnez un message à voir</p>
    </div>
  ) : (
    <div
      className={`${
        showMessageOnMobile ? "w-full" : "hidden"
      } bg-gray-200 sm:block sm:w-2/3 flex-col`}
    >
      <div className="bg-white m-4 p-2 border-2 border-gray-400">
        <p className="my-2 font-bold">
          {currentMessage.contact.firstname} {currentMessage.contact.lastname}
        </p>
        <p className="my-2">{currentMessage.contact.email}</p>
        <p className="my-2 text-cyan-500">
          {[
            currentMessage.contact.phone.slice(0, 2),
            " ",
            currentMessage.contact.phone.slice(2, 4),
            " ",
            currentMessage.contact.phone.slice(4, 6),
            " ",
            currentMessage.contact.phone.slice(6, 8),
            " ",
            currentMessage.contact.phone.slice(8, 10),
          ].join("")}
        </p>
      </div>
      <div className="bg-white m-4 p-2  border-2 border-gray-400">
        <p className="font-bold flex">
          {currentMessage.type === "phone" && (
            <PhoneIcon className={`h-6 mr-4 `} />
          )}
          {currentMessage.type === "email" && (
            <MailIcon className={`h-6 mr-4 `} />
          )}
          {currentMessage.type === "sms" && (
            <ChatAlt2Icon className={`h-6 mr-4 `} />
          )}
          {currentMessage.contact.firstname} {currentMessage.contact.lastname}
        </p>

        <p>{currentMessage.contact.email}</p>
        <p className="text-gray-400">{formatDateWTN(currentMessage.date)}</p>
        <div>
          <hr className="my-4" />
          <p className="">{currentMessage.body}</p>
        </div>
      </div>

      <button
        onClick={() => setShowMessageOnMobile(false)}
        className="bg-cyan-200 m-4 text-cyan-700 py-2 px-4 border-2 border-cyan-500 rounded-md sm:hidden"
      >
        Revenir à la list
      </button>
    </div>
  );
};

export default MessageDetails;
