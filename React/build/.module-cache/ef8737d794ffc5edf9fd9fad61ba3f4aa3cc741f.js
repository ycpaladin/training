var Public = React.createClass({displayName: "Public",
    
});
var FormElement = React.createClass({displayName: "FormElement",
    mixins:[Public],
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
            React.createElement("input", {type: "text", value: this.state.value, onChange: this.handlerChange}), 
            React.createElement("div", null, 
                this.state.value
            )
        )
    }
});

ReactDOM.render(React.createElement(FormElement, null), document.getElementById('container'))