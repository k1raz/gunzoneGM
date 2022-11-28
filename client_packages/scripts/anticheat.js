const player = mp.players.local;
const callRemote = mp.events.callRemote
const call = mp.events.call

let weaponCheck = setInterval(() => {
    if (player.weapon != 3249783761) {
        callRemote('ac.detect.giveWeapon')
        player.removeAllWeapons()
        player.giveWeapon(3249783761, 1000, true)

        if (weaponCheck == undefined) {
            mp.gui.chat.push('weaponcheck deleted')
        }
    } else {
    }
}, 150)

