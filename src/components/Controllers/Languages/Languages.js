import Component from '../../AbstractClasses/Component';

export default class Languages extends Component {
  render() {
    const controller = document.createElement('form');

    controller.addEventListener('change', this.props.handleChangeTemperature);

    controller.innerHTML = `
      <label>
        <span>F</span>
        <input type="radio" checked name="Temperature" value="Fahrenheit">
      </label>
      <label>
        <span>C</span>
        <input type="radio" name="Temperature" value="Celsius">
      </label>
    `;

    return controller;
  }
}
