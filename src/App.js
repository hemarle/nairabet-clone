import requests from "./requests";
import "./App.css";
import Title from "./Title";
import Content from "./Content";
import Login from "./Login";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import Leftbar from "./Leftbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Title />
      <Login />
      <div className="app_body">
        <div className="body1">
          <Sidebar />
        </div>
        <div className="body2">
          <Mainbar />
        </div>
        <div className="body3">
          <Leftbar />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
