import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';

/**
 * `application-side-bar`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ApplicationSideBar extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }

         .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>
      <app-toolbar>Menu</app-toolbar>
      <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
        <a name="view1" href="[[rootPath]]view1" on-click="handleClick">View One</a>
        <a name="view2" href="[[rootPath]]view2" on-click="handleClick">View Two</a>
        <a name="view3" href="[[rootPath]]view3" on-click="handleClick">View Three</a>
      </iron-selector>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'application-side-bar',
      },
      selectedMenu: {
        type: String,
        notify: true,
        value: 'Hello'
      }
    };
  }
  handleClick(e) {
    console.log(e.target.name);
    this.selectedMenu = e.target.name;
  }
}

window.customElements.define('application-side-bar', ApplicationSideBar);