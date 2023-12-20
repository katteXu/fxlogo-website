import { useState } from "preact/hooks";

const Greeting = (props) => {
  const { messages } = props;

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 欢迎访问</h3>
      <button onClick={() => setGreeting(randomMessage())}>换一条</button>
    </div>
  );
};

export default Greeting;
