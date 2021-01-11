export default class Component {
  constructor(parentNode) {
    // catch create class from abstract component
    if (new.target === Component) {
      throw Error('You can\'t create instance from the Abstract class');
    }

    if (!parentNode) {
      throw Error('You should set parentNode');
    }

    this.parentNode = parentNode;
  }

  render() {
    if (!this.componentView) {
      throw Error('componentView is empty');
    }

    this.parentNode.appendChild(this.componentView);
  }

  // eslint-disable-next-line
  get componentView() {}
}
