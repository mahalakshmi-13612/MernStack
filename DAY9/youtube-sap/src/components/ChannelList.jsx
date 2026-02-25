import { useEffect, useState } from "react";
import { getChannels, deleteChannel } from "../api/youtubeApi";
import { Link } from "react-router-dom";

function ChannelList() {
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await getChannels();
    setChannels(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteChannel(id);
    fetchData();
  };

  const filtered = channels.filter((c) =>
    c.channelName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        className="search-input"
        placeholder="Search channels..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((channel) => (
          <div key={channel.id} className="card">
            <h3>{channel.channelName}</h3>
            <p>Category: {channel.category}</p>
            <p>Subscribers: {channel.subscribers}</p>
            <p>Country: {channel.country}</p>

            <Link to={`/edit/${channel.id}`}>
              <button className="btn btn-edit">Edit</button>
            </Link>

            <button
              className="btn btn-delete"
              onClick={() => handleDelete(channel.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChannelList;