// mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
//     mp.gui.chat.push('мама шлюха')
//
//     let hp = targetEntity.getHealth()
//     if (weapon == 3249783761) {//Revolver
//         if (boneIndex === 20) {
//             if (hp <= 75) {
//                 return;
//             }
//
//             mp.players.local.applyDamageTo(75, true);
//             setTimeout(() => {
//             }, 1000);
//             return
//         } else {
//             if (hp <= 50) {
//                 return;
//             }
//             mp.players.local.applyDamageTo(50, true);
//             setTimeout(() => {
//             }, 1000);
//         }
//         return
//     }
// });

mp.events.add('outgoingDamage', (sourceEntity, targetEntity, sourcePlayer, weapon, boneIndex, damage) => {
    if (targetEntity.type === 'player' && targetEntity.weapon === 3249783761) {
        if (boneIndex === 20) {
            mp.game.weapon.setCurrentDamageEventAmount(75)
        }
    } else {
        mp.game.weapon.setCurrentDamageEventAmount(50)
    }
})