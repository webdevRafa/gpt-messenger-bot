import "./App.css";
import MessengerBot from "./components/MessengerBot";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <h1 className="text-center  text-white mt-20 mb-10">GPT MESSENGER BOT</h1>
      <SignIn />
      <MessengerBot />
    </>
  );
}

export default App;
