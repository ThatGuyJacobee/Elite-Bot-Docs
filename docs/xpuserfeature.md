---
id: xpuserfeature
title: XP User Commands
slug: /xp-user-feature
---

## How does this work?

The XP system has a range of commands for users to users and admins to use. There are 3 user commands and an additional two for admins to user, which can be seen in the table below!

| Command        |    Example    |  Usage  |  Permission  |  Timeout  |
| -------------  | :-----------: | -----  |  ----------  |  -------  |
| /xpcurrent        | /xpcurrent [@user] | Check the XP of any user in the guild. | N/A | 15 secs |
| /xpleaderboard        | /xpleaderboard | Check the XP leaderboard of this guild. | N/A | 15 secs |
| /xprewards        | /xprewards | Display the role rewards for this guild. | N/A | 15 secs |
| /xpadd        | /xpadd [@user] [amount] | Add XP to a user in your guild. | Moderate Members | 15 secs |
| /xpremove        | /xpremove [@user] [amount] | Remove XP to a user in your guild. | Moderate Members | 15 secs |

:::tip

Any users that enter the giveaway need to have their DMs open in order to be eligable to enter, otherwise the bot will return a message letting the user know to do so!

:::

## Using user XP commands

There are three user commands for XP, these are; xpcurrent which checks the XP of any user, xpleaderboard which shows the top 10 XP in the server and finally xprewards which shows the rewards that the guild has set.

An example of xpcurrent command:

![img](../static/img/xp-current-example.png)

An example of xpleaderboard command:

![img](../static/img/xp-leaderboard-example.png)

An example of xprewards command:

![img](../static/img/xp-rewards-example.png)

## Using admin XP commands

There are two admin commands; xpadd and xpremove which both have two parameters the user and amount of XP to give or remove!

:::tip

Remember both of these commands require Moderate Members permission!

:::

An example of adding and removing XP:

![img](../static/img/xp-remove-example.png)

![img](../static/img/xp-add-example.png)