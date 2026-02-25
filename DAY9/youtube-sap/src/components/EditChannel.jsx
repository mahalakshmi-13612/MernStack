import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getChannelById, updateChannel } from "../api/youtubeApi";

function EditChannel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getChannelById(id);
      setForm(res.data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateChannel(id, form);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Edit Channel</h2>
        <form onSubmit={handleSubmit}>
          <input name="channelName" value={form.channelName || ""} onChange={handleChange} />
          <input name="category" value={form.category || ""} onChange={handleChange} />
          <input name="subscribers" value={form.subscribers || ""} onChange={handleChange} />
          <input name="country" value={form.country || ""} onChange={handleChange} />
          <button type="submit">Update Channel</button>
        </form>
      </div>
    </div>
  );
}

export default EditChannel;