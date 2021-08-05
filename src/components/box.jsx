import React from "react";
import '../App.css';


export default class Box extends React.Component {

  render() {
    let slider
    if (this.props.icon !== "local_drink") {
      slider = <input type="range"
        id="jauge"
        name="jauge"
        step={this.props.icon == "directions_walk" ? 1000 : 1}
        min={this.props.min}
        max={this.props.max}
        onChange={this.props.onChange}
        value={this.props.value}>
      </input>

    } else { slider = null }

    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons"
          style={{ fontSize: 100, color: this.props.color }}>
          {this.props.icon}</span>
        <p>{this.props.value} {this.props.unit}</p>
        <div>
          {slider}
        </div>
      </div>
    )
  }
}

