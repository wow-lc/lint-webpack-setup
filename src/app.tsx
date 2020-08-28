import React from 'react';
// import Login from '@pages/Login'; // TODO

interface IProps {
  name: string;
  age: number;
}

function App(properties: IProps): any {
  const { name, age } = properties;
  return (
    <div className="App">
      {/* <Login /> */}
      Hello I am {name}, my age is {age}
    </div>
  );
}

export default App;
