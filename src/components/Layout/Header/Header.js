import Component from '../../AbstractClasses/Component';
import Temperature from '../../Controllers/Temperature/Temperature';
import appendService from '../../../services/appendService';

export default class Header extends Component {
  render() {
    console.log(this.props);
    const element = document.createDocumentFragment();
    const temperatureController = new Temperature({
      ...this.props.temperatureController,
    });

    appendService.append(element, temperatureController);

    return element;
  }
}
