'use strict';

module.exports = {
  before: function (browser) {
    browser
    .url(browser.globals.base_url)
    .waitForElementVisible('body', 2000)
    .assert.title('Test using Nigthwatch.js')
  },
  'Demo fill input': function (browser) {
    browser
    .setValue('input[name=firstname', 'andres')
    .setValue('input[name=surname]', 'bedoya')
    .setValue('input[name=email]', 'andres@gmail.com')
    .setValue('input[name=bday]', '11/09/2015')
    .click('#radio-choice-1')
    .click('#select-choice')
    .click('#select-choice option[value=Choice3]')
    .setValue('#textarea', 'Lorem ipsum dorem lorem')
    .pause(5000)
    .end();
  }
};