import logo from './logo.svg';
import './App.css';
import Widget from './components/Widget';

function App() {
  return (
    <div className="App">
      <div class="flex-container">
      <div class="container-fluid">
        <Widget title="Statistic" description="An interesting stat" value={100} label="Orders" />
      </div>
      <div class="container-fluid">
        <Widget title="Statistic" description="More stuff" value={34} label="Returns" />
      </div>
      </div>
    </div>
  );
}

export default App;
