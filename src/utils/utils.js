import axios from "axios";

// Routes
const newsApi = axios.create({
  baseURL: "https://asim-news-forum.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic, sort_by, order_by, p) => {
  return newsApi
    .get("/articles", { params: { topic, sort_by, order_by, p } })
    .then((res) => {
      return res.data.articles;
    });
};
export const getUser = (username) => {
  return newsApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchComponentsVotesIncrease = (component_name, component_id) => {
  return newsApi.patch(`/${component_name}/${component_id}`, { inc_votes: 1 });
};
export const patchComponentsVotesDecrease = (component_name, component_id) => {
  return newsApi.patch(`/${component_name}/${component_id}`, { inc_votes: -1 });
};

export const deleteCommentById = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
export const getArticlesCount = (topic) => {
  return newsApi
    .get(`/articles`, { params: { limit: 1844674407370955150, topic } })
    .then((res) => {
      return res.data.articles.length;
    });
};

export const postCommentById = (article_id, user, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: user,
      body: comment,
    })
    .then((res) => {
      return res.data.comment;
    });
};
