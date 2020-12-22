import processData from "../apis/processData";
import getParameterList from "./getParameterList";

const getUserInfo = () => {
  const accountId = localStorage.getItem("ACCOUNT_ID");
  const role = localStorage.getItem("ROLE");
  const url = role === "ROLE_PATIENT" ? "/patients" : "/doctors";
  const parametersList = getParameterList({
    name: "accountId",
    value: accountId,
  });
  processData(url, "get", parametersList, null).then((response) =>
    console.log(response)
  );
};
export default getUserInfo;
