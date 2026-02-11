import { useState, useEffect } from "react";
import axios from "axios";

const channelURL = 'https://slackclonebackendapi.onrender.com/channels'

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  // const [users, setUsers] = useState([]);

  const channelData = async () => {
    try {
      const getChannels = await axios.get(channelURL);
      setChannels(channelData.data)
      console.log(`Data Retrieved: ${getChannels.data}`);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    channelData();
  }, []);

  return (
    <div className="sidebar">
      <h1>Design Team</h1>
      <p>Channels Go Here</p>
      {channels}
    </div>
  );
};

export default Sidebar;
