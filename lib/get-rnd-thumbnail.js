'use babel';

//import reddit from './api/reddit';
import giphy from './api/giphy';
import ohMaGif from './api/oh-ma-gif';
import reactionGifs from './api/reaction-gifs';

const apis = [
    //reddit,
    giphy,
    ohMaGif,
    reactionGifs
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
