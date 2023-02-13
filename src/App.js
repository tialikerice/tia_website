import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './home.js';
import About from './contactMePage.js';
import MyTimeLine from './timelinePage.js';
import FunPartOfMe from './FunPartOfMe.js';
import ProfPartOfMeEducation from './ProfPartOfMeEducation.js';
import Profile from './profile';
import WorkSample from './WorkSample';
import ProfPartOfMeWork from './ProfPartOfMeWork';
import ProfPartOfMeResearch from './ProfPartOfMeResearch';
import ISUResearchPage from './ISUResearch.js';
import FunPartOfMePet from './FunPartOfMePet.js'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/mytimeline" element={<MyTimeLine/>}/>
      <Route exact path="/funpartofme" element={<FunPartOfMe/>}/>
      <Route exact path="/ProfPartOfMeEducation" element={<ProfPartOfMeEducation/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/worksample" element={<WorkSample/>}/>
      <Route exact path="/ProfPartOfMeWork" element={<ProfPartOfMeWork/>}/>
      <Route exact path="/ProfPartOfMeResearch" element={<ProfPartOfMeResearch/>}/>
      <Route exact path="/ISUResearchPage" element={<ISUResearchPage/>}/>
      <Route exact path="/FunPartOfMePet" element={<FunPartOfMePet/>}/>
    </Routes>
    </BrowserRouter>
    </>
/*     <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <header className="App-header">
        <p>heheh</p>
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
      <header className="App-header">
      <h1> Welcome, this is Tia's Person Website!</h1>
      <TransitionCycle></TransitionCycle>
      </header>
    </div> */
  );
}

export default App;
