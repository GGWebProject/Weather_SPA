export default class Component {
  constructor(parentNode) {
    // catch create class from abstract component
    if (new.target === Component) {
      throw Error('You can\'t create instance from the Abstract class');
    }

    if (!parentNode) {
      throw Error('You should set parentNode');
    }

    // this.state = null;
    this.view = null;

    this.parentNode = parentNode;
    this.componentDidMount();
  }

  renderToParent() {
    // let result;
    const renderedElement = this.render();

    if (!renderedElement) {
      throw Error('componentView is empty');
    }

    if (this.view) {

    } else {
      this.parentNode.appendChild(renderedElement);
    }

    this.view = renderedElement;
  }

  // This method returns html element
  // eslint-disable-next-line
  render() {}

  // eslint-disable-next-line
  componentDidMount() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.renderToParent();
  }

  rerenderComponent() {
    this.view.replaceWith(renderedElement);
  }
}
