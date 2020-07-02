import React,{Component}from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from './utils/NavBar';
import App from '../App';



const RenderComponent = ({Comp,props,routerProps})=>{
    return (
        <div>
            <NavBar />
            <div className={'main_container'}>
                <Comp {...props}  {...routerProps} />
            </div>
        </div>
    )
}

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <RenderComponent Comp={App} props={this.props} routerProps={props} />} />
                </Switch>
            </Router>
        )
    }
}