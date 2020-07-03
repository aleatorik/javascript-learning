class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'daniel' && password === 'dev') ||
          (id === 'js' && password === 'javascript')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'daniel') {
          resolve({ name: 'daniel', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}
/*
//아래는 promise 방식

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
*/

//아래는 async & awiat 방식

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function getUserwithRole(id, password) {
  const loginUser = await userStorage.loginUser(id, password);
  const user = await userStorage.getRoles(loginUser);
  return alert(`Hello ${user.name}, you have a ${user.role} role`);
}
getUserwithRole(id, password) //
  .catch(console.log)
  .then(console.log);

/*
//아래는 parmeter 누락(line 55, line 66)으로 인한 결과 미출력 코드 

async function loginGetRoles() {
  try {
    const loginuserPromise = userStorage.loginuser(id, password);
    const getRolespromise = userStorage.getRoles(user);
    const username = await loginuserPromise;
    const userWithRole = await getRolespromise;
    return `Hello ${username}, you have a ${userWithRole.role} role`;
  } catch (error) {
    return error;
  }
}
loginGetRoles().then(console.log);

*/

//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
//💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠💠
/*
//아래는 콜백지옥

  userStorage.loginuser(
    id,
    password,
    (user) => {
      userStorage.getRoles(
        user,
        (userWithRole) => {
          alert(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
        },
        (error) => {
          console.log(error);
        }
      );
    },
    (error) => {
      console.log(error);
    }
  );
  */
