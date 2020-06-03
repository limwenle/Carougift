import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    // system message
    {
      _id: 0,
      text: 'New chat created.',
      createdAt: new Date().getTime(),
      system: true
    },
    // chat message
    {
      _id: 1,
      text: 'Hello! Thank you for your donation, it means a lot to me, and will definitely help my business tide over this tough period.',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Lim Wen Le'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}