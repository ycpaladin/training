'use strict'


var BootstrapButton = React.createClass({

    render: function() {
        return (
            <a {...this.props}
                href="javascript:;" role="button" className={(this.props.className || '') + ' btn'}></a>
        );
    }
});


var BootstrapModal = React.createClass({

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
                <BootstrapButton onClick={this.handleConfirm} className = 'btn-primary'>
                    {this.props.confirm}
                </BootstrapButton>
            );
        }

        if (this.props.confirm) {
            confirmButton = (
                <BootstrapButton onClick={this.handleConfirm}className="btn-primary" >
                    {this.props.confirm}
                </BootstrapButton>
            )
        }

        if (this.props.cancel) {
            cancelButton = (
                <BootstrapButton onClick={this.handleCancel} className="btn-default">
                    {this.props.cancel}
                </BootstrapButton>
            )
        }

        return (
            <div className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                onClick={this.handleCancel}>
                                &times;
                            </button>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {cancelButton}
                            {confirmButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    handleCancel: function() {
        this.props.onCancel && this.props.onCancel();
    }, handleConfirm: function() {
        this.props.onConfirm && this.props.onConfirm();
    }
});
var Example = React.createClass({
    handleCancel: function() {
        this.refs.modal.close();
        this.props.callback && this.props.callback({ result: false });
    },
    render: function() {
        var modal = (
            <BootstrapModal  ref="modal" confirm="确定"  cancel="取消" onCancel = {this.handleCancel} onConfirm ={this.closeModal} title={this.props.title} >
                {this.props.description}
            </BootstrapModal >
        )

        return (
            <div className="example">
                {modal}
                <BootstrapButton onClick={this.openModal} className="btn-default">
                    Open modal
                </BootstrapButton>
            </div>
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

ReactDOM.render(<Example callback={callback} title='确实要删除吗?' description='删除此之后,会发生意想不到的后果哦。'/>, document.getElementById('container'))