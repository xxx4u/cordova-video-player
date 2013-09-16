cordova.define("cordova/plugin/videoplayer",
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var VideoPlayer = function () {};

    VideoPlayer.prototype.play = function(url) {
      exec(null, null, "VideoPlayer", "playVideo", [url]);
    };

    var videoPlayer = new VideoPlayer();
    module.exports = videoPlayer;
});

if (!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.videoPlayer) {
  window.plugins.videoPlayer = cordova.require("cordova/plugin/videoplayer");
}