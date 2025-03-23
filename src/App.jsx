import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá Mundo");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={function () {
          setMessage("Olá! Fui Clicado");
        }}
      >
        Mudar menssagem
      </button>
    </div>
  );
}

export default App;
