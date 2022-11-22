const player = mp.players.local;

// WEAPON

// crasher - player.taskParachute(true)
const blackListWeapon = [
    -1834847097,
    -102323637,
    1141786504,
    -102973651,
    -581044007,
    -538741184,
    -538741184,
    -1810795771,
    940833800,
    -1355376991,
    -1853920116,
    1198256469,
    -1466123874,
    1834241177,
    2138347493,
    1119849093,
    1305664598,
    -1568386805
    - 1312131151,
    1672152130,
    125959754,
    -1238556825,
    -1813897027,
    -1600701090,
    615608432,
    -1420407917,
    -1169823560,
    -37975472,
    1233104067,
    741814745
    - 72657034,
    101631238
    - 1168940174,
]

// В ТЕОРИИ МОЖНО УБИТЬ ИНТЕРВАЛ. НАДО ПРОВЕРИТЬ ФИКС ИЛИ НЕТ

let weaponCheck = setInterval(() => {
    if (player.weapon != 3249783761) {
        mp.gui.chat.push(`${player.name} выдал ${player.weapon}, ты дебик`)
        player.removeAllWeapons()
        player.giveWeapon(3249783761, 1000, true)
    } else {
    }
}, 150)

if (weaponCheck == undefined) {
    mp.gui.chat.push('weaponcheck deleted')
}

mp.keys.bind(0x71, false, () => {
    player.giveWeapon(0xB1CA77B1, 1000, true)
})

mp.keys.bind(0x72, false, () => {
    player.giveWeapon(3249783761, 1000, true)
})


// ГЛОБАЛЫ
/*
if (global === undefined) {
    player.taskParachute(true)
}*/
