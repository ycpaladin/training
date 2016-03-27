var FormElement = React.createClass({displayName: "FormElement",
    getInitialState: function() {
        return {
            value: 'test'
        };
    },
    handlerChange: function(e) {
        this.setState({ value: e.target.value });
    },
    render: function(params) {
        return React.createElement("div", null, 
            React.createElement("input", {type: "text", onChange: this.handlerChange}), 
            React.createElement("div", null, 
                this.state.value
            )
        )
    }
});

ReactDOM.render(React.createElement(FormElement, null), document.getElementById('container'))