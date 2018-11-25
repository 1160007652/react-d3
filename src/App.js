import React from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import About from './page/about';
import EmotSvg from './page/example-1-emot';
import './App.css';

class App extends React.Component {
    
    render() {
        return (
            <div id="d3-learn">
                <BrowserRouter>
                    <React.Fragment>
                        <div id="menu">
                            <NavLink exact to="/" className="menu-item" activeClassName="active-menu" >首页</NavLink>
                            <NavLink to="/emot" className="menu-item" activeClassName="active-menu" >大黄人</NavLink>
                            <NavLink to="/histogram" className="menu-item" activeClassName="active-menu" >柱状图</NavLink>
                        </div>
                        <div id="page-content">
                            <Switch>
                                <Route exact path="/" component={About}/>
                                <Route exact path="/emot" component={EmotSvg}/>
                            </Switch>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;