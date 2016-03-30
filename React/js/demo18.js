var Number = React.createClass({
    getInitialState: function() {
        return {
            className: ''
        };
    },
    componentDidMount: function() {
        if (this.props.number == 0) {
            this.setState({ className: ' current ' });
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.number == nextProps.current) {
            this.state.className = ' current ';
        } else {
            this.state.className = '';
        }
        return true;
    },
    handlerClick: function() {
        this.props.change(this.props.number);
    },
    render: function() {
        return <li className={this.state.className}>
            <a href='javascript:;' onClick={this.handlerClick }>{this.props.number + 1}</a>
        </li>
    }
});

var Numbers = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.current != nextProps.current) {
            return true
        }
        return false;
    },
    render: function() {
        var numbers = [];
        for (var i = 0; i < this.props.count; i++) {
            var number = <Number number={i} current={this.props.current} key={i} change={this.props.change}/>
            numbers.push(number);
        }
        return <ul className="kf-numbers">{numbers}</ul>
    }
});

var ImageItem = React.createClass({
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
        if (this.props.index == nextProps.current) {//下一个
            this.state.className = 'banner-silder enter';
        } else if(this.props.index == this.props.current){//上一个
            //这儿有问题
            this.state.className = 'banner-silder leave';
        }else{//其他
            this.state.className = 'banner-silder';
        }
        return true;
    },
    render: function() {
        return <div style={{ backgroundImage: "url(" + this.props.src + ")" }} className={this.state.className}>
            <a href={this.props.index}></a>
        </div>
    }
});
var FocusImage = React.createClass({
    getInitialState: function() {
        return {
            current: 0
        }

    },
    componentDidMount: function() {
        this.setInterval();
    },
    setInterval: function(params) {
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
    changeNumber: function(number) {
        clearInterval(this.interval);
        console.log('==>' + number);
        this.setState({ current: number});
    },
   
    componnetWillUnMount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        var images = this.props.images.map((image, index) => {
            return <ImageItem key={index} index={index} src={image.src} current={this.state.current} count={this.props.images.length}/>
        });

        return <div className='kf-banner'>
            { images }
            <Numbers count={images.length} current={this.state.current} change={this.changeNumber}/>
        </div>
    }
});

var images = [
    { src: 'http://p1-merida.yamedia.tw/MjUxNTc2OTRtZXJpZGE=/09252d8a2f6118f7.jpg?w=1440&h=390', id: 1 },
    { src: 'http://p1-merida.yamedia.tw/MjYyNjk0MDJtZXJpZGE=/a02551540af3ef3d.jpg?w=1440&h=390', id: 2 },
    { src: 'http://p1-merida.yamedia.tw/MjYwMDk4MDhtZXJpZGE=/5b35498d734a7da6.jpg?w=1440&h=390', id: 3 },
    { src: 'http://img4.imgtn.bdimg.com/it/u=3987117004,2253985804&fm=21&gp=0.jpg', id: 4 },
    { src: 'http://p1-merida.yamedia.tw/MjU4ODQzNTltZXJpZGE=/6f2546da6f21ca6a.jpg', id: 5 }
];
ReactDOM.render(<FocusImage images={images} interval="5000"/>, document.getElementById("container"))