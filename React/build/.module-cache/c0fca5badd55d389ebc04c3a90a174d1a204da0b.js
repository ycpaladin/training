var Public = {
    log: function(params) {
        console.log(params);
    }
}


var FormElement = React.createClass({displayName: "FormElement",
    mixins: [Public],
    getInitialState: function() {
        this.log('getInitialState');
        return {
            value: 'test'
        };
    },
    getDefaultProps: function(params) {
        this.log('getDefaultProps');
        return {

        };
    },
    componentWillMount: function() {

    },
    componentDidMount: function() {

    },
    componentWillReceiveProps: function(nextProps) {

    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },
    componentWillUpdate: function(nextProps, nextState) {

    },
    componentDidUpdate: function(nextProps, nextState) {

    },
    componentWillUnmount: function() {

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