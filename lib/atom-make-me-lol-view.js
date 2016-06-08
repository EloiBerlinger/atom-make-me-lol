'use babel';

import getRndThumbnail from './get-rnd-thumbnail';

export default class AtomMakeMeLolView {

    constructor() {
        // Create root element
        this.element = document.createElement('div');
        this.element.classList.add('atom-make-me-lol');

        this.modalPanel = atom.workspace.addModalPanel({
            item: this.element,
            visible: false
        });

        // Create title element
        this.title = document.createElement('h2');
        this.element.appendChild(this.title);

        // Create image element
        this.webview = document.createElement('webview');
		this.webview.autosize = 'on';
		this.webview.minwidth = '400';
		this.webview.minheight = '400';
        this.element.appendChild(this.webview);

        this.setLoadState();
    }

    // Tear down any state and detach
    destroy() {
        this.element.remove();
    }

    setLoadState() {
        this.title.innerHTML = 'Loading...';
        this.webview.src = 'loading.gif';
    }

    getRandom() {
        const thumbnail = getRndThumbnail()
            .then(data => {
                console.log(data)
                    // Update title
                this.title.innerHTML = data.title;
                // Update image
                this.webview.src = data.url;
            });
    }
}
