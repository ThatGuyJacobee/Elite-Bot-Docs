---
id: verificationfeature
title: Verification Feature
slug: /verification-feature
---

## Toggling the feature

Firstly, you can toggle the feature on using the "/toggle verification" command within your guild returning true to enable (or false to disable).

An example of toggling the feature on:

![img](../static/img/verificationtoggle-example.png)

## Configurating the feature

Next, you have to configure two settings, the description of the embed that is posted and the role that the user should be given if the verification is successful using the "/verification settings" command.

:::tip

It's up to you to ensure that the role that you have set in the configuration, is one which grants users access to the rest of the discord. The best way is to deny read and write permissions from @everyone role excluding the verification channel, and the verify role to unlock this.

:::

An example of configurating the two settings:

![img](../static/img/verificationsettings-example.png)

:::tip

One of the recent updates has introduced the ability to use "/n" to create new lines! If you wish to create a new line within your description, you can now use "/n" to create a new line at that point!

:::

## Posting the embed

Finally, use the command "/verification menu" in order to post the embed into the channel you wish to use for verification.

An example of the embed:

![img](../static/img/verificationmenu-embed.png)

An example of verification step after pressing the button:

![img](../static/img/verificationmenu-modal.png)

:::important

The user will have 60 seconds to answer the calculation, otherwise the modal will close and a too slow message will show.

:::

And... that's it! The verification system is now fully configured and requires no other configuration.