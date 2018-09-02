import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import images from './App/images';

import App from './App';// 引入App组件
import registerServiceWorker from './registerServiceWorker';
import MyWallet from './pages/MyWallet';
import Footer from './pages/MyWallet/Footer';

import { BrowserRouter as Router, Route ,Link} from "react-router-dom";


ReactDOM.render((
    <Router>
     <div className="root-child">
        <div className="app">
            <div className="app-img">
                <img src={ images.logo } alt="italki-logo" />
            </div>
            <ul className="app-header" >
                <li> 
                <Link to="/">home page</Link>
                </li>
                <li>
                <Link to="/mywallet">my wallet</Link>
                </li>
            </ul>
        </div>
        <div className="page-box">
                <Route path="/" exact component={ App } />
                <Route path="/mywallet" component={ MyWallet } />              
        </div>
        <Footer></Footer>
     </div>
    </Router>  
), 
 
document.getElementById('root')
);
registerServiceWorker();

class Demo extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>'DEMO'</li>
                    <li>'DEMO'</li>
                    <li>'DEMO'</li>
                </ul>
            </div>
        )
    }
}
