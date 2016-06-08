'use babel';

import reddit from './api/reddit';
import giphy from './api/giphy';

const apis = [
    reddit,
	giphy
];

export default function getRndThumbnail() {
    const apiFn = apis[Math.floor(Math.random() * apis.length)];

    return apiFn().catch(err => {
        // Show error notification
        atom.notifications.addError(err, {
            dismissable: true
        });
    });
}
