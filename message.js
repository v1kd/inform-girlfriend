#!/usr/bin/env osascript -l JavaScript

/**
 * First argument - Text message
 * Second argument - Phone number
 * @param {Array} argv
 */
function run(argv) {
  var textMessage = argv[0];
  var phoneNum = argv[1];
  var messages = Application("Messages");
  var services = messages.services();
  for (var i in services) {
    var service = services[i];
    var name = service.name();

    if (name === 'SMS') {
      messages.send(textMessage, { to: service.buddies[phoneNum] });
    }
  }
}