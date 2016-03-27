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
        //this.log('getDefaultProps');
        return {

        };
    },
    componentWillMount: function() {
        this.log('componentWillMount');
    },
    componentDidMount: function() {
        this.log('componentDidMount');
    },
    componentWillReceiveProps: function(nextProps) {
        this.log('componentWillReceiveProps');
    },
    shouldComponentUpdate: function(nextProps, nextState) {
         this.log('shouldComponentUpdate=====>' + nextState.value);
        if  (this.state.value != nextState.value){
            this.log('不一样');
            return true;
        }else{
            return false;
        }
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.log('componentWillUpdate');
    },
    componentDidUpdate: function(nextProps, nextState) {
        this.log('componentDidUpdate');
    },
    componentWillUnmount: function() {
        this.log('componentWillUnmount');
    },
    handlerChange: function(e) {
        this.log('handlerChange=>' + e.target.value);
        this.setState({ value: e.target.value })
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