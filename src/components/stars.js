
import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const parentStyles = {
    overflow: 'hidden',
    position: 'relative'
};

const defaultStyles = {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'block',
    float: 'left'
};

class StarsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 0,
            stars: [],
        };

        this.state.config = {
            count: props.count,
            size: props.size,
            char: props.char,
            // default color of inactive star
            color1: props.color1,
            // color of an active star
            color2: props.color2,
            edit: props.edit,
        }
    }

    componentDidMount() {
        this.setState({
            stars: this.getStars(this.state.value)
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            stars: this.getStars(props.value),
            value: props.value,
            config: Object.assign({}, this.state.config, {
                count: props.count,
                size: props.size,
                char: props.char,
                color1: props.color1,
                color2: props.color2,
                half: props.half,
                edit: props.edit
            })
        })
    }


    getRate() {
        let stars;
        stars = Math.round(this.state.value);
        return stars
    }

    getStars(activeCount) {
        if (typeof activeCount === 'undefined') {
            activeCount = this.getRate()
        }
        let stars = []
        for (let i = 0; i < this.state.config.count; i++) {
            stars.push({
                active: i <= activeCount - 1
            })
        }
        return stars
    }

    mouseOver(event) {
        let {config} = this.state;
        if (!config.edit) return;
        let index = Number(event.target.getAttribute('data-index'));
        index = index + 1;
        this.setState({
            stars: this.getStars(index)
        })
    }

    mouseLeave() {
        const {config } = this.state;
        if (!config.edit) return;
        this.setState({
            stars: this.getStars()
        })
    }

    clicked(event) {
        const {config} = this.state;
        if (!config.edit) return;
        let index = Number(event.target.getAttribute('data-index'));
        let value;
        value = index = index + 1;
        this.setState({
            value: value,
            stars: this.getStars(index)
        });
        this.props.onChange(value)
    }

    renderStars() {
        const {stars, config } = this.state;
        const { color1, color2, size, char, edit } = config;
        return stars.map((star, i) => {
            let starClass = '';
            const style = Object.assign({}, defaultStyles, {
                color: star.active ? color2 : color1,
                cursor: edit ? 'pointer' : 'default',
                fontSize: `${size}px`
            });
            return (
                <span
                    className={starClass}
                    style={style}
                    key={i}
                    data-index={i}
                    data-forhalf={char}
                    onMouseOver={this.mouseOver.bind(this)}
                    onMouseMove={this.mouseOver.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={this.clicked.bind(this)}>
          {char}
        </span>
            )
        })
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className} style={parentStyles}>
                {this.renderStars()}
            </div>
        )
    }
}

StarsBox.defaultProps = {
    edit: true,
    half: true,
    value: 0,
    count: 5,
    char: '★',
    size: 30,
    color1: 'gray',
    color2: 'blue',

    onChange: () => { }
};

export default StarsBox