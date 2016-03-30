var ImageItem = React.createClass({displayName: "ImageItem",
    getInitialState: function() {
        return {
            className: 'banner-silder'
        }

    },
    componentDidMount: function() {
        if (this.props.index == 0) {
            this.setState({ className: 'banner-silder enter' });
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.index == nextProps.current) {
            this.state.className = 'banner-silder enter';

        } else {
            this.state.className = 'banner-silder leave';
        }
        return true;
    },
    render: function() {
        return React.createElement("div", {style: { backgroundImage: "url(" + this.props.src + ")"}}, 
            React.createElement("a", {href: this.props.index})
        )
    }
});
var FocusImage = React.createClass({displayName: "FocusImage",
    getInitialState: function() {
        return {
            current: 0
        }

    },
    componentDidMount: function() {
        this.interval = setInterval(() => {
            var current = this.state.current;
            //var images = this.images.length //$('.banner-silder');//.removeClass("leave").removeClass("enter");
            if (current == this.props.images.length - 1) {
                current = 0;
            }
            else {
                current++;
            }
            /*$(images.get(current)).removeClass("leave").addClass("enter");
            var prev = current == 0 ? images.length - 1 : current - 1;
            $(images.get(prev)).removeClass("enter").addClass("leave");*/
            this.setState({ current: current });
        }, this.props.interval);
    },
    componnetWillUnMount: function() {
        clearImmediate(this.interval);
    },
    render: function() {
        var images = this.props.images.map((image, index) => {
            return React.createElement(ImageItem, {key: index, index: index, src: image.src, current: this.state.current})
                
        });

        return React.createElement("div", {className: "kf-banner"}, 
             images 
        )
    }
});

var images = [
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 1 },
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 2 },
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 3 },
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 4 },
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 5 }
];
ReactDOM.render(React.createElement(FocusImage, {images: images, interval: "5000"}), document.getElementById("container"))