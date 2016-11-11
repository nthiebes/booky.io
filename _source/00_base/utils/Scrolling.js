/**
 * Scrolling helper
 * @class 00_base/utils/Scrolling
 *
 * @prop {boolean} [currentlySticky] Fixed
 */
class Scrolling {
    constructor(config) {
        /** @type {[type]} [description] */
        this.config = config;
        this.actions = {};

        this.addAction = this.addAction.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);

        this.config.window.addEventListener('scroll', this.onPageScroll);
    }

    onPageScroll() {
        const TOP = this.config.window.pageYOffset || this.config.document.documentElement.scrollTop,
            ACTIONS = this.actions;

        let item;

        for (item in ACTIONS) {
            if (ACTIONS.hasOwnProperty(item)) {
                let action = ACTIONS[item];

                if (TOP >= action.offset) {
                    if (!action.active) {
                        action.active = true;
                        action.isBelow.call(this, true);
                    }
                } else if (action.active) {
                    action.active = false;
                    action.isAbove.call(this, false);
                }
            
            }
        }
    }

    addAction(actionName, actionConfig) {
        this.actions[actionName] = actionConfig;
    }
}

export const scrolling = new Scrolling({
    'window': window,
    'document': document
});
