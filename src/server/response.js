const RESP = {
  // 로그인 APIS
  LOGIN_SUCCESS: {
    result: true,
    data: {
      username: "zintest1",
      imageUrl: "Server-pang-1660734640405.jpg",
    },
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aW50ZXN0MSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2MDczNjQ0Nn0.xlE8yYp6tCms0aBfAe7DG0O4-GL5IlaaEozJBucKRto",
      refreshToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjEzMzk0NDZ9.NkkZ2heZ8pTyuvVRwqf7j4ktBV4_TFuhU9DLb8W_kiU",
    },
    message: "로그인 성공",
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

  //POST_APIS
  ADD_POST_SUCCESS: {
    message: "게시글 등록에 성공했습니다!",
    result: true,
    data: {
      member: {
        username: "crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      id: 4,
      title: "게시글 테스트 등록 성공",
      content: "게시글 테스트 등록 성공",
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
      isMine: true,
      isLike: false,
      isFollow: false,
      createdAt: "YYYY-MM-DD",
      modifiedAt: "YYYY-MM-DD",
    },
  },

  ADD_POST_FAIL: {
    message: "게시글 등록에 실패했습니다!",
    result: false,
    data: null,
  },

  GET_POSTS_SUCCESS: {
    message: "게시글 리스트 가져오기에 성공했습니다",
    result: true,
    data: [
      {
        member: {
          username: "crystal",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        id: 1,
        title: "게시글1",
        content: "게시글 등록1",
        imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
        isMine: true,
        isLike: false,
        isFollow: false,
        createdAt: "YYYY-MM-DD",
        modifiedAt: "YYYY-MM-DD",
      },
      {
        member: {
          username: "박용원",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        id: 2,
        title: "게시글2",
        content: "게시글 등록2",
        imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
        isMine: false,
        isLike: false,
        isFollow: false,
        createdAt: "YYYY-MM-DD",
        modifiedAt: "YYYY-MM-DD",
      },
      {
        member: {
          username: "crystal",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        id: 3,
        title: "게시글3",
        content: "게시글 등록3",
        imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
        isMine: true,
        isLike: false,
        isFollow: false,
        createdAt: "YYYY-MM-DD",
        modifiedAt: "YYYY-MM-DD",
      },
    ],
  },

  GET_POSTS_FAIL: {
    message: "게시글 리스트 가져오기에 실패했습니다",
    result: false,
    data: null,
  },

  GET_POST_SUCCESS: {
    message: "요청에 성공했습니다",
    result: true,
    data: {
      member: {
        username: "crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      id: 1,
      title: "디테일 페이지",
      content: "디테일 페이지",
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
      isMine: true,
      isLike: false,
      isFollow: false,
      createdAt: "YYYY-MM-DD",
      modifiedAt: "YYYY-MM-DD",
    },
  },

  DELETE_POST_FAIL: {
    message: "요청에 실패했습니다.",
    result: false,
    data: null,
  },

  DELETE_POST_SUCCESS: {
    message: "게시글 삭제에 성공했습니다",
    result: true,
    data: null,
  },

  DELETE_POST_FAIL: {
    message: "게시글 삭제에 실패했습니다",
    result: false,
    data: null,
  },

  UPDATE_POST_SUCCESS: {
    message: "게시글 수정에 성공했습니다!",
    result: true,
    data: {
      member: {
        username: "crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      id: 1,
      title: "게시글 수정",
      content: "게시글 수정",
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
      isMine: true,
      isLike: false,
      isFollow: false,
      createdAt: "YYYY-MM-DD",
      modifiedAt: "YYYY-MM-DD",
    },
  },

  UPDATE_POST_FAIL: {
    message: "게시글 삭제에 실패했습니다",
    result: false,
    data: null,
  },

  // COMMENT APIS
  ADD_COMMENT_SUCCESS: {
    result: true,
    data: {
      id: 1,
      member: {
        username: "Crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
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
      id: 1,
      member: {
        username: "Crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      createdAt: "YYYY-MM-DD",
      modifiedAt: "YYYY-MM-DD",
      contents: "댓글댓글댓글댓글",
      isMine: "true",
      imageUrl:
        "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    },
    message: "댓글 수정 성공",
  },

  UPDATE_COMMENT_SUCCESS2: {
    result: true,
    data: {
      id: 2,
      member: {
        username: "Crystal",
        userImg:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      createdAt: "YYYY-MM-DD",
      modifiedAt: "YYYY-MM-DD",
      contents: "댓글2댓글2댓글2댓글",
      isMine: "true",
      imageUrl:
        "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
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
        id: 1,
        member: {
          username: "Crystal",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        createdAt: "YYYY-MM-DD",
        modifiedAt: "YYYY-MM-DD",
        contents: "댓글리스트1",
        isMine: true,
        imageUrl:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        isLike: true,
        isFollow: false,
      },
      {
        id: 2,
        member: {
          username: "Crystal",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        createdAt: "YYYY-MM-DD hh:mm",
        modifiedAt: "YYYY-MM-DD hh:mm",
        contents: "댓글리스트2",
        isMine: true,
        imageUrl:
          "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      },
      {
        id: 3,
        member: {
          username: "park",
          userImg:
            "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
        },
        createdAt: "YYYY-MM-DD hh:mm",
        modifiedAt: "YYYY-MM-DD hh:mm",
        contents: "댓글리스트3",
        isMine: false,
        imageUrl:
          "data:image/jpeg;base64,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",
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
  GET_FOLLOWERS_SUCCESS: {
    result: true,
    data: [
      {
        username: "ParkYongWon",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimSuJeong",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimSeongHo",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimMinGyu",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "JeonTeaHoon",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
    ],
    message: null,
  },
  GET_FOLLOWERS_FAIL: { result: true, data: null, message: null },
  GET_FOLLOWINGS_SUCCESS: {
    result: true,
    data: [
      {
        username: "ParkYongWon",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimSuJeong",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimSeongHo",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "KimMinGyu",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
      {
        username: "JeonTeaHoon",
        imgUrl:
          "https://img.insight.co.kr/static/2020/07/15/700/2n2y4q9075jkn47sj3t9.jpg",
      },
    ],
    message: null,
  },
  GET_FOLLOWINGS_FAIL: { result: true, data: null, message: null },
  GET_USER_PROFILE_SUCCESS: {
    result: true,
    data: { postCount: 2, followingCount: 5, followerCount: 5 },
    message: null,
  },
  GET_USER_PROFILE_FAIL: { result: true, data: null, message: null },

  LIKE_SUCCESS: {
    result: true,
    data: true,
    message: "게시글 좋아요 성공",
  },
  UNLIKE_SUCCESS: {
    result: true,
    data: false,
    message: "게시글 좋아요 취소",
  },
};

export default RESP;
