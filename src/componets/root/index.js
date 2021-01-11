import Component from '../abstractClasses/Component';

export default class extends Component {
  constructor() {
    super(document.querySelector('.root'));
  }

  // eslint-disable-next-line
  get componentView() {
    return document.createElement('div');
  }
}
