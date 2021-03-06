import 'https://unpkg.com/react@16/umd/react.production.min.js';
import 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js';

const Navigation = () =>
  React.createElement(
    'header',
    null,
    React.createElement('h1', null, 'Petrack'),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '/pets' }, 'Pets')
        ),
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '/owners' }, 'Owners')
        )
      )
    )
  );

export default Navigation;
