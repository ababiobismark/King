"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/betingrich/king';
  const img = 'https://telegra.ph/file/ee29736dc8aa587cdf145.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝑯𝒆𝒍𝒍𝒐 𝑴𝒚 𝒖𝒔𝒆𝒓 𝑻𝒉𝒊𝒔 𝒊𝒔* *𝑩𝑼𝑮𝑨𝑻𝑻𝑰.*\n 𝒈𝒆𝒕 𝒔𝒆𝒔𝒔𝒊𝒐𝒏 𝒊𝒅 *𝒐𝒓*, *𝒑𝒂𝒓𝒊𝒏𝒈 𝑪𝒐𝒅𝒆*  https://joelsession1-4a8c04ad2935.herokuapp.com/pair/

🕷️ *𝑹𝒆𝒑𝒐𝒔𝒊𝒕𝒐𝒓𝒚:* ${data.html_url}
🕷️ *𝑺𝒕𝒂𝒓𝒔:* ${repoInfo.stars}
🕷️ *𝑭𝒐𝒓𝒌𝒔:* ${repoInfo.forks}
🕷️ *𝑹𝒆𝒍𝒆𝒂𝒔𝒆 𝑫𝒂𝒕𝒆:* ${releaseDate}
🕷️ *𝑼𝒑𝒅𝒂𝒕𝒆 𝑶𝒏:* ${repoInfo.lastUpdate}
🕷️ *𝑶𝒘𝒏𝒆𝒓:* *𝑲𝑰𝑵𝑮 𝑴𝑨𝑹𝑰𝑺𝑬𝑳*
__________________________________
            *𝑩𝑼𝑮𝑨𝑻𝑻𝑰 𝑪𝑹𝑬𝑨𝑻𝑰𝑶𝑵*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
