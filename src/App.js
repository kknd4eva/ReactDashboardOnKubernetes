import './App.css';
import Widget from './components/Widget';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="flex-container">
        <Widget 
          title="Statistic" 
          description="An interesting stat" 
          value={100} 
          chartRange={Array.from({length: 30}, () => Math.floor(Math.random() * 40))} 
          label="Orders" 
          />
        <Widget 
          title="Statistic" 
          description="More stuff" 
          value={34} 
          chartRange={Array.from({length: 30}, () => Math.floor(Math.random() * 40))} 
          label="Returns" 
          />
      </div>
    </div>
  );
}

export default App;
