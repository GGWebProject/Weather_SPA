import Component from '../../AbstractClasses/Component';

export default class Languages extends Component {
// eslint-disable-next-line
  constructor(parentNode) {
    super(parentNode);
  }

  // eslint-disable-next-line
  render() {
    const controller = document.createElement('form');
    controller.innerHTML = `
      <label>
        <span>F</span>
        <input type="radio" checked name="Farengeite">
      </label>
      <label>
        <span>C</span>
        <input type="radio" name="Celsium">
      </label>
    `;

    return controller;
  }
}
