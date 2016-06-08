'use babel';

import request from 'request-promise';

export default function getRndThumbnail() {
    return request('http://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC')
        .then(data => {
            const parsed = JSON.parse(data).data;
	        const random = parsed[Math.floor(Math.random() * parsed.length)];

            return {
                title: random.user.display_name,
                url: random.embed_url
            };
        });
}
