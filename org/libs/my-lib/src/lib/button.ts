import {html, css, LitElement,PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  static override styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  @property()
  disabled = false;

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    console.log('firstUpdated',this.name);
    
}
protected override updated(_changedProperties: PropertyValues): void {
    if(_changedProperties.has('name')) {
      console.log(this.name,'updated');
      
    }
}
  
  override render() {
    return html`<button>Hello,  I am webcomponent</button>`;
  }
}
