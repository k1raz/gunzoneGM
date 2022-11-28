mp.events.add('ac.detect.giveWeapon', (player, weapon) => {
    console.log(`${player.name}, ${player.weapon}`)
})

mp.events.add('ac.detect.healthSpawn', (player, health) => {
    console.log(`${player.name}, spawned HP`)
})

mp.events.add('ac.detect.modelChanger', (player) => {
    console.log(`${player.name} tryed to change ped`)
})


