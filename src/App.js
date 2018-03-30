import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%', left: 0, top: 0}}>
        <Infinite max={1000} factor={0.01}/>
      </div>
    );
  }
}

class Infinite extends Component {
  render() {
    const {count=0,max=100,factor=0.1,height=window.innerHeight, width=window.innerWidth} = this.props;
    let color = "#"+((1<<24)*Math.random()|0).toString(16);
    while (this.style && color !== this.style.backgroundColor) {
      color = "#"+((1<<24)*Math.random()|0).toString(16);
    }

    if (count == max) {
      return null;
    } else {
      return (
        <div style={{
          position: 'fixed',
          left: window.innerWidth/2 - width/2,
          top: window.innerHeight/2 - height/2,
          height: height,
          width: width,
          backgroundColor: color
        }}>
          <Infinite count = {count+1} height={Math.floor(height*(1-factor))} width={Math.floor(width*(1-factor))} max={max} factor={factor}/>
        </div>
      )
    }
  }
}

export default App;
