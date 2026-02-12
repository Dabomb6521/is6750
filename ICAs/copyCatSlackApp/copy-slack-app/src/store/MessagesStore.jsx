import { createContext, useEffect, useState } from "react";
import { getAllMessages, getChannels } from "../utils/slackUtils";

// Set up context and give some default values
export const MessagesContext = createContext({
  getMessagesByChannel: (id) => {},
  currentChannel: "",
  setCurrentChannel: (id) => {},
  channels: [],
  setChannels: () => {},
});

// Create the provider component that will manage the states and pass down the values
const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [currentChannel, setCurrentChannel] = useState("1");
  const [channels, setChannels] = useState([]);

  //   Grab the channels when the app first loads and never again
  useEffect(() => {
    const startChannelFetch = async () => {
      const data = await getChannels();

      setChannels(data);
    };
    startChannelFetch();
  }, []);

  //display only the messages for the current channel
  const getMessagesByChannel = (id) => {
    return messages.filter((msg) => msg.channelId === id);
  };

  //   Set up an interval to get all messages. Should run ever 5 seconds. When component unmounts, clear the interval
  useEffect(() => {


    const interval = setInterval(async () => {
      const data = await getAllMessages();
      setMessages(data);
    }, 5000);


    return () => clearInterval(interval);
  }, []);

  return (

    // Wrap children components in provider and provide necessary data
    <MessagesContext
      value={{
        getMessagesByChannel,
        currentChannel,
        setCurrentChannel,
        channels,
      }}
    >
      {children}
    </MessagesContext>
  );
};

export default MessagesProvider;
