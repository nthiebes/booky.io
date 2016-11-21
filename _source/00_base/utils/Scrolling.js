/**
 * Scrolling helper
 *
 * @class Scrolling
 * @classdesc 00_base/utils/Scrolling
 *
 * @prop {object} config
 * @prop {object} config.window
 * @prop {object} config.document
 */
export class Scrolling {
    constructor(config) {
        this.config = config;
        this.actions = {};

        this.addAction = this.addAction.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);
    }

    onPageScroll() {
        const TOP = this.config.window.pageYOffset || this.config.document.documentElement.scrollTop,
            ACTIONS = this.actions;

        let item;

        for (item in ACTIONS) {
            if (ACTIONS.hasOwnProperty(item)) {
                const action = ACTIONS[item];

                if (TOP >= action.offset) {
                    if (!action.active) {
                        action.active = true;
                        action.isBelow.call(this);
                    }
                } else if (action.active) {
                    action.active = false;
                    action.isAbove.call(this);
                }
            
            }
        }
    }

    /**
     * @memberof Scrolling
     *
     * @param {string} actionName
     * @param {object} actionConfig
     */
    addAction(actionName, actionConfig) {
        if (JSON.stringify(this.actions).length === 2) {
            this.config.window.addEventListener('scroll', this.onPageScroll);
        }

        this.actions[actionName] = actionConfig;
    }

    /**
     * @memberof Scrolling
     *
     * @param {string} actionName
     */
    removeAction(actionName) {
        delete this.actions[actionName];

        if (JSON.stringify(this.actions).length === 2) {
            this.config.window.removeEventListener('scroll', this.onPageScroll);
        }
    }
}

export const scrolling = new Scrolling({
    'window': window,
    'document': document
});
