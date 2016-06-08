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
	        const random = parsed[Math.floor(Math.random() * parsed.length)];

            return {
                title: random.data.title,
                url: random.data.url
            };
        });
}
