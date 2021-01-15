import * as React from 'react';
const styles = require('./styles/styles.scss');
const logo = require('./img/ironMan.jpg')

interface Props {
  initialName: string;
}

interface State {
  name: string;
}

export class averageComponent extends React.Component<Props, State> {

  constructor(props: Props){
      super(props);
      this.state = {name: this.props.initialName};
  }

  sayHello(newName: string) {
      this.setState({name: newName})
  }

  render() {
      return <>
          <div className={styles.box}>
              <img src={logo} className={styles.logo}/>
              <span className={styles.title}>Hola: {this.state.name}</span>
          </div>
          <div>
              <span>Inserta tu nombre: </span>
              <input type="text" onChange={(e) => this.sayHello(e.target.value)} />
          </div>
      </>;
  }

}