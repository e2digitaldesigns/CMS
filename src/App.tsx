import { GlobalContext } from "./context/globalContext";
import PrimaryTemplate from "./components/template/template";

function App() {
  return (
    <GlobalContext.Provider
      value={{
        userInformation: { _id: "xxx", name: "Casana Bey" }
      }}
    >
      <div className="App">
        <PrimaryTemplate />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
