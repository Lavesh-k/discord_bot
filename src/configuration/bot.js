import { Client, GatewayIntentBits, Partials } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, Partials.Channel, Partials.User, Partials.ThreadMember, Partials.GuildMember] });


export { client }
