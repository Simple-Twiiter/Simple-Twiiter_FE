import axios from "axios";

const URI = {
  BASE_HTTP: process.env.REACT_APP_HTTP_URI,
  BASE_HTTPS: process.env.REACT_APP_HTTPS_URI,
};

const api = axios.create({
  baseURL: URI.BASE_HTTP,
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

// 요청 인터셉터 추가
api.interceptors.request.use(function (config) {
  // 요청 보내기 전에 수행할 일
  const auth = localStorage.getItem("AccessToken");
  config.headers.common["Authentication"] = auth;
  return config;
});

export const apis = {
  // auth : signup, login, logout
  signup: (email, username, password) =>
    api.comment("/api/signup", {
      email,
      username,
      password,
    }),
  login: (email, password) => api.comment("/api/login", { email, password }),
  logout: () => api.get("/api/logout"),

  // post : CRUD, like/unlike
  // CRUD

  // like, unlike
  like_post: (id) => {
    api.post(`/api/like/${id}`);
  },
  unlike_post: (id) => {
    api.post(`/api/unlike/${id}`);
  },

  // comment : CRUD
  create_comment: (id, content, hashtags) =>
    // TODO  create에 Blob 써보기
    api.comment(`/api/comment/${id}`, { content, hashtags }),
  get_comments: (postId, pageNum, pageLimit) =>
    api.get(
      `/api/comments?postId=${postId}&pageNum=${pageNum}&pageLimit=${pageLimit}`
    ),
  edit_comment: (id, content, hashtags) => {
    api.put(`/api/comment/${id}`, { content, hashtags });
  },
  delete_comment: (id) => {
    api.delete(`/api/comment/${id}`);
  },

  // search : search result
  get_search_result: (tag, pageNum, pageLimit) => {
    api.get(`/api/hashtag/${tag}&pageNum=${pageNum}&pageLimit=${pageLimit}`);
  },

  // rank : hashtag ranking
  get_rank: () => {
    api.get("api/hashtag/rank");
  },

  // profile : get info, posts, following, follower list
  get_profile_info: (username) => api.get(`/api/profile/info/${username}`),
  get_profile_posts: (username, pageNum, pageLimit) =>
    api.get(
      `/api/profile/posts?username=${username}&pageNum=${pageNum}&pageLimit=${pageLimit}`
    ),
  get_profile_following: (username, pageNum, pageLimit) =>
    api.get(
      `/api/profile/following?username=${username}pageNum=${pageNum}&pageLimit=${pageLimit}`
    ),
  get_profile_followers: (username, pageNum, pageLimit) =>
    api.get(
      `/api/profile/followers?username=${username}pageNum=${pageNum}&pageLimit=${pageLimit}`
    ),

  // follow : follow/unfollow
  follow_user: (username) => {
    api.post(`api/user/follow`, { username });
  },
  unfollow_user: (username) => {
    api.post(`api/user/unfollow`, { username });
  },
};
