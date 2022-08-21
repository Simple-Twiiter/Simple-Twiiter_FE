const RESP = {
  // 로그인 APIS
  LOGIN_SUCCESS: {
    result: true,
    data: {
      account: "zintest1",
      nickname: "nickname",
      imageUrl: "Server-pang-1660734640405.jpg",
    },
    headers: {
      accessToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aW50ZXN0MSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2MDczNjQ0Nn0.xlE8yYp6tCms0aBfAe7DG0O4-GL5IlaaEozJBucKRto",
      refreshToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjEzMzk0NDZ9.NkkZ2heZ8pTyuvVRwqf7j4ktBV4_TFuhU9DLb8W_kiU",
    },
    message: "로그인 성공",
    error: null,
  },
  LOGIN_FAIL: {
    result: false,
    data: null,
    message: "로그인 실패",
  },
  // 로그아웃 APIS
  LOGOUT_SUCCESS: {
    result: true,
    data: null,
    message: "로그아웃 성공",
  },
  LOGOUT_FAIL: {
    result: false,
    data: null,
    message: "로그아웃 실패",
  },
  // 회원가입 APIS
  SIGN_UP_SUCCESS: {
    result: true,
    data: null,
    message: "회원가입 성공",
  },
  SIGN_UP_FAIL: {
    result: false,
    data: null,
    message: "회원가입 실패",
  },

  // COMMENT APIS
  ADD_COMMENT_SUCCESS: {
    result: true,
    data: {
      username: "Crystal",
      createdAt: "YYYY-MM-DD hh:mm",
      modifiedAt: "YYYY-MM-DD hh:mm",
      contents: "댓글댓글댓글댓글",
      isMine: "true",
    },
    message: "댓글 작성 성공",
  },

  ADD_COMMENT_FAIL: {
    result: false,
    data: null,
    message: "요청이 실패했습니다.",
  },

  UPDATE_COMMENT_SUCCESS: {
    result: true,
    data: {
      username: "Crystal",
      createdAt: "YYYY-MM-DD hh:mm",
      modifiedAt: "YYYY-MM-DD hh:mm",
      contents: "댓글댓글댓글댓글",
      isMine: "true",
    },
    message: "댓글 수정 성공",
  },

  UPDATE_COMMENT_FAIL: {
    result: false,
    data: null,
    message: "요청이 실패했습니다.",
  },

  GET_COMMENT_LIST_SUCCESS: {
    message: "",
    result: true,
    data: [
      {
        username: "Crystal",
        createdAt: "YYYY-MM-DD hh:mm",
        modifiedAt: "YYYY-MM-DD hh:mm",
        contents: "댓글리스트1",
        isMine: true,
      },
      {
        username: "Kim",
        createdAt: "YYYY-MM-DD hh:mm",
        modifiedAt: "YYYY-MM-DD hh:mm",
        contents: "댓글리스트2",
        isMine: false,
      },
      {
        username: "park",
        createdAt: "YYYY-MM-DD hh:mm",
        modifiedAt: "YYYY-MM-DD hh:mm",
        contents: "댓글리스트3",
        isMine: false,
      },
    ],
  },
  IMAGE_UPLOAD_SUCCESS: {
    result: true,
    data: {
      imgUrl:
        "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
    },
    message: "이미지 업로드 성공",
  },
};

export default RESP;
