---
id: configurationcommands
title: Configuration Commands ⚙️
slug: /configuration-commands
---

## Table of Commands

All commands are listed in alphabetical order! Each command comes with an example and usage description, as well as permission needed to run the command and timeout between each usage in seconds!

| Command        |    Example    |  Usage  |  Permission  |  Timeout  |
| -------------  | :-----------: | -----  |  ----------  |  -------  |
| /antispam settings   | /antispam settings [messages] [time] [timegap] [timeout] | Alter the default settings of the Anti-Spam feature. | Manage Messages | 10 secs |
| /antispam similarity   | /antispam similarity [choice] [percentage] | Toggle the Text Similarity section of the Anti-Spam feature. | Manage Messages | 10 secs |
| /configinfo xpsystem   | /configinfo xpsystem | Check the current configuration for the XP System. | Administrator | 5 secs |
| /configinfo logging   | /configinfo logging | Check the current configuration for the Logging Feature. | Administrator | 5 secs |
| /configinfo welcome   | /configinfo welcome | Check the current configuration for the Welcome Feature. | Administrator | 5 secs |
| /configinfo joinroles   | /configinfo joinroles | Check the current configuration for the Join Roles Feature. | Administrator | 5 secs |
| /configinfo fivemstatus   | /configinfo fivemstatus | Check the current configuration for the Five M Status Feature. | Administrator | 5 secs |
| /configinfo roleselect   | /configinfo roleselect | Check the current configuration for the Role Select Feature. | Administrator | 5 secs |
| /configinfo verification   | /configinfo verification | Check the current configuration for the Five M Status Feature. | Administrator | 5 secs |
| /configinfo community   | /configinfo community | Check the current configuration for the Community Feature. | Administrator | 5 secs |
| /configinfo djfeature   | /configinfo djfeature | Check the current configuration for the DJ Music Feature. | Administrator | 5 secs |
| /configinfo voicecount   | /configinfo voicecount | Check the current configuration for the Voice Count Feature. | Administrator | 5 secs |
| /configinfo createvc   | /configinfo createvc | Check the current configuration for the Join to Create VC Feature. | Administrator | 5 secs |
| /configinfo antispam   | /configinfo antispam | Check the current configuration for the Anti-Spam Feature. | Administrator | 5 secs |
| /countgame config   | /countgame config [#channel] [gamemode] [resetwrong] [sameuser] | Change multiple configuration settings for the join roles feature using this command! | Manage Events | 30 secs |
| /fivemstatus config    | /fivemstatus config [#channel] [cfxurl] | Set the Five M (or Red M) status channel and Cfx.re URL for the guild. | Administrator | 10 secs |
| /fivemstatus embed    | /fivemstatus embed [title] [description] | Customise the description of the Five M status embed. | Administrator | 10 secs |
| /joinrole add    | /joinrole add [@role] | Add a role to give to users on join to this guild. | Manage Roles | 5 secs |
| /joinrole check    | /joinrole check | Check the roles that are given to users on join to this guild. | Manage Roles | 5 secs |
| /joinrole remove    | /joinrole remove [@role] | Remove a role to give to users on join from this guild. | Manage Roles | 5 secs |
| /logging channel   | /logging channel [#channel] | Set the logs channel for the guild. | Administrator | 10 secs |
| /roleselection addrole    | /roleselection addrole [menuname] [@role] [description] [emoji] | Add a role into the role selection menu. | Manage Roles | 5 secs |
| /roleselection check    | /roleselection check | Check the current role selection menus in your guild! | Manage Roles | 5 secs |
| /roleselection create    | /roleselection create [menuname] [menutitle] [menudescription] | Create a new role selection menu. | Administrator | 5 secs |
| /roleselection delete    | /roleselection delete [menuname] | Delete a currently existing role selection menu in this guild. | Administrator | 5 secs |
| /roleselection spawn    | /roleselection menu [menuname] | Generate a role selection menu! | Manage Roles | 5 secs |
| /roleselection removerole    | /roleselection removerole [menuname] [@role] | Remove a role into the role selection menu. | Manage Roles | 5 secs |
| /roleselection edit    | /roleselection edit [menuname] Optional: [menutitle] [menudescription] [newname] | Edit the embed or name of a role selection menu. | Manage Roles | 5 secs |
| /community suggestionchannel    | /community suggestionchannel [#channel] | Set the suggestion channel for the guild. | Administrator | 15 secs |
| /community bugchannel    | /community bugchannel [#channel] | Set the bug channel for the guild. | Administrator | 15 secs |
| /toggle antispam    | /toggle antispam [true/false] | Toggle the Anti-Spam feature for this guild. | Administrator | 30 secs |
| /toggle createvc    | /toggle createvc [true/false] | Toggle the the create voice chat feature for this guild. | Administrator | 30 secs |
| /toggle djonly    | /toggle djonly [true/false] | Toggle DJ for the music feature! | Administrator | 30 secs |
| /toggle fivemstatus    | /toggle fivemstatus [true/false] | Toggle the Five M Status feature for this guild. | Administrator | 30 secs |
| /toggle logging    | /toggle logging [true/false] | Toggle the log feature for this guild. | Administrator | 30 secs |
| /toggle community    | /toggle community [true/false] | Toggle the community utility feature for this guild. | Administrator | 30 secs |
| /toggle verification    | /toggle verification [true/false] | Toggle the Verification feature for this guild. | Administrator | 30 secs |
| /toggle voicecount    | /toggle voicecount [true/false] | Toggle the voice chat member count feature for this guild. | Administrator | 30 secs |
| /toggle welcome    | /toggle welcome [true/false] | Toggle the welcome feature for this guild. | Administrator | 30 secs |
| /toggle xpsystem    | /toggle xpsystem [true/false] | Toggle the XP system feature for this guild. | Administrator | 30 secs |
| /verification menu    | /verification menu | Post the verificaiton menu for this guild. | Manage Guild | 10 secs |
| /verification settings    | /verification settings [description] [roletogive] | Adjust the Verification feature settings for this guild. | Administrator | 10 secs |
| /welcome config    | /welcome config [#channel] [title] [description] [image] | Set the welcome channel for the guild. | Administrator | 10 secs |
| /xpsystem roleadd    | /xpsystem roleadd [level] [@role] | Add a role to give to users when reaching a level threshold. | Manage Roles | 15 secs |
| /xpsystem roleremove    | /xpsystem roleremove [@role] | Remove a role to give to users when reaching a level threshold. | Manage Roles | 15 secs |
| /xpsystem settings    | /xpsystem settings [xptype] [xpmin] [xpmax] [xpmultiplier] [#levelupchannel] [intervalvc] [#afkvc] | Customise settings for the XP system feature for your guild. | Administrator | 15 secs |