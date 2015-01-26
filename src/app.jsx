var React = require('react');

var HelloMessage = React.createClass({
	render: function () {
		return <div>Hello, {this.props.subject}!</div>
	}
})

React.render(<HelloMessage subject='Nerd'/>, document.body)

// var MyWidget = React.createClass({
//   handleClick: function() {
//     alert('Hello!');
//   },
//   render: function() {
//     return (
//       <a href="#" onClick={this.handleClick}>Do something!</a>
//     );
//   }
// });

// var MyView = Backbone.View.extend({
//   el: 'body',
//   template: '<div class="widget-container"></div>',
//   render: function() {
//     this.$el.html(this.template);
//     React.renderComponent(new MyWidget(), this.$('.widget-container').get(0));
//     return this;
//   }
// });

// new MyView().render();