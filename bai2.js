function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        resolve({ token: "abcxyz", userId: 1 });
      } else {
        reject("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    }, 1500);
  });
}

function getPosts(userId, token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "abcxyz" && userId === 123) {
        resolve(["Post 1", "Post 2", "Post 3"]);
      } else {
        reject("Token hoac user khong hơp le");
      }
    }, 2000);
  });
}

async function processLoginAndFetchPosts(username, password) {
  try {
    const loginResult = await loginUser(username, password);
    console.log("Đăng nhập thành công! UserID:", loginResult.userId);

    const posts = await getPosts(loginResult.userId, loginResult.token);
    console.log("Danh sách bài viết:", posts);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

processLoginAndFetchPosts("user", "pass");
