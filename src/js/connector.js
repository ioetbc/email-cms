import { Octokit } from "@octokit/core";
import { Base64 } from 'js-base64';
import Trello from 'trello';
console.log('data')
window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
      return t.card('all')
      .then(async data => {
          return [{
              text: card.idShort
          }]
      })
    }
});