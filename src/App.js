import MerciAppLogo from './logotype-merciapp.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MerciAppLogo} className="App-logo" alt="logo" />
      </header>
      <p>Highlight each occurence matching this Regex:</p>
      <pre>/[Mm]erci[Aa]pp/</pre>
      <div contentEditable="true" id="target"></div>
      <p className="caption">Pay attention, if my content is too large, I'll become scrollable!</p>
    </div>
  );
}

export default App;
