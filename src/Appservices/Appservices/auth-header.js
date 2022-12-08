export default function AuthHeader() {
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";

  if (currentUser && currentUser.access_token) {
    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentUser.access_token}`,
    };
  } else {
    return {};
  }
}
