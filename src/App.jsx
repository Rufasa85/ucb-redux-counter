import First from "./components/First";
import CountProvider from "./utils/countCountext";

function App() {
  return (
    <>
      <CountProvider>
        <First />
      </CountProvider>
    </>
  );
}

export default App;
