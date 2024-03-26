import { useState } from 'react';

/* eslint-disable-next-line */
export interface CounterProps {}

export function Counter(props: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to Counter!</h1>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </div>
  );
}

export default Counter;
