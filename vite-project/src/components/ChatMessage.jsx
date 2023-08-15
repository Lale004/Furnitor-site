import React, { useState, useEffect, useRef } from "react";
import ChatBot from 'react-simple-chatbot';
import {TbMessageCircle } from "react-icons/tb";
function ChatMessage() {
    const [isVisible, setIsVisible] = useState(false);
    const chatRef = useRef();
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to our website',
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, Please select your issue',
            trigger: 'issues'
        },
        {
            id: 'issues',
            options: [
                {
                    value: "Delivery", label: "Delivery", trigger: "Delivery"
                },
                {
                    value: "Service", label: "Service", trigger: "Service"
                }
            ]

        },
        {
            id: 'Delivery',
            message: 'Thanks for telling your delivery issue',
            end: true
        },
        {
            id: 'Service',
            message: 'Thanks for telling your service issue',
            end: true
        },
    ];
    const chatMessage = () => {
     
      };
      useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
    const showChat = () => {
        chatRef.current.classList.toggle("chatbot");
        console.log("kil");
    };
    return (
        <>
          {isVisible && (
        <div className="chat-bot" onClick={chatMessage}>
      
            <div className="chat-icon" onClick={showChat}>
                <TbMessageCircle />
            </div>
            <div className="chatbot-box" ref={chatRef}>
                <ChatBot steps={steps} />
            </div>
     
        </div>
             )}
        </>
    )
}

export default ChatMessage