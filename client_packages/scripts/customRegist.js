mp.events.add('outgoingDamage', (sourceEntity, targetEntity, sourcePlayer, weapon, boneIndex, damage) => {

    // revolver
    if (targetEntity.type === 'player' && targetEntity.weapon === -1045183535) {
        if (boneIndex === 20) {
            mp.game.weapon.setCurrentDamageEventAmount(75)
        }
    } else {
        mp.game.weapon.setCurrentDamageEventAmount(50)
    }
})