---
id: moderationcommands
title: Moderation Commands 🛡️
slug: /moderation-commands
---

## Table of Commands

All commands are listed in alphabetical order! Each command comes with an example and usage description, as well as permission needed to run the command and timeout between each usage in seconds!

| Command        |    Example    |  Usage  |  Permission  |  Timeout  |
| -------------  | :-----------: | -----  |  ----------  |  -------  |
| /announce        | /announce [#channel] [title] [message] [@ping] | Send an announcement embed to a channel within this guild. | Manage Guild | 30 secs |
| /ban        | /ban [@user] [Delete none/24 hours/7 days] [reason] | Ban a user from your guild! | Ban Members | 10 secs |
| /bantemp    | /tempban [@user] [duration] [Delete none/24 hours/7 days] [reason] | Ban a user temporarily from your guild! | Ban Members | 5 secs |
| /channelarchive        | /channelarchive [#channel] | Archive an old or unused channel into a archive category. | Manage Channels | 30 secs |
| /channellock        | /channellock [#channel] | Lock a channel from everyone. | Manage Channels | 15 secs |
| /channelunlock        | /channelunlock [#channel] | Unlock a channel from everyone. | Manage Channels | 15 secs |
| /kick        | /kick [@user] [reason] | Kick a user from your guild! | Kick Members | 10 secs |
| /purge        | /purge [messages] Optional: [@user] | Purge messages within a channel (or a specific user's messages). | Moderate Members | 30 secs |
| /role give        | /role give [@user] [@role] | Give a role to a single user. | Manage Roles | 5 secs |
| /role remove        | /role remove [@user] [@role] | Remove a role to a single user. | Manage Roles | 5 secs |
| /role giveall        | /role giveall [@role] | Give a role to all users. | Manage Roles | 5 secs |
| /role removeall        | /role removeall [@role] | Remove a role from all users. | Manage Roles | 5 secs |
| /servertemplate        | /servertemplate [name] [description] | Create, edit or sync template for your guild. | Manage Guild | 60 secs |
| /setnickname        | /setnickname [@user] [nickname] Optional: [reason] | Set a nickname for a user in this guild! | Manage Roles | 15 secs |
| /timeout        | /timeout [@user] [duration] [reason] | Purge messages within a channel (or a specific user's messages). | Moderate Members | 10 secs |
| /voicedeafen        | /voicedeafen [@user] | Server deafen or undeafen a user within voice channels. | Deafen Members | 10 secs |
| /voicedisconnect        | /voicedisconnect [@user] | Disconnect a user from any voice channel. | Move Members | 10 secs |
| /voicemove        | /voicemove [@user] [#voicechannel] | Move a user from one voice channel to another. | Move Members | 10 secs |
| /voicemute        | /voicemute [@user] | Server mute or unmute a user within voice channels. | Mute Members | 10 secs |
| /warn        | /warn [@user] [reason] | Warn a user in your guild! | Moderate Members | 5 secs |
| /warncheck        | /warncheck [@user] | Check a user's current warnings within this guild! | Moderate Members | 10 secs |
| /warnrevoke        | /warnrevoke [@user] [warnid] | Revoke a user's current warn in your guild! | Moderate Members | 5 secs |
| /xpadd        | /xpadd [@user] [amount] | Add XP to a user in your guild. | Moderate Members | 15 secs |
| /xpremove        | /xpremove [@user] [amount] | Remove XP to a user in your guild. | Moderate Members | 15 secs |