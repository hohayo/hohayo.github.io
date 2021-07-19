import React from 'react';
import MyHooks from './MyHooks';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="app container">
      <MyHooks count={9527} onClick={() => alert('hi, webpack')} />
      <MyComponent name="milkmidi" />
    </div>
  );
}

export default App;
