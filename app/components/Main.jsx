var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <h1>Main Component!</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
