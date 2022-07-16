---
id: joinroles
title: Join Roles
slug: /join-roles
---

## Configurating the join roles

Configuring the roles that users are added when they join your server is extremely easy!

All you have to do is use the command "/joinroleadd" with the single argument being the actual role. Once you submit this, new users will now be given the picked role. You can use this command as much as you wish, with no limit to how many roles can be added when a user connects.

:::important

The role you want to be automatically added to a user when they join the server, MUST be lower in the role hierarchy than Elite Bot's role, otherwise you will receive an error as the bot cannot manage roles that are higher than its own.

:::

An example of adding a role:

![img](../static/img/joinroles-example.png)

Similarly, you can use the "/joinroleremove" command which has a single argument for the role that you want to remove from being automatically added.

And... that's it! The Join Roles are now fully configured and requires no other configuration.

:::tip

If you forgot what roles are part of the join roles, you can use the command "/joinrolecheck" which will check your guild's settings and return the roles that are currently set to be given automatically on user join.

:::