export const post = (url, body = {}) => {
    const json = JSON.stringify(body);

    return fetch('/api' + url, {
        method: 'POST',
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json())
};

export const get = url => (
    fetch('/api' + url, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json())
);

