var Number = React.createClass({displayName: "Number",
    getInitialState: function() {
        return {
            className: ''
        };
    },
    componentDidMount: function() {
        if (this.props.number == 1) {
            this.setState({ className: ' current ' });
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.number - 1 == this.props.current) {
            this.state.className = ' current ';
        } else {
            this.state.className = '';
        }
        return true;
    },
    render: function() {
        return React.createElement("li", {className: this.state.className}, this.props.number)
    }
});

var Numbers = React.createClass({displayName: "Numbers",

    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.current != nextProps.current) {
            return true
        }
        return false;
    },
    render: function() {
        var numbers = [];
        for (var i = 1; i <= this.props.count; i++) {
            var number = React.createElement(Number, {number: i, current: this.props.current, key: i - 1})
            numbers.push(number);
        }
        return React.createElement("ul", {className: "kf-numbers"}, numbers)
    }
});

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
        return React.createElement("div", {style: { backgroundImage: "url(" + this.props.src + ")"}, className: this.state.className}, 
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
            if (current == this.props.images.length - 1) {
                current = 0;
            }
            else {
                current++;
            }
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
             images, 
            React.createElement(Numbers, {count: images.length, current: this.state.current})
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