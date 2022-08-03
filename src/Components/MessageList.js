const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <p>{message.contact.firstname}</p>;
      })}
    </div>
  );
};

export default MessageList;
