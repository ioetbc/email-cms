import { Octokit } from "@octokit/core";
import { Base64 } from 'js-base64';
import Trello from 'trello';

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
      return t.card('all')
      .then(async data => {
          console.log('data')
          return [{
              text: card.idShort
          }]
      })
    }
});