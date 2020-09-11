import * as React from 'react';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom';
import { Page } from 'src/pages/pageRouting';
import { memo } from 'react';

export interface NavigationProps {
  pages: Page[],
}

export const Navigation: React.FC<NavigationProps> = memo(({ pages }) => {
  return (
    <Router>
      <ul>
        { pages.map(({ route, name }) => (
          <li key={`${name}-link`}>
            <Link to={route}>{ name }</Link>
          </li>
        ))}
      </ul>
    </Router>
  )
})