---
id: fivemstatusfeature
title: Five M Server Status
slug: /fivem-status-feature
---

:::important

This feature is useful for Discord servers that run a Five M (GTA V Modification) community or server. If you don't know what Five M is, then you don't need this feature enabled.

:::

## Enabling Five M Server Status

By default, the Five M Server Status is toggled off. Firstly, use the "/fivemstatustoggle" command within your guild returning true to enable (or false to disable).

An Example of toggling the Five M Server Status:

![img](../static/img/fivemstatustoggle-example.png)

## Configuring the functionality

Most importantly, fisrt you need to grab your server's IP address or domain name. Next, use the command "/fivemstatusconfig" which consists of two arguments. One is to define the channel to which the server status embed should be sent to and updated in, whilst the other is the server IP.

:::warning

Ensure that you have the port after your IP, otherwise it will not work! For example: 0.0.0.0:30120 with the port being :30120 (Five M's default port), likewise for domains.

:::

An Example of configurating the Five M Server Status:

![img](../static/img/fivemstatusconfig-example.png)

## Configuring the message embed

Finally, you must customise the embed message to your liking! You can do this through the use of the command "/fivemstatusembed" which conists of two arguments, one for the title and one for the description.

An Example of setting the embed title and description:

![img](../static/img/fivemstatusembed-example.png)

And... that's it! The Five M Server Status is now fully configured and requires no other configuration. 

:::note

Please note once you submit any of these commands, it may take up to 30 seconds for updates to occur or for the message embed to be posted to the channel.

:::