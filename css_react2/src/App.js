import Nav from "./Nav";
import "./App.css";
import FromTable from "./FromTable";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="pagecontent">
        <div className="leftpart">
          <p className="gswwt">Get Started with Apptio Today</p>
          <p className="ttk">
            Talk to an Apptio expert about your specific needs and see a live
            product demonstration. Discuss current challenges and find the right
            application for your use case.
          </p>
        </div>
        <div className="rightpart">
          <FromTable />
        </div>
      </div>
    </div>
  );
}

export default App;
