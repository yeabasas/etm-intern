import { Route, Link } from 'react-router-dom';

import styles from './core.module.scss';

/* eslint-disable-next-line */
export interface CoreProps {}

export function Core(props: CoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Core!</h1>

      <ul>
        <li>
          <Link to="/">core root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the core root route.</div>} />
    </div>
  );
}

export default Core;
