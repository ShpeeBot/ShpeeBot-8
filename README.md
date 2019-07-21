# Shpee Discord Bot

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c21102ed40c24e7fa95cc7af770cac15)](https://app.codacy.com/app/LeoDoesThings/ShpeeBot?utm_source=github.com&utm_medium=referral&utm_content=DankZone/ShpeeBot&utm_campaign=Badge_Grade_Dashboard)

Shpee Discord bot made for the [DankZone Discord server](https://discordapp.com/invite/gwamp7n)

## It currently has these features:
  - Kicking users
  - Banning users
  - Ping command
  - Eval command
  - Purge
  - Say command (says what you tell it to say)
  - Stats
  - Stopping the bot using a command
  - Testing command (Testing, testing, 1 2 3)
  - Change settings command
  - Embed command (basic, using RichEmbed)
  - Deleted message logs
  - Invite link filter
  - Web Dashboard
  - Music Commands (Code from: https://github.com/iCrawl/Music-Bot)

### Installation
First of all, clone this repository.

This bot requires [Node.js](https://nodejs.org/) v8+ (and npm) to run.

Also, please make a channel for mod logs in your Discord server.

Once you have that done, edit the `config.js.example` file and then rename the file to `config.js`. Make sure the callback URL specified is in the format of `{{http|https}}{{domain_name}}/callback` (Examples: `https://dashoard.bot-website.com/callback` OR `http://dashboard.bot-website.com/callback` OR `http://localhost:33445/callback`). This should be the public URL (proxied URL (by something like Nginx) is recommended).

![Bot Application](https://i.imgur.com/sechKvg.png)

We recommend running this bot on [Glitch](https://glitch.com) as we have tested our bot there and confirmed that it runs there.

Glitch is a free app and site deploying service. We use this service personally and have recommended this to our friends that we don't have.

If you have never used Glitch before, you can follow [this guide](https://anidiots.guide/other-guides/hosting-on-glitch) on how to host a simple bot on Glitch.

Also if you tweak around with the code and run into problems, the [Glitch Forums](https://support.glitch.com/) is a great way to get help from Glitch staff and other community developers.

### Example Configuration

#### config.js

```javascript
/* eslint-disable */
var config = { // NOTE: DO NOT LEAVE ANYTHING BLANK
	// ALL settings are strings. Do NOT just use true or false, use these in strings such as 'true' or 'false'. This is due to how some code works when changing the settings
	ownerID: '123456789012345678', // Your ID here
	token: process.env.TOKEN, // Your bot token here
	status: 'online', // Bot status [online/idle/invisible/dnd]
	debug: 'false', // This is used to output some debug info if needed. The token will be in the console and other information could be in the console
	playingGame: '{{prefix}}help | {{guilds}} guilds | v{{version}}', // The game you want the bot to play. {{prefix}} is replaced with the default prefix below, {{guilds}} is replaced with the guild count and {{version}} is replaced with the bot version. Leave blank to disable
	purgeLogFormat: '\n Message ID: {{mID}} | Message Timestamp: {{mTS}} | Content: {{mC}} \n', // {{mID}}: Message ID; {{mTS}} Message Timestamp; {{mC}}: Message Content;
	eightBallResponses: ['Yes', 'No', 'Certainly', 'My sources say yes', 'Try again later', 'Without a doubt', 'Better not to tell you now'], // An array of responses for the 8ball command
  googleAPIToken: 'AI-241scsc', // Used for link shortener and music features. You need to have these APIs enabled.
  logTimeFormat: 'D MMM YYYY HH:mm:ss ZZ',
  musicEnabled: 'true',
	defaultSettings: {
		prefix: '.',
		modLogChannel: 'mod-log',
		modRole: 'Moderator',
		adminRole: 'Admin',
		welcomeChannel: 'general',
		welcomeMessage: 'Welcome {{user}}!',
		welcomeEnabled: 'false',
		inviteFilterEnabled: 'false',
		inviteWhitelist: ['discord-testers', 'discord-developers'], // This can be changed, these are just defaults as an example
		facepalms: 'false', // If enabled, the bot will reply with the facepalm emoji whenever a message contains 'facepalm'
		swearFilter: 'false',
		swearWords: ['fuck'], // An array of swear words. These should be lowercase. (of course, I have not included much for certain reasons...)
		logDeletes: 'true',
		logNewMember: 'true',
		logMemberLeave: 'true',
		logCommandUsage: 'true',
		logPurge: 'true',
		sendHelp: 'channel' // Available options: channel, dm
	},
	dashboard: {
		enabled: 'true', // This setting controls whether the dashboard is enabled or not.
		oauthSecret: process.env.SECRET, // The client secret from the Discord bot page
		secure: 'false', // HTTPS: 'true' for true, 'false' for false
		sessionSecret: process.env.SESSIONSECRET, // Go crazy on the keyboard here, this is used as a session secret
		domain: process.env.DOMAIN, // Domain name (with port if not running behind proxy running on port 80). Example: 'domain': 'dashboard.bot-website.com' OR 'domain': 'localhost:33445'
		port: '33445', // The port that it should run on
		invitePerm: '536079575',
		protectStats: 'false',
		borderedStats: 'false', // Controls whether stats in the dashboard should have a border or not
		legalTemplates: {
			contactEmail: 'support@website.com', // This email will be used in the legal page of the dashboard if someone needs to contact you for any reason regarding this page
			lastEdited: '18 November 2018' // Change this if you update the `TERMS.md` or `PRIVACY.md` files in `dashboard/public/`
		}
	}
};

module.exports = config;
```

In the config file above, the callbackURL would be set by the code to `https://dashboard.bot-website.com/callback`.

Also you may have noticed that some of these settings are set to `process.env`. This is because we do not put any of our sensitive info in the `config.js` file. 
Instead, we put it in a seperate `.env` file which tells GitHub to not to put out publicly in this repository.
You can of course disregard this security process and just replace it with your info. But if you care about your bot security, you can follow the example here:

```
TOKEN=
SESSIONSECRET=
SECRET=
DOMAIN=
GOOGLEAPI=
SERVER=
```

Obviously this is pretty self explanatory but we'll give you a list of what to do here.

* `TOKEN` - Your bot token
* `SESSIONSECRET` - Just go crazy on the keyboard, this is like your bot password.
* `SECRET` - Your bot "secret"
* `DOMAIN` - Your dashboard domain, you can leave this blank if you have disabled the dashboard in the `config.js` file.
* `GOOGLEAPI` - Your Google API code for music and link shortening
* `SERVER` - Your server name here

For a full guide on how to set up the bot, see our [wiki documentation](https://github.com/DankZone/ShpeeBot/wiki).

**It is recommended to run the dashboard with a proxy (like Nginx)**

#### Nginx Configuration

```
server {
    listen 80;

    server_name dashboard.bot-website.com;

    location / {
        proxy_pass http://127.0.0.1:33445;
    }
}
```

After that, you can install the dependencies and start the bot

**You can use the command line**
```sh
$ cd DiscordBot
$ npm install
$ npm start
```

**NOTE:** Running the bot with a process manager (like PM2) is recommended.

>This bot must be run on a Discord bot account. Do __NOT__ try to run this on a normal user account. This is against the Discord Terms of Service.

>Also, do __NOT__ play with the `eval` or `exex` command. You have been warned.

## Changes to the Code

You may change code if needed under the following conditions:

For the dashboard, you may change the theme, wording, design, links, etc. however I will not accept any bug reports coming from this. You will also agree to **not remove the copyright notice in the footer. You may add your name here, however, you must keep the original wording used**.

**ALL** copyright notices and credits **must** be kept as is, not edited in any way (except for adding your own name) and not removed.

## Contributing

Want to contribute?

Shpee is written in Discord.js. If you want to add a feature or work on the code, feel free make a pull request. 
We review all pull requests even if we don't reply to them.

## Credits

- Bot based on NdT3Development's "[DiscordBot](https://github.com/An-Idiots-Guide/guidebot)".
- Made using [Discord.js](https://github.com/hydrabolt/discord.js).
- The music part of the bot is based on [this bot](https://github.com/iCrawl/Music-Bot).

## Privacy:

Please read the `PRIVACY.md` file.

## License:

Please read the `LICENSE` file