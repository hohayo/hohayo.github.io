import React from 'react';

type Props = {
  name: string;
}

type State = {
  count: number;
}

export default class MyComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <section>
        <h1>MyComponent</h1>
        <h2>name:{this.props.name}</h2>
        <h2>count:{this.state.count}</h2>
      </section>
    );
  }
}
