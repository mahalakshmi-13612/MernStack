function ChannelCard({ channel, onEdit, onDelete }) {
  return (
    <div className="channel-card">
      <h3>{channel.channelName}</h3>
      <p><strong>Category:</strong> {channel.category}</p>
      <p><strong>Subscribers:</strong> {channel.subscribers}</p>
      <p><strong>Country:</strong> {channel.country}</p>

      <div className="btn-group">
        <button className="btn-edit" onClick={() => onEdit(channel)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(channel.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ChannelCard;