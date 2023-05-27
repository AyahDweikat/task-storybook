import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./stories/Button.jsx";


// import { withReactView } from "storybook-addon-react-view/register";


// export default {
//   title: "Component",
//   component: Component,
//   decorators: [withReactView],
//   parameters: { useView: { scope: { Component } } },
// };







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
          color="blue"
          label={`count1 is ${count1}`}
          onClick={() => setCount1((count) => count + 1)}
        />
      </div>
      <div>
        <Button
          variant="secondary"
          size="medium"
          color="red"
          label={`count2 is ${count2}`}
          onClick={() => setCount2((count) => count + 1)}
        />
      </div>
      <div>
        <Button
          variant="text"
          size="large"
          color="green"
          label={`count3 is ${count3}`}
          onClick={() => setCount3((count) => count + 1)}
        />
      </div>
    </div>
  );
}


export default App;
