const { IncomingWebhook } = require("@slack/webhook");

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)


const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        })
        console.log('Getting the LOG', message)
      // do anything - emit to websocket? send message somewhere? log to cloud?
    },
  };


  module.exports = {loggerStream}