import validator from "validator";

const Fields = [
  {
    key: "email",
    label: "Email",
    type: "text",
    placeholder: "Email address",
    validations: [
      {
        message: "Please enter you email address",
        validator: (value) => !validator.isEmpty(value),
      },
    ],
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    validations: [
      {
        message: "Please enter you password",
        validator: (value) => !validator.isEmpty(value),
      },
    ],
  },
];

export default Fields;
