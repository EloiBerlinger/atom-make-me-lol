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

        // Create close element
        this.close = document.createElement('span');
        this.close.classList.add('icon', 'icon-x');
        this.element.appendChild(this.close);
        this.close.addEventListener('click', () => {
            atom.commands.dispatch(this.close, 'atom-make-me-lol:toggle');
        });

        // Create title element
        this.title = document.createElement('h2');
        this.element.appendChild(this.title);

        // Create spinner element
        this.spinner = document.createElement('div');
        this.spinner.id = 'floatingCirclesG';
        this.spinner.innerHTML = '<div class="f_circleG" id="frotateG_01"></div><div class="f_circleG" id="frotateG_02"></div><div class="f_circleG" id="frotateG_03"></div><div class="f_circleG" id="frotateG_04"></div><div class="f_circleG" id="frotateG_05"></div><div class="f_circleG" id="frotateG_06"></div><div class="f_circleG" id="frotateG_07"></div><div class="f_circleG" id="frotateG_08"></div>';
        this.element.appendChild(this.spinner);

        // Create image element
        this.webview = document.createElement('webview');
        this.webview.autosize = 'on';
        this.webview.minwidth = '400';
        this.webview.minheight = '400';
        this.element.appendChild(this.webview);

        this.startLoadState();
    }

    // Tear down any state and detach
    destroy() {
        this.element.remove();
    }

    startLoadState() {
        this.title.innerHTML = 'Loading...';
        this.spinner.style.display = 'inline-block';
        this.webview.classList.add('hide');
    }

    endLoadState() {
        this.webview.classList.remove('hide');
        this.spinner.style.display = 'none';
    }

    getRandom() {
        this.startLoadState();

        const thumbnail = getRndThumbnail()
            .then(data => {
                console.log(data);
                // Update image
                this.webview.src = data.url;
                // Update title
                this.title.innerHTML = data.title;
		        this.endLoadState();
            });
    }
}
