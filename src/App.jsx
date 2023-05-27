import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./stories/Button.jsx";

export const Secondary = {
  args: {
    label: "Button",
  },
};

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div className="App">
      <div>
        <Button
          variant="primary"
          size="small"
          backgroundColor={"red"}
          label={`count is ${count1}`}
          onClick={() => setCount1((count) => count + 1)}
        />
      </div>
      <div>
        <Button
          variant="secondary"
          size="medium"
          color="blue"
          label={`count is ${count2}`}
          onClick={() => setCount2((count) => count + 1)}
        />
      </div>
      <div>
        <Button
          variant="text"
          size="large"
          color={"gray"}
          label={`count is ${count3}`}
          onClick={() => setCount3((count) => count + 1)}
        />
      </div>
    </div>
  );
}

export default App;
