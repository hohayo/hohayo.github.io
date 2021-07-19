import React from 'react';

type Props = {
  count: number;
  onClick: ()=> void;
}

export default function MyHooks(props:Props) {
  const [name, setName] = React.useState('milkmidi');

  const atClick = React.useCallback(() => {
    setName('hi, React');
    props.onClick();
  }, []);

  return (
    <section>
      <h1>name:{name}</h1>
      <h2>props.count:{props.count}</h2>
      <button className="btn btn-primary" onClick={atClick}>click</button>
      <img className="mw-100" src={require('img/cat.png')} alt="" />
    </section>
  );
}
