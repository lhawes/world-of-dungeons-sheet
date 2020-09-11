import * as React from 'react';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom';
import { Page } from 'src/App';

export interface NavigationProps {
  pages: Page[],
}

export const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  return (
    <Router>
      <ul>
        <li>
          { pages.map(({ route, name }) => (
            <Link to={route} key={name}>{ name }</Link>
          ))}
        </li>
      </ul>
    </Router>
  )
}