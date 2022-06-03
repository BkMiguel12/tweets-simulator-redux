export const getLocalTweets = () => {
    const tweets = localStorage.getItem('tweets');
    if(tweets === null) return undefined;
    return JSON.parse(tweets);
}

export const setLocalTweets = (tweets) => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}