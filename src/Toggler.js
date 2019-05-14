import React from "react";
import useToggle from "./hooks/useToggle";

/*HOOKS is very exciting for reuse*/
function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(false);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(true);
  const [isApple, toggleIsApple] = useToggle(true);

  return (
    <div>
      <h1>Toggle emoji by click</h1>
      <h1 onClick={toggleIsHappy}>{isHappy ? "🤑" : "😔"}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "💔" : "❤️"}</h1>
      <h1 onClick={toggleIsApple}>{isApple ? "🍏" : "🍍"}</h1>
    </div>
  );
}

export default Toggler;
