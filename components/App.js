var React = require('react');

var Synth = require('./Synth');

var App = React.createClass({

  render() {
  	return (
  		<div>
	    <h1>APP</h1>
      <Synth />
	    </div>
  	)
  }
});

module.exports = App;