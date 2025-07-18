import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_API_URL, {
      withCredentials: true,
      transports: ['websocket']
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return socket;
};
