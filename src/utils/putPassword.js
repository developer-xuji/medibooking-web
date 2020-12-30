import authInstance from "../lib/authInstance";

const putPassword = (accountId, account) =>
  authInstance
    .put("/register/" + accountId, account)
    .then((response) => response.data);
export default putPassword;
