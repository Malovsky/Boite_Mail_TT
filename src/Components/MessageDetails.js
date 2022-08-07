const MessageDetails = ({ currentMessage }) => {
  return (
    <div className="bg-gray-200 w-2/3">
      <div className="bg-white m-4 p-2">
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
      <div className="bg-white m-4 p-2">2</div>
    </div>
  );
};

export default MessageDetails;
