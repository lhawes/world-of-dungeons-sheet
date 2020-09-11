import * as React from 'react';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom';
import { Page } from 'src/pages/pageRouting';

export interface NavigationProps {
  pages: Page[],
}

export const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  return (
    <Router>
      <ul>
        { pages.map(({ route, name }) => (
          <li>
            <Link to={route} key={`${name}-link`}>{ name }</Link>
          </li>
        ))}
      </ul>
    </Router>
  )
}