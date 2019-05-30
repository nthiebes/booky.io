export class Scrolling {
  constructor() {
    this.actions = {};
    this.count = 0;

    this.registerAction = this.registerAction.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
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
      this.intervalID = setInterval(this.handleInterval, 500);
    }

    this.count++;
    this.actions[actionName] = actionConfig;
  }

  removeAction(actionName) {
    delete this.actions[actionName];
    this.count--;

    if (this.count === 0) {
      // Remove and reset interval/animationFrame
      clearInterval(this.intervalID);
      cancelAnimationFrame(this.requestID);
      this.requestID = null;
      this.intervalID = null;
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

  handleInterval() {
    // Interval is only used to throttle animation frame
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.onPageScroll);
  }
}

export const scrolling = new Scrolling();
