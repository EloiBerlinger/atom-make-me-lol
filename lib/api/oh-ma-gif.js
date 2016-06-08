'use babel';

import request from 'request-promise';

export default function getRndThumbnail() {
    return request('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feeds.feedburner.com/OhMaGif')
        .then(data => {
            const parsed = JSON.parse(data).responseData.feed.entries;
            const random = parsed[Math.floor(Math.random() * parsed.length)];
            const url = random.content.match(/\<img\ssrc\=[^"]*"([^"]+)"/, '$1')[1];

            return {
                title: random.title,
                url
            };
        });
}
