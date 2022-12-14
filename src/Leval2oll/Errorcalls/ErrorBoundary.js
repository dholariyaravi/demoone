import React, { Component ,logErrorToMyService   } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state= {hasError: false};
    }

    static getDerivedStateFromError(error){

        return{hasError: true};
    };
    componentDidCatch(error, info){
       // logErrorToMyService(error,info);
    }
  render() {
    if(this.state.hasError){
        return (
            <div>somthing is wrong</div>
          );
    }
    return this.props.children;
    
  }
}
