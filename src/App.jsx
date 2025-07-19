import { useState } from 'react';
import './App.css';

const users = [
  {
    id: 1,
    name: 'Mummy',
    message: 'Hey there!',
    time: '3:30:50 PM',
    avatar: 'karan.png'
  },
  {
    id: 2,
    name: 'Meera',
    message: "What's up?",
    time: '8:01:10 PM',
    avatar: 'https://i.pravatar.cc/150?u=meera'
  },
  {
    id: 3,
    name: 'Dai',
    message: 'See you soon!',
    time: '2:45:00 PM',
    avatar: 'https://i.pravatar.cc/150?u=dai'
  }
];

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState({});

  const handleUserClick = (user) => {
    setSelectedUser(user);
    if (!messages[user.id]) {
      setMessages(prev => ({ ...prev, [user.id]: [] }));
    }
  };

  const handleSend = () => {
    if (!chatInput.trim()) return;

    const myMsg = {
      text: chatInput,
      time: new Date().toLocaleTimeString(),
      fromMe: true
    };

    setMessages(prev => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), myMsg]
    }));

    setChatInput('');

    // Fake reply
    setTimeout(() => {
      const replyMsg = {
        text: `Reply from ${selectedUser.name}`,
        time: new Date().toLocaleTimeString(),
        fromMe: false
      };
      setMessages(prev => ({
        ...prev,
        [selectedUser.id]: [...prev[selectedUser.id], replyMsg]
      }));
    }, 1000);
  };

  if (selectedUser) {
    return (
      <div className="chat">
        <div className="chat-header">
          <img src={selectedUser.avatar} alt="avatar" />
          <h3>{selectedUser.name}</h3>
          <button onClick={() => setSelectedUser(null)}>Back</button>
        </div>
        <div className="chat-body">
          {(messages[selectedUser.id] || []).map((msg, i) => (
            <div className={`chat-msg ${msg.fromMe ? 'from-me' : 'from-them'}`} key={i}>
              <span>{msg.text}</span>
              <small>{msg.time}</small>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-card" key={user.id} onClick={() => handleUserClick(user)}>
          <img src={user.avatar} alt="avatar" />
          <div>
            <h4>{user.name}</h4>
            <p>{user.message}</p>
          </div>
          <small>{user.time}</small>
        </div>
      ))}
    </div>
  );
}

