import React from 'react';

const users = [
  {
    id: 1,
    name: 'siya',
    avatar: 'https://i.pravatar.cc/150?u=siya'
  },
  {
    id: 2,
    name: 'priyal',
    avatar: 'https://i.pravatar.cc/150?u=priyal'
  },
  {
    id: 3,
    name: 'renuka',
    avatar: 'https://i.pravatar.cc/150?u=renuka'
  },
  {
    id: 4,
    name: 'karan',
    avatar: 'https://i.pravatar.cc/150?u=karan'
  }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Leaderboard</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderRadius: '8px'
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              width={50}
              height={50}
              style={{ borderRadius: '50%', marginRight: '15px' }}
            />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

