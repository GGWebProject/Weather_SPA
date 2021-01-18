import Component from '../AbstractClasses/Component';
import Languages from '../Controllers/Languages/Languages';

export default class extends Component {
  constructor() {
    super(document.querySelector('.root'));
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: (this?.state?.count || 0) + 1 });
  //   }, 1000);
  // }

  // eslint-disable-next-line
  render() {
    const element = document.createElement('div');
    const languages = new Languages(element);
    languages.renderToParent();

    return element;
  }
}
