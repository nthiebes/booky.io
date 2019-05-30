// import { throttle } from '../throttle';

export class Scrolling {
  constructor() {
    this.actions = {};
    this.count = 0;

    this.registerAction = this.registerAction.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);
  }

  onPageScroll() {
    const TOP = window.pageYOffset || document.documentElement.scrollTop,
      ACTIONS = this.actions;

    let item;

    for (item in ACTIONS) {
      if (ACTIONS.hasOwnProperty(item)) {
        const action = ACTIONS[item];

        this.checkAndTriggerAction(TOP, action);
      }
    }
  }

  checkAndTriggerAction(TOP, action) {
    if (TOP >= action.offset) {
      if (!action.active) {
        action.active = true;
        action.isBelow.call(action.scope);
      }
    } else if (action.active) {
      action.active = false;
      action.isAbove.call(action.scope);
    }
  }

  registerAction(actionName, actionConfig) {
    if (this.count === 0) {
      window.addEventListener('scroll', this.onPageScroll);
    }

    this.count++;
    this.actions[actionName] = actionConfig;
  }

  removeAction(actionName) {
    delete this.actions[actionName];
    this.count--;

    if (this.count === 0) {
      window.removeEventListener('scroll', this.onPageScroll);
    }
  }

  updateStatus(actionName) {
    const TOP = window.pageYOffset || document.documentElement.scrollTop,
      ACTION = this.actions[actionName];

    if (TOP >= ACTION.offset) {
      ACTION.active = true;
      ACTION.isBelow.call(ACTION.scope);
    } else if (TOP < ACTION.offset) {
      ACTION.active = false;
      ACTION.isAbove.call(ACTION.scope);
    }
  }
}

export const scrolling = new Scrolling();
