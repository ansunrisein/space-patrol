import {get as getRequest, post as postRequest} from "../helpers/client";

const get = id => getRequest(`/article/${id}`);

const post = article => postRequest('/article', article);

const all = () => getRequest('/articles');

export {get, post, all};