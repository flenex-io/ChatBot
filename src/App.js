import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Segment } from "semantic-ui-react";
import LeftNav from "./components/Main";

const App = () => {
  const steps = [
    {
      id: "0",
      message: "Hello, welcome to Flenex's ChatBot",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please enter your name!",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, please enter your email",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Please tell about the field you're interested in",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        {
          value: "Web Development",
          label: "Web Development",
          trigger: "7",
        },
        {
          value: "Blockchain Development",
          label: "Blockchain Development",
          trigger: "7",
        },
      ],
    },
    {
      id: "7",
      message:
        "You selected {previousValue}. Please tell us more about the project.",
      trigger: "8",
    },
    {
      id: "8",
      user: true,
      trigger: "9",
    },
    {
      id: "9",
      message: "Alright! We'll be reaching you out soon through your email",
      end: true,
    },
  ];

  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#4770F4",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#4770F4",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <Segment>
      <LeftNav />
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </Segment>
  );
};

export default App;
