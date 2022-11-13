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
    "scripts/fly"
];


toLoad.forEach((file) => {
    try {
        require(file);
    } catch (e) {
        mp.gui.chat.push(`Failed to load "${file}".`);
    }
});

// mp.nametags.orderByDistance = true
// mp.nametags.useScreen2dCoords = true
// mp.nametags.set({
//     font: 0,
//     outline: true,
//     offset: 0.7,
//     veh_offset: 1.0,
//     color: [255, 255, 255, 255],
//     size: 0.5,
//
//     hbar: {
//         size: [15.06, 15.008],
//         color: [255, 255, 255, 0],
//         bg_color: [255, 255, 255, 0]
//     },
// });