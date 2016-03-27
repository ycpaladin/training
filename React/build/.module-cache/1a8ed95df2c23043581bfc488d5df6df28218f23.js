var FormElement = React.createClass({displayName: "FormElement",

    render: function(params) {
        return React.createElement("input", {type: "text"})
    }
});

ReactDOM.render(React.createElement(FormElement, null) , document.getElementById('container'))