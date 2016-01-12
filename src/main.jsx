var React = require('react');
var ReactDOM = require('react-dom');
var Box = require('./components/Box.jsx');

ReactDOM.render(<Box boxStyle="plain" statistic="26" label="Things are being enumerated" />, document.getElementById('box-one'));
ReactDOM.render(<Box boxStyle="plain" statistic="$150000" label="Number of dollars I want" />, document.getElementById('box-two'));
ReactDOM.render(<Box boxStyle="plain" statistic="$25" label="Number of dollars I have" />, document.getElementById('box-three'));
ReactDOM.render(<Box boxStyle="bold" statistic="3837" label="Things" headingColor="orange" />, document.getElementById('box-four'));
ReactDOM.render(<Box boxStyle="wide-bold" footer={["123", "456", "789"]} subFoot={["Fizz", "Buzz", "FizzBuzz"]} headingColor="aqua" />, document.getElementById('big-box-one'));
ReactDOM.render(<Box boxStyle="standard" statistic="100%" label="Percentage" headingColor="firebrick" />, document.getElementById('small-box-one'));
ReactDOM.render(<Box boxStyle="standard" statistic="$0" label="Amount Paid" headingColor="seagreen" />, document.getElementById('small-box-two'));