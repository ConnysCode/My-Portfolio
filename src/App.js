import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Encrypt, XP } from './Components/Projects'


function App() {
  return (
    <Router basename={'/portfolio'}>
      <div className="App">
        <div className="ContentWrapper">
          <Switch>
            <Route exact={true} path={`/portfolio/encrypt`}>
              <Encrypt />
            </Route>
            <Route exact={true} path={`/portfolio/xp`}>
              <XP />
            </Route>
            <Route path={`/portfolio`}>
              <Portfolio />
            </Route>
            <Route path={`/`}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

function Home() {
  return (
    <div>
      <div className="Page">
        <div className="Title">
          <h2>Hey, I'm <span className="tag">Morian</span></h2>
          <code><p className="subtitle">I'm your{` `}
            <Typical className="tag" loop={1} wrapper="b" steps={[`Design-`, 1000, `Web Deve-`, 2500, `Software Develop-`, 5000, `Solution.`]} />
          </p></code>
        </div>
        {/* <br></br> */}
        <div className="Content">
          <Link to="/portfolio">
            <p><ChevronRightIcon className="arrow" variant="contained" color="action" />My <b className="tag">Portfolio.</b></p>
          </Link>
          <a href="https://twitter.com/ConnysCode">
            <p><ChevronRightIcon className="arrow" variant="contained" color="action" />My <b className="tag">Twitter.</b></p>
          </a>
          <a href="https://github.com/ConnysCode/">
            <p><ChevronRightIcon className="arrow" variant="contained" color="action" />My <b className="tag">Github.</b></p>
          </a>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <div>
      <div className="Page">
        <div className="Title">
          <h2><Link to="/"><ChevronLeftIcon className="arrow big" variant="contained" color="action" /></Link>Some of my recent <span className="tag">Projects</span></h2>
          <code><p className="subtitle">Stuff {` `}
            <Typical className="tag" loop={1} wrapper="b" steps={[`I've been tinkering wi-`, 1000, `I've been working o-`, 2500, `I'm proud of.`]} />
          </p></code>
        </div>
        <div className="Content">
          <div className="ImageContainer">
            <div className="row">
              <div className="column">
                <Link to="/portfolio/encrypt">
                  <div className="imageHolder">
                    <div className="name">encrypt.</div>
                    <div className="portImage" id="portEncrypt" />
                    <h4>more about <span className="tag">encrypt.</span></h4>
                  </div>
                </Link>
              </div>
              <div className="column">
                <Link to="/portfolio/xp">
                  <div className="imageHolder">
                    <div className="name">XP</div>
                    <div  className="portImage" id="portXP" />
                    <h4>more about <span className="tag">XP</span>.</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Page">
        <div className="Title">
          <h2>Smaller projects of <span className="tag">mine</span></h2>
          <code><p className="subtitle">Stuff like <span className="tag">libraries</span>, <span className="tag">APIs </span>and <span className="tag">more.</span>
          </p></code>
        </div>
        <div className="Content">
          <div className="ImageContainer">
            <div className="row">
              <div className="column">
                <Link to="/portfolio/encrypt">
                  <div className="imageHolder">
                    <div className="name">jTrack.</div>
                    <div className="portImage" id="portEncrypt" />
                    <h4>more about <span className="tag">jTrack</span>.</h4>
                  </div>
                </Link>
              </div>
              <div className="column">
                <Link to="/portfolio/xp">
                  <div className="imageHolder">
                    <div className="name">SharpyCatcher</div>
                    <div  className="portImage" id="portXP" />
                    <h4>more about <span className="tag">SharpyCatcher</span>.</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
