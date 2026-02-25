import { useEffect, useState } from "react";
import "./App.css";
import ChannelCard from "./components/ChannelCard";
import ChannelForm from "./components/ChannelForm";
import Login from "./components/Login";
import {
  getChannels,
  addChannel,
  updateChannel,
  deleteChannel,
} from "./api/youtubeApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );

  const [channels, setChannels] = useState([]);
  const [editingChannel, setEditingChannel] = useState(null);

  const fetchData = async () => {
    const res = await getChannels();
    setChannels(res.data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const handleAddOrUpdate = async (data) => {
    if (editingChannel) {
      await updateChannel(editingChannel.id, data);
      setEditingChannel(null);
    } else {
      await addChannel(data);
    }
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteChannel(id);
    fetchData();
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  // 🔐 SHOW LOGIN PAGE
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // 🏠 SHOW DASHBOARD
  return (
    <div className="main-container">
      <div className="topbar">
        <h1>YouTube SAP Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <ChannelForm
        onSubmit={handleAddOrUpdate}
        editingChannel={editingChannel}
      />

      <div className="channel-grid">
        {channels.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            onEdit={setEditingChannel}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;