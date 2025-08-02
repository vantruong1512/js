let isError = false;

function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isError) {
        resolve({ id: 1, name: "truong", email: "truong@gmail.com" });
      } else {
        reject("khong the thong tin nguoi dung");
      }
    }, 2000);
  });
}

async function getUserProfile() {
  try {
    const user = await fetchUserProfile();
    console.log("user:", user);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

getUserProfile();
