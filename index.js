const wifiName = require('wifi-name')
const shell = require('shelljs')
const config = JSON.parse(require('fs').readFileSync('config.json', 'utf8'))
const randomTextMsg = config.random_text_messages[
  Math.floor(Math.random() * config.random_text_messages.length)
]

wifiName()
  .then(name => config.comapany_wifi_names.includes(name))
  .then(isAtWork => isAtWork ? 
    shell.exec(`./message.js "${randomTextMsg}" "${config.girl_friend_contact_numbers[0]}"`) :
    null
  )
  .catch(e => null /*Ignore*/);
