/**
 * Scrolling helper
 *
 * @namespace utils/Scrolling
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
        this.count = 0;

        this.registerAction = this.registerAction.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);
    }

    onPageScroll() {
        const TOP = this.config.window.pageYOffset || this.config.document.documentElement.scrollTop,
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

    /**
     * @memberof utils/Scrolling
     *
     * @param {string} actionName
     * @param {object} actionConfig
     * @param {object} actionConfig.offset
     * @param {object} actionConfig.scope
     * @param {object} actionConfig.isAbove
     * @param {object} actionConfig.isBelow
     */
    registerAction(actionName, actionConfig) {
        const lengthNoActions = 0;

        if (this.count === lengthNoActions) {
            this.config.window.addEventListener('scroll', this.onPageScroll);
        }

        this.count++;
        this.actions[actionName] = actionConfig;
    }

    /**
     * @memberof utils/Scrolling
     *
     * @param {string} actionName
     */
    removeAction(actionName) {
        const lengthNoActions = 0;
        
        delete this.actions[actionName];
        this.count--;

        if (this.count === lengthNoActions) {
            this.config.window.removeEventListener('scroll', this.onPageScroll);
        }
    }

    /**
     * @memberof utils/Scrolling
     *
     * @param {string} actionName
     */
    updateStatus(actionName) {
        const TOP = this.config.window.pageYOffset || this.config.document.documentElement.scrollTop,
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

export const scrolling = new Scrolling({
    'window': window,
    'document': document
});
