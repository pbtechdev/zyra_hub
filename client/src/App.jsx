import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
