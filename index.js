function Slider(props){
    return(
        <div className='slider__input'>
            <div className="input input--name">
                <label>{props.name}</label>
            </div>
            <div className='input input--range'>
                <input type="range" onChange={props.onChange} min="0" max="255" value={props.value} name={props.name}/>
            </div>
            <div className='input input--text'>
                <input type="number" onChange={props.onChange} value={props.value}/>
            </div>
        </div>
    )
}

function Hex(props){
    var r = rgbToHex(props.value.red);
    var g = rgbToHex(props.value.green);
    var b = rgbToHex(props.value.blue);
    var h = '#'+r+g+b;
    return(
        <div className='slider__input'>
            <div className="input input--name">
                <label>Hex</label>
            </div>
            <div className='input input--range'>
                <input value={h}/>
            </div>
            <Randomizer onClick={props.onChange}/>
        </div>
    )
}

function Randomizer(props){
    return(
        <div className="input input--text">
            <button onClick={props.onClick}>Random Colors</button>
        </div>
    )
}

var rgbToHex = function(rgb){
    var hex = Number(rgb).toString(16);
    if(hex.length < 2){
        hex = '0' + hex;
    }
    return hex
}

var rand = function() {
    return Math.floor(Math.random() * Math.floor(255));
}

var Color = createReactClass ({

    getInitialState: function(){
        return {red: rand(), green: rand(), blue: rand(), hex: '#ffffff'}
    },

    handleChange: function(e){
        this.setState({[e.target.name]: e.target.value})
    },

    handleRandomize: function(){
        this.setState({red: rand(), green: rand(), blue: rand(), hex: '#ffffff'})
    },

    render: function(){
        var colNames = ['red', 'green', 'blue', 'hex']
        var color = 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')';

        return(
            <div className="Bg" style={{backgroundColor: color}}>
                <div className="Card">
                    <h1 style={{color: color, textAlign: 'center'}}>RGB Color Picker</h1>
                    <div className="slider">
                        <Slider onChange={this.handleChange} value={this.state.red} name={colNames[0]}/>
                        <Slider onChange={this.handleChange} value={this.state.green} name={colNames[1]}/>
                        <Slider onChange={this.handleChange} value={this.state.blue} name={colNames[2]}/>
                        <Hex onChange={this.handleRandomize} value={this.state} name={colNames[3]}/>
                    </div>
                </div>
            </div>
        )
    }

})

  
var renderTarget = document.getElementById("app")
ReactDOM.render(<Color/>, renderTarget)