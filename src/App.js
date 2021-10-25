import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Main from "./view/Main";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
