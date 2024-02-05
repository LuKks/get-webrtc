module.exports = require('werift')

// Temporal patch until leak fix gets merged
// https://github.com/shinyoshiaki/werift-webrtc/pull/365

const { SCTP } = require('./node_modules/werift/lib/sctp/src/sctp.js')

const stop = SCTP.prototype.stop
const setState = SCTP.prototype.setState

SCTP.prototype.stop = async function () {
  await stop.call(this)

  clearTimeout(this.timerReconfigHandle)
}

SCTP.prototype.setState = function (state) {
  setState.call(this, state)

  if (state === 1) this.timerReconfigCancel()
}
