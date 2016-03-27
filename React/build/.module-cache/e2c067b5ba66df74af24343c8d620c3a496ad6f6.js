'use strict'


var BootstrapButton = React.createClass({displayName: "BootstrapButton",

    render: function() {
        return (
            React.createElement("a", React.__spread({},  this.props, 
                {href: "javascript:;", role: "button", className: (this.props.className || '') + ' btn'}))
        );
    }
});


var BootstrapModal = React.createClass({displayName: "BootstrapModal",

    componentDidMount: function() {
        $(ReactDOM.findDOMNode(this)).modal({ backdrop: 'static', keyboard: false, show: false })
    },

    componentWillUnmount: function() {
        $(ReactDOM.findDOMNode(this)).off("hidden")
    }, close: function() {
        $(ReactDOM.findDOMNode(this)).modal('hide');
    }, open: function() {
        $(ReactDOM.findDOMNode(this)).modal('show')
    },
    render: function() {
        var confirmButton = null;
        var cancelButton = null;
        if (this.props.confirm) {
            confirmButton = (
                React.createElement(BootstrapButton, {onClick: this.handleConfirm, className: "btn-primary"}, 
                    this.props.confirm
                )
            );
        }

        if (this.props.confirm) {
            confirmButton = (
                React.createElement(BootstrapButton, {onClick: this.handleConfirm, className: "btn-primary"}, 
                    this.props.confirm
                )
            )
        }

        if (this.props.cancel) {
            cancelButton = (
                React.createElement(BootstrapButton, {onClick: this.handleCancel, className: "btn-default"}, 
                    this.props.cancel
                )
            )
        }

        return (
            React.createElement("div", {className: "modal fade"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header"}, 
                            React.createElement("button", {
                                type: "button", 
                                className: "close", 
                                onClick: this.handleCancel}, 
                                "×"
                            ), 
                            React.createElement("h3", null, this.props.title)
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            this.props.children
                        ), 
                        React.createElement("div", {className: "modal-footer"}, 
                            cancelButton, 
                            confirmButton
                        )
                    )
                )
            )
        );
    },
    handleCancel: function() {
        this.props.onCancel && this.props.onCancel();
    }, handleConfirm: function() {
        this.props.onConfirm && this.props.onConfirm();
    }
});
var Example = React.createClass({displayName: "Example",
    handleCancel: function() {
        this.refs.modal.close();
        this.props.callback && this.props.callback({ result: false });
    },
    render: function() {
        var modal = (
            React.createElement(BootstrapModal, {ref: "modal", confirm: "确定", cancel: "取消", onCancel: this.handleCancel, onConfirm: this.closeModal, title: this.props.title}, 
                this.props.description
            )
        )

        return (
            React.createElement("div", {className: "example"}, 
                modal, 
                React.createElement(BootstrapButton, {onClick: this.openModal, className: "btn-default"}, 
                    "Open modal"
                )
            )
        )
    }, openModal: function() {
        this.refs.modal.open();
    }, closeModal: function() {
        this.refs.modal.close();
        this.props.callback && this.props.callback({ result: true });
    }

})

var callback = (result) => {
    console.log(result.result);
}

ReactDOM.render(React.createElement(Example, {callback: callback, title: "确实要删除吗?", description: "删除此之后,会发生意想不到的后果哦。"}), document.getElementById('container'))