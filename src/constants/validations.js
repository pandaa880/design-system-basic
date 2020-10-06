const emailValidation = {
  regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  message: "Enter valid email address",
};

const numberValidation = {
  regex: /^[0-9]*$/,
  message: "Only numbers are allowed",
};

export const validateEmail = (input) => {
  const isMatch = input.match(emailValidation.regex);

  if (!isMatch) {
    return emailValidation.message;
  }

  return null;
};

export const validateNumber = (input) => {
  const isMatch = input.match(numberValidation.regex);

  if (!isMatch) {
    return numberValidation.message;
  }

  return null;
};
