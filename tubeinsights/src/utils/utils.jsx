export const extractUrls = (text) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = text.match(urlRegex);
    return urls || [];
};