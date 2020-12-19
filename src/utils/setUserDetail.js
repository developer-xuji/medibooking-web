import fetchData from "../apis/fetchData";

const setUserDetail = (role, account_id) => {
  const url = (role === "ROLE_DOCTOR" ? "/doctors" : "/patients") + "/search";
  const param = {
    name: "accountId",
    value: account_id,
  };
  fetchData(url, param).then((response) => {
    localStorage.setItem("USER_ID", response.id);
  });
};

export default setUserDetail;
