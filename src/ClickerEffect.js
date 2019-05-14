import React, { useState, useEffect } from "react";

function ClickerEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h1>Click me and see the browser title</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me {count} times
      </button>
    </div>
  );
}

export default ClickerEffect;
