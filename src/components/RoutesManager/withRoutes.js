import React, {Component} from 'react';
import routes from './routes';

const withRoutes = (target) => {
    const filteredRoute = [];
    for(let i = 0; i < routes.length; i++) {
        if(routes[i].target === target) {
            filteredRoute.push(routes[i]);
        }
    }
    return (WrappedComponent) => {
        return class extends Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <WrappedComponent routes={filteredRoute} {...this.props}/>
                )
            }
        }
    
    }
}

export default withRoutes;