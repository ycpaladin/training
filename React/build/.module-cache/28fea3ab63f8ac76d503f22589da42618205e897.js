var ImageItem = React.createClass({displayName: "ImageItem",
    render: function() {
        return null; 
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
            var images = $('.banner-silder');//.removeClass("leave").removeClass("enter");
            if (current == images.length - 1) {
                current = 0;
            }
            else {
                current++;
            }
            $(images.get(current)).removeClass("leave").addClass("enter");
            var prev = current == 0 ? images.length - 1 : current - 1;
            $(images.get(prev)).removeClass("enter").addClass("leave");
            this.setState({ current: current });
        }, this.props.interval);
    },
    componnetWillUnMount: function() {
        clearImmediate(this.interval);
    },
    render: function() {
        var images = this.props.images.map((image, index) => {
            return React.createElement("div", {key: index, style: { backgroundImage: "url(" + image.src + ")"}, className: index == 0 ? 'banner-silder enter' : 'banner-silder '}, 
                React.createElement("a", {href: '/produce/' + image.id}

                )
            )
        });

        return React.createElement("div", {className: "kf-banner"}, 
             images 
        )
    }
});

var images = [
    { src: '../kfbox/attached/9fbb4ebe-1b7c-4591-8e75-b087c8952eca.jpg', id: 1 },
    { src: '../kfbox/attached/711094bc-c62d-4919-af71-987bb21e0c69.jpg', id: 2 },
    { src: '../kfbox/attached/4701947b-12d0-48c7-ac9e-df38ff0e67a5.jpg', id: 3 },
    { src: '../kfbox/attached/dbe14655-8505-4f0e-9f4c-cbfd3a1e1a92.jpg', id: 4 },
    { src: '../kfbox/attached/e6479249-da00-49b2-bac9-03f4a2a3581a.jpg', id: 5 }
];
ReactDOM.render(React.createElement(FocusImage, {images: images, interval: "5000"}), document.getElementById("container"))