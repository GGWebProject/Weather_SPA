import Component from '../AbstractClasses/Component';
import Layout from '../Layout/Layout';
import Header from '../Header/Heder';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import appendService from '../../services/appendService';

export default class extends Component {
  constructor() {
    super();

    this.handleChangeTemperature = (e) => { console.log(e); };

    this.state = {
      count: 0,
    };
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: this?.state?.count + 1 });
  //   }, 3000);
  // }

  // _handleChangeTemperature(e) {
  //   console.log(e, this);
  // }

  render() {
    const element = document.createDocumentFragment();
    console.log(this.handleChangeTemperature);
    const header = new Header({ handleChangeTemperature: this.handleChangeTemperature });
    const main = new Main();
    const footer = new Footer();
    const layout = new Layout({ header, main, footer });

    appendService.append(element, layout);

    return element;
  }
}
