var React = require('react');

var Box = React.createClass({
	render: function() {
		var colWidth = "";
		if(this.props.boxStyle === "plain" || this.props.boxStyle === "standard" || this.props.boxStyle === "bold") {
			colWidth = "col-sm-3";
		}  else if(this.props.boxStyle === "wide-bold") {
			colWidth = "col-sm-9"; 
		} else {
			colWidth = "col-sm-6";
		}

		var footerStyle = {
			background: "#333333",
			color: "#ffffff",
			textAlign: "center",
			borderTop: "none"
		}

		var headerStyle = {
			color: "#ffffff",
			border: "none"
		}

		var bodyStyle = {
			borderRadius: 3
		}

		var panelStyle = {
			marginTop: 10,
			marginBottom: 10
		}

		if(this.props.headingColor) {
			headerStyle.background = this.props.headingColor;
		}

		return (
			<div className={colWidth} style={panelStyle}>
				{(() => {
					if(this.props.boxStyle === "standard") {
						return (
							<div className="panel-heading panel-primary" style={headerStyle}>
								<h3 className="panel-title">{this.props.label}</h3>
								<h3>{this.props.statistic}</h3>
							</div>
						);
					} else if (this.props.boxStyle === "bold") {
						headerStyle.textAlign = "center";
						headerStyle.borderBottomLeftRadius = 3;
						headerStyle.borderBottomRightRadius = 3;
						return (
							<div className="panel-heading panel-primary" style={headerStyle}>
								<h1>{this.props.statistic}</h1>
								<p>{this.props.label}</p>
							</div>
						);
					} else if (this.props.boxStyle === "wide-bold") {
						headerStyle.height = 250;
						return (
							<div className="panel-heading panel-primary" style={headerStyle}>
							</div>
						)
					} else {
						headerStyle.height = 0;
						headerStyle.padding = 0;
						return (
							<div className="panel-heading panel-primary" style={headerStyle}>
							</div>
						);
					}
				})()}
				
				{(() => {
					if(this.props.boxStyle === "plain") {
						bodyStyle.border = "2px solid #888888";
						return (
							<div className="panel-body" style={bodyStyle}>
								<h3>{this.props.statistic}</h3>
								<p>{this.props.label}</p>
							</div>
						);
					} else if(this.props.boxStyle === "standard") {
						bodyStyle.border = "1px solid " + this.props.headingColor;
						bodyStyle.height = 70;
						bodyStyle.borderTopRightRadius = 0;
						bodyStyle.borderTopLeftRadius = 0;
						return (
							<div className="panel-body" style={bodyStyle}>
							</div>
						);
					}
				})()}
				{(() => {
					if(this.props.boxStyle === "wide-bold") {
						return ( <div className="panel-footer" style={footerStyle}>
								 	<div className="row">
								 		<div className="col-sm-4">
								 			<h3>{this.props.footer[0]}</h3>
								 			<p>{this.props.subFoot[0]}</p>
							 			</div>
								 		<div className="col-sm-4">
								 			<h3>{this.props.footer[1]}</h3>
								 			<p>{this.props.subFoot[1]}</p>
							 			</div>
								 		<div className="col-sm-4">
								 			<h3>{this.props.footer[2]}</h3>
								 			<p>{this.props.subFoot[2]}</p>
							 			</div>
								 	</div>
								 </div>
						);
					}
				})()}
			</div>
		);
	}

});

module.exports = Box;