/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var GRAY_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg";
var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

TrelloPowerUp.initialize({
  "attachment-sections": function (t, options) {

      var claimed = options.entries.filter(function (attachment) {
        return attachment.url.indexOf('geojson') > -1;
    });


    return [
      {
        id: "Yellowstone", // optional if you aren't using a function for the title
        claimed: claimed,
        icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
        title: "Geojson map",
        content: {
            type: 'iframe',
            url: t.signUrl('/geojson.html', {
              geoJSONSourceURL: claimed[0].url
            }),
            height: 600
        }
      },
    ];
  },
});