import { Octokit } from "@octokit/core";
import { Base64 } from 'js-base64';
import Trello from 'trello';
console.log('data')

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
      console.log('heufheufhuefhefhuefhu')
      return t.card('all')
      .then(async data => {
          return [{
              text: card.idShort
          }]
      })
      .catch(error => console.log('error hmm', error))
    }
});