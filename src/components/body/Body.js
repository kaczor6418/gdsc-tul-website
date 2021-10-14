import { style } from './Body.style.js';
import { KKWebComponent } from "../KKWebComponent.js";
import { GDSCDataService } from '../../services/GDSCEvents.js';
import { Events } from '../events/Events.js';

const template = `
  <main>
    <${Events.TAG}></${Events.TAG}>
  </main>
`;

export class Body extends KKWebComponent {
  static TAG = `kk-body`;

  eventsWrapper = this.shadowRoot.querySelector(Events.TAG);
  gdscService;

  constructor() {
    super(template, style);
  }

  async initialize(gdscClubRootUrl) {
    this.gdscService = new GDSCDataService(gdscClubRootUrl);
    await this.gdscService.initializeData();
    this.eventsWrapper.setEvents(this.gdscService.getUpcommingEvents(), this.gdscService.getPastEvents());
  }
}

customElements.define(Body.TAG, Body);
