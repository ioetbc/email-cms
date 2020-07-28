import dotenv from 'dotenv';
import { Octokit } from "@octokit/core";
import { Base64 } from 'js-base64';
import Trello from 'trello';
dotenv.config()

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
      return t.card('all')
      .then(async data => {
          console.log('data', data)


          // 1. if template doesnt exist create the templates as card in trello
          const octokit = new Octokit({ auth: process.env.GITHUB_AUTH });
          const fileContent = await octokit.request('GET /repos/ioetbc/email-trello-cms/contents/email.html', {
            owner: 'ioetbc',
            repo: 'email-trello-cms',
            path: 'email.html',
            type: 'public'
          });
          console.log('fileContent', fileContent)
        //   const emailHtml = Base64.decode(fileContent.data.content)
        //   // convert html to markdown
        //   const turndownService = new window.TurndownService();
        //   const emailMarkdown = turndownService.turndown(emailHtml);
        //   // console.log('emailMarkdown', emailMarkdown)
        //   const JustTheEmailcontent = emailMarkdown.split('Hi there,')[1];

        //   console.log('just the content', JustTheEmailcontent);

          

          // 2. create a pull request with the data from the card









          return [{
              text: card.idShort
          }]
      })
    }
});