import { useState } from "react";
import { addChannel } from "../api/youtubeApi";
import { useNavigate } from "react-router-dom";

function AddChannel() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    channelName: "",
    category: "",
    subscribers: "",
    country: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addChannel(form);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Channel</h2>
        <form onSubmit={handleSubmit}>
          <input name="channelName" placeholder="Channel Name" onChange={handleChange} required />
          <input name="category" placeholder="Category" onChange={handleChange} required />
          <input name="subscribers" placeholder="Subscribers" onChange={handleChange} required />
          <input name="country" placeholder="Country" onChange={handleChange} required />
          <button type="submit">Add Channel</button>
        </form>
      </div>
    </div>
  );
}

export default AddChannel;