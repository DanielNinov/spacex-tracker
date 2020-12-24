import './App.css';
import UpcomingLaunches from './components/UpcomingLaunches/UpcomingLaunches';
import Navigation from './components/Base/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PastLaunches from './components/PastLaunches/PastLaunches';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/upcoming" component={UpcomingLaunches} />
        <Route path="/past" component={PastLaunches} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
