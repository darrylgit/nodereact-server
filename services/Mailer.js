const sendgrid = require("sendgrid");
const helper = sengrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {}
