---
id: optionalfeaturesmusic
title: Optional Features ✅
slug: /additional-optional-features
---

You may decide to want to enable additional optional features for your bot. Follow the appropriate sub-heading to learn how to set up and enable the selected feature!

If you are missing the relevant option in your environmental (`.env`) file, make sure to check the latest [`.env.sample` file](https://github.com/ThatGuyJacobee/Elite-Music/blob/main/.env.example) to ensure you are on the latest version.

Once you have followed the appropriate steps for the optional feature that you want to enable, you should start the bot and ensure that the configuration option returns as `true` when the configuration loads. If the feature still shows as disabled, this suggests that you have a configuration error. Follow the error logs that are provided in your console to resolve this. If you are still having trouble with your issue, feel free to create an issue on the [repository](https://github.com/ThatGuyJacobee/Elite-Music/issues/new) or join the [Support Discord server](https://discord.elite-bot.com).

### Plex Media Server playback
The Plex optional feature when enabled, allows you to stream music directly from your Plex Media Server through the /plex command. In order to enable the Plex feature, you must go into your `.env` file and set up the configuration to your own Plex Media Server.

1. Firstly, set `ENABLE_PLEX` to `true`.
2. Next, you must provide a direct URL to your Plex Media Center. The default port that Plex Media Server runs on is `32400`. You can test that your `PLEX_SERVER` URL is correct, by pasting it into any web browser, and it should load successfully with a login page.
3. Finally, you must place your plex authentication token into the `PLEX_AUTHTOKEN` field. You can do this by browsing the XML file for a library item. Please follow the [official Plex Support article](https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/) to access your token. Once you have access to it, place it into your .env file.

### DJ Mode
Elite Music comes with a DJ Mode optional feature, which locks down the use of commands and interactions to members who have the specified DJ Role.

1. Firstly, set `ENABLE_DJMODE` to `true`.
2. Now create a role on your server which you wish to be used as the DJ Role. Copy the ID of the role and place it into the `DJ_ROLE` field.