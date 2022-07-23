import { Provider } from "react-redux";
import { store } from "./store";
import Routers from "./Routers";

function App() {
  return (
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
