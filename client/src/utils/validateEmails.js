const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  let emailsArray = emails.split(",").map(email => email.trim());

  if (emailsArray.slice(-1)[0] === "") {
    emailsArray.pop();
  }

  const invalidEmails = emailsArray.filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
