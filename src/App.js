import React from "react";
import './styles/global.css'
import Box from "./components/box.jsx"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: 20,
      steps: 1000
    };
  }

  onHeartChange = (e) => {
    this.setState({ heart: e.target.value }, this.calculateWater)
  }

  onStepsChange = (e) => {
    this.setState({ steps: e.target.value }, this.calculateWater)
  }

  onTempChange = (e) => {
    this.setState({ temperature: e.target.value }, this.calculateWater)
  }

  calculateWater = () => {
    let waterToDrink = 1.5;
    if (this.state.temperature > 20) {
      waterToDrink += 0.02 * (this.state.temperature - 20)
    }
    if (this.state.steps > 10000) {
      waterToDrink += 0.00002 * (this.state.steps - 10000)
    }
    if (this.state.heart > 120) {
      waterToDrink += 0.08 * (this.state.heart - 120)
    }
    this.setState({ water: waterToDrink.toPrecision(3) })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*  water  */}<Box icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
            onChange={this.calculateWater} />

          {/*  Steps  */}<Box icon="directions_walk"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange} />

          {/*  Heart  */}<Box icon="favorite"
            color="red"
            unit="bpm"
            value={this.state.heart}
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange} />

          {/*  Temperature */}<Box icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTempChange} />

        </div>
      </div>
    );
  }
}

export default App;
