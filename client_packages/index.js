mp.game.audio.setAudioFlag("LoadMPData", true);
mp.game.audio.requestScriptAudioBank("DLC_BIKER/BKR_KQ_01", false);
global.adminGodMode = false;

// require('./scripts/damageHandler/index')

const toLoad = [
    "lib/scaleform_messages",
    "scripts/maxedStats",
    "scripts/playerBlips",
    "scripts/timerBars",
    "scripts/wasted",
    "scripts/infiniteAmmo",
    "scripts/gameArea",
    "scripts/fly",
    "scripts/nameTags",
];


toLoad.forEach((file) => {
    try {
        require(file);
    } catch (e) {
        mp.gui.chat.push(`Failed to load "${file}".`);
    }
});