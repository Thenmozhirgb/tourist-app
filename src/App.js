import React from 'react';
import Body from "../src/component/Body";
import configStore from './redux/store/store';

//setup store
console.log(configStore.getState());

class App extends React.Component {
  render() {
    return (
      <div>
        <Body />
      </div >
    );
  }
}

export default App;
