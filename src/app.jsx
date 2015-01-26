var React = require('react');

var HelloMessage = React.createClass({
	render: function () {
		return <div>Hello, {this.props.subject}!</div>
	}
})

React.render(<HelloMessage subject='Nerd'/>, document.body);

