import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  static override styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  @property()
  disabled = false;

  override render() {
    return html`<button>Hello,  I am webcomponent</button>`;
  }
}
