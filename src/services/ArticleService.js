import {get, post, all} from "../api/Article";
import {useAsync} from "../helpers/useAsync";

const useArticle = id => useAsync(get, true, id);

const usePostArticle = () => useAsync(post, false);

const useAllArticles = () => useAsync(all);

export {useArticle, usePostArticle, useAllArticles};