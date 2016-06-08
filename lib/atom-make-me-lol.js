'use babel';

import AtomMakeMeLolView from './atom-make-me-lol-view';
import {
    CompositeDisposable
} from 'atom';

export default {

    atomMakeMeLolView: null,
    modalPanel: null,
    subscriptions: null,

    activate() {
        this.atomMakeMeLolView = new AtomMakeMeLolView();
        this.modalPanel = this.atomMakeMeLolView.modalPanel;

        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'atom-make-me-lol:toggle': () => this.toggle()
        }));
    },

    deactivate() {
        this.modalPanel.destroy();
        this.subscriptions.dispose();
        this.atomMakeMeLolView.destroy();
    },

    toggle() {
        if (this.modalPanel.isVisible()) {
            this.modalPanel.hide();
        } else {
            this.atomMakeMeLolView.getRandom();
            this.modalPanel.show();
        }
    }

};
