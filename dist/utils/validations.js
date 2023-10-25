"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidPhoneNumber = exports.isValidEmail = void 0;
var isValidPhoneNumber = exports.isValidPhoneNumber = function isValidPhoneNumber(phoneNumber) {
  var phoneRegex = /^(?:(\d{2}-\d{2}-\d{2}-\d{2}-\d{2})|(\d{10})|(\+\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})|(\d{3}-\d{3}-\d{4}))$/;
  return phoneRegex.test(phoneNumber);
};
// Utilisez une expression régulière pour valider plusieurs formats de numéros de téléphone
// 06-45-12-41-42 (format français)
// 1234567890 (format américain sans tirets)
// +33 6 45 12 41 42 (format international avec indicatif de pays)
// 123-456-7890 (format américain avec tirets)

var isValidEmail = exports.isValidEmail = function isValidEmail(email) {
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};