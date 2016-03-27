var Public = {
    log: function(params) {
        console.log(params);
    }
}
var FormElement = React.createClass({
    mixins: [Public],
    getInitialState: function() {
        return {
            value: 'test'
        };
    },
    handlerChange: function(e) {
        this.log(e.target.value);
        this.setState({ value: e.target.value });
    },
    render: function(params) {
        return <div>
            <input type="text" value={this.state.value}  onChange={this.handlerChange}/>
            <div >
                {this.state.value}
            </div>
        </div>
    }
});

ReactDOM.render(<FormElement />, document.getElementById('container'))