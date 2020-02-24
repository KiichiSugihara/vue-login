// for Node.js
export default function authHeader() {
  // ローカルストレージからuserを取得
  let user = JSON.parse(localStorage.getItem('user'));
  // user と アクセストークンがあれば、x-access-tokenにアクセストークン入れる
  // API叩くときにheaderに入れて使う
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

// for Java
// export default function authHeader() {
//   let user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.accessToken) {
//     return { Authorization: 'Bearer ' + user.accessToken };
//   } else {
//     return {};
//   }
// }
