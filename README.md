# New Year Countdown Bot - **Now using slash commands!**
DiscordJS bot that counts down until the new year starts!

### Invite a 24/7 countdown bot into your own server using the following link -
https://discord.com/api/oauth2/authorize?client_id=925547105098006619&permissions=2147552256&scope=bot%20applications.commands

### Commands:
- /countdown

### Or, selfhost your own countdown bot!

## How to install + set up the bot:
- Clone repository. The bot's code can be found within the /srv/ folder.
  ```
  git clone https://github.com/Joshwgaming/New-Year-Countdown-Bot
  ```
- Configure the bot in `config.json`:
  ```
  {
    "botToken": "bot token",
    "prefix": "!",
    "guildId": "primary guild id",
    "clientId": "client id",
    "authorID": "your id",
    "activityMessage": "/countdown'"
  }
  ```
- Install the required npm modules:
  ```
  npm install
  ```
- Start your bot:
  ```
  node index.js
  ```
- Once started, you should see `... successfully logged in.` in your terminal.
- Use !countdown to see how long until the new year!
