'use babel';

import request from 'request-promise';

const redditUrls = [
    'https://www.reddit.com/r/Funnypics/.json',
    'https://www.reddit.com/r/funnygifs/.json'
];

export default function getRndThumbnail() {
    const url = redditUrls[Math.floor(Math.random() * redditUrls.length)];

    return request(url)
        .then(data => {
            const parsed = JSON.parse(data).data.children;
            const l = parsed.length;
            const n = Math.floor(Math.random() * (l - 1)) + 1;

            return {
                title: parsed[n].data.title,
                url: parsed[n].data.url
            };
        })
        .catch(err => {
            // Show error notification
            atom.notifications.addError(err, {
                dismissable: true
            });
        });
}
