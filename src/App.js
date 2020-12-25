import UpcomingLaunches from './components/UpcomingLaunches/UpcomingLaunches';
import Navigation from './components/Base/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PastLaunches from './components/PastLaunches/PastLaunches';
import NotFound from './components/Base/NotFound/NotFound';
import Home from './components/Base/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/upcoming" component={UpcomingLaunches} />
        <Route path="/past" component={PastLaunches} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
