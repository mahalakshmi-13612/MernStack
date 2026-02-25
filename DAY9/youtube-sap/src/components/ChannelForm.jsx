import { useState, useEffect } from "react";

function ChannelForm({ onSubmit, editingChannel }) {
  const [form, setForm] = useState({
    channelName: "",
    category: "",
    subscribers: "",
    country: "",
  });

  useEffect(() => {
    if (editingChannel) {
      setForm(editingChannel);
    }
  }, [editingChannel]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      channelName: "",
      category: "",
      subscribers: "",
      country: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="channelName" placeholder="Channel Name" value={form.channelName} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="subscribers" placeholder="Subscribers" value={form.subscribers} onChange={handleChange} required />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
      <button type="submit">
        {editingChannel ? "Update Channel" : "Add Channel"}
      </button>
    </form>
  );
}

export default ChannelForm;