console.log('hhit')
window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {

      return t.card('all')
      .then(data => {
          console.log('data', data)
          return [{
              text: card.idShort
          }]
      })
    }
});