import authInstance from "../lib/authInstance";

const putPassword = (accountId, account) =>
  authInstance
    .put("/register/" + accountId, account)
    .then((response) => console.log(response.data));
export default putPassword;
