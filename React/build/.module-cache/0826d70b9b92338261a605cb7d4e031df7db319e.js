
var FormElement = React.createClass({displayName: "FormElement",

    getInitialState: function() {
        return {
            value: 'test'
        };
    },
    getDefaultProps: function(params) {

    },
    render: function(params) {
        return React.createElement("div", null, 
            React.createElement("input", {type: "text", value: this.state.value, onChange: this.handlerChange}), 
            React.createElement("div", null, 
                this.state.value
            )
        )
    }
});

ReactDOM.render(React.createElement(FormElement, null), document.getElementById('container'))