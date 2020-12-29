import authInstance from "../../lib/authInstance";
import addPatient from "../../utils/addPatient";
import encodedPassword from "../../utils/encodePassword";
import Login from "../logIn";

const signUp = (data) => {
  const { username, password, firstName, lastName, gender, age, email } = data;
  console.log(password);
  const account = {
    username: username,
    encodedPassword: encodedPassword(password),
  };

  return authInstance.post("/register", account).then((response) => {
    if (response.data.id) {
      const accountId = response.data.id;
      return Login({ username: username, password: password }).then(() => {
        const patient = {
          accountId: accountId,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          age: age,
          email: email,
        };
        console.log("PARIENT: ", patient);
        return addPatient(patient);
      });
    }
  });
};

export default signUp;
