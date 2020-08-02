import { Octokit } from "@octokit/core";
import { Base64 } from 'js-base64';
import Trello from 'trello';
console.log('data')

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
      console.log('heufheufhuefhefhuefhu')
      const cards =  t.card('all');

      console.log('cards????????', cards)

      // .then(async data => {
      //   console.log('just the data', data)
      //     return []
      // })
      // .catch(error => console.log('error hmm', error))
    }
});