
import * as React from 'react';
import ReactDOM from "react-dom";
import { averageComponent } from './averageComponent';

class main extends React.Component{
  
  render(){
    return <averageComponent initialName="desconocido"/>;
  }

}
ReactDOM.render(<main />, document.getElementById("index"));