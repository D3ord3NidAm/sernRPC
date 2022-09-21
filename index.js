'use strict';
import 'dotenv/config';
import { Client } from 'discord-rpc';
const { clientId, startTimestamp } = process.env;
const rpc = new Client({ transport: 'ipc' });

async function setActivity() {
    if (!rpc) {
        return;
    }

    rpc.setActivity({
        details: `sern handler`,
        state: 'INSTALL CLI TO START',
        startTimestamp: Number(startTimestamp),
        largeImageKey: 'sern',
        largeImageText: 'sern',
        smallImageKey: 'rpc-verify',
        smallImageText: 'rpc-verify',
        instance: false,
        buttons: [
            {
                label: `sern handler (v 1.0.0) 🔗`,
                url: `https://sern-handler.js.org/`
            },
            {
                label: `Discord Server 🔗`,
                url: `https://discord.gg/DwbF5H5JgQ`
            }
        ]
    });
}

rpc.on('ready', () => {
    setActivity();
    console.log('ready')
    setInterval(() => {
        setActivity();
    }, 15e3);
});

rpc.login({ clientId }).catch(console.error);

