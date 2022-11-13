// var localplayer = mp.players.local;
// var pos = mp.players.local.position;
//
//
//
// mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
//
//     var hp = targetEntity.getHealth();
//     if (admingm) return true;
//     if(boneIndex === 4294967295) {
//         return;
//     }
//     if(weapon == 911657153){ //StunGun
//         return;
//     }
//     if(weapon == 3249783761) {//Revolver
//         if (boneIndex === 20) {
//             if (hp <= 75) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(50, true);
//
//             return
//         } else {
//             if (hp <= 50) {
//                 return;
//             }
//
//
//             localplayer.applyDamageTo(50, true);
//
//             return
//         }
//         if (weapon == -1716589765) { //DIGL
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 1649403952) { // Compact Rifle
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 4208062921) { // AR-15
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 961495388) { // AK-103
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == -2066285827) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 65) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(65, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == -1768145561) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 65) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(65, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 3220176749) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == -1357824103) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == -1063057011) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//
//         if (weapon == 3415619887) {//Revolver MK2
//             if (boneIndex === 20) {
//                 if (hp <= 75) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(75, true);
//
//                 return
//             } else {
//                 if (hp <= 50) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(50, true);
//
//                 return
//             }
//         }
//
//         if (weapon == 171789620)//PDW
//         {
//             if (boneIndex === 20) {
//                 if (damage <= 130) {
//                     if (hp <= 55) {
//                         return;
//                     }
//
//                     localplayer.applyDamageTo(55, true);
//
//                     //mp.gui.chat.push(`|Вы получли 8 дамага|`);
//                     return
//                 }
//                 if (damage == 527) {
//                     if (hp <= 18) {
//                         return;
//                     }
//
//                     localplayer.applyDamageTo(18, true);
//                     //mp.gui.chat.push(`|Вы получли 18 дамага|`);
//
//                     return
//                 } else {
//                     if (hp <= parseInt(damage / 18)) {
//                         return;
//                     }
//
//                     localplayer.applyDamageTo(parseInt(damage / 18), true);
//                     //mp.gui.chat.push(`|Вы получли ${parseInt(damage/18)} дамага|`);
//
//                     return
//                 }
//             } else {
//                 if (hp <= 14) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(14, true);
//
//                 return
//             }
//         }
//         if (weapon == 2640438543) { // Bullpup ShotGun
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 23) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(23, true);
//
//                 return
//             }
//         }
//         if (weapon == 3675956304) { //machine Pisotl
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 2210333304) { //Carbine Rifle
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 487013001) { //Помпа
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == -1654528753) { //Помпа
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == -494615257) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == -1466123874) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 42) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(42, true);
//
//                 return
//             } else {
//                 if (hp <= 22) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(22, true);
//
//                 return
//             }
//         }
//         if (weapon == -275439685) { //Помпа
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 1432025498) { //Помпа
//             if (boneIndex === 20) {
//                 if (hp <= 65) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(65, true);
//
//                 return
//             } else {
//                 if (hp <= 35) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(35, true);
//
//                 return
//             }
//         }
//         if (weapon == 317205821) { //Помпа
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 736523883) { //SMG
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 2024373456) { //SMG
//             if (boneIndex === 20) {
//                 if (hp <= 65) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(65, true);
//
//                 return
//             } else {
//                 if (hp <= 35) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(35, true);
//
//                 return
//             }
//         }
//         if (weapon == -1121678507) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
// //NEW GUN
//         if (weapon == 1627465347) { //SMG
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//
// //END NEW GUN
//
//
//         if (weapon == 2725352035) { //Руки
//             if (boneIndex === 20) {
//                 if (hp <= 18) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(18, true);
//                 //mp.gui.chat.push(`Вы получили 18 в голову`);
//
//                 return;
//             }
//             if (boneIndex === 10) {
//                 if (hp <= 5) {
//                     return;
//                 }
//
//                 //mp.gui.chat.push(`Вы получили 5 урона. Противник попал в багаюз!`);
//                 localplayer.applyDamageTo(5, true);
//
//                 return;
//             } else {
//                 if (hp <= 10) {
//                     return;
//                 }
//
//                 //mp.gui.chat.push(`Вы получили 10 урона. Стандарт!`);
//                 localplayer.applyDamageTo(10, true);
//
//                 return
//             }
//         }
//         if (weapon == 1317494643 || weapon == 2227010557 || weapon == 2343591895 || weapon == 1737195953) { //Молоток Фонарик Монтровка
//             if (hp <= 24) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(24, true);
//
//             return
//         }
//         if (weapon == -1716189206) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 33) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(33, true);
//
//                 return
//             }
//             if (hp <= 22) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(22, true);
//
//             return
//         }
//         if (weapon == -853065399) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == 419712736) { //Нож
//             if (boneIndex === 8) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(101, true);
//
//                 return
//             }
//             if (boneIndex === 12) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -1810795771) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -538741184) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -581044007) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -656458692) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 12) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 20) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(20, true);
//
//             return
//         }
//         if (weapon == -102973651) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -1834847097) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -102323637) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == 1141786504) { //Нож
//             if (boneIndex === 8) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(101, true);
//
//                 return
//             }
//             if (boneIndex === 12) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -2067956739) { //Нож
//             if (boneIndex === 8) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(101, true);
//
//                 return
//             }
//             if (boneIndex === 12) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -2067956739) { //Нож
//             if (boneIndex === 8) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(101, true);
//
//                 return
//             }
//             if (boneIndex === 12) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//         if (weapon == -1786099057) { //Нож
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             }
//             if (boneIndex === 20) {
//                 if (hp <= 20) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(20, true);
//
//                 return
//             }
//             if (hp <= 40) {
//                 return;
//             }
//
//             localplayer.applyDamageTo(40, true);
//
//             return
//         }
//
//         if (weapon == 3219281620) {
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//
//         if (weapon == 1593441988) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 453432689) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 137902532) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == -598887786) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 75) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(75, true);
//
//                 return
//             } else {
//                 if (hp <= 50) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(50, true);
//
//                 return
//             }
//         }
//         if (weapon == 584646201) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == -1746263880) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 3523564046) { //Heavy Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 2144741730) { //CombatMG Пулик
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == -1660422300) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 3686625920) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 15) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(15, true);
//
//                 return
//             }
//         }
//         if (weapon == 3218215474) { //Пистол СНС
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 12) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(12, true);
//
//                 return
//             }
//         }
//         if (weapon == -2009644972) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 65) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(65, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 4019527611) { //Двухстволка дробаш
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 22) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(22, true);
//
//                 return
//             }
//         }
//         if (weapon == 2017895192) { //Укороченый дробаш
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 22) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(22, true);
//
//                 return
//             }
//         }
//         if (weapon == 324215364) { //UZI
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 205991906) { //Heavy Sniper
//             if (boneIndex === 20) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(100, true);
//
//                 return
//             } else {
//                 if (hp <= 90) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(90, true);
//
//                 return
//             }
//         }
//         if (weapon == 100416529) { //Heavy Sniper
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 35) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(35, true);
//
//                 return
//             }
//         }
//         if (weapon == -952879014) { //Combat Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 35) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(35, true);
//
//                 return
//             }
//         }
//         if (weapon == 177293209) { //Heavy Sniper
//             if (boneIndex === 20) {
//                 if (hp <= 200) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(200, true);
//
//                 return
//             } else {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(100, true);
//
//                 return
//             }
//         }
//         if (weapon == 1785463520) { //Heavy Sniper
//             if (boneIndex === 20) {
//                 if (hp <= 60) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(60, true);
//
//                 return
//             } else {
//                 if (hp <= 50) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(50, true);
//
//                 return
//             }
//         }
//         if (weapon == 984333226) { //Heavy Shotgun
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 4024951519) { //Assault SMG
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 26) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(26, true);
//
//                 return
//             }
//         }
//         if (weapon == 2132975508) { //Bullpup Rifle
//             if (boneIndex === 20) {
//                 if (hp <= 55) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(55, true);
//
//                 return
//             } else {
//                 if (hp <= 25) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(25, true);
//
//                 return
//             }
//         }
//         if (weapon == 3696079510) { //Marksman Pistol
//             if (boneIndex === 20) {
//                 if (hp <= 100) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(100, true);
//
//                 return
//             } else {
//                 if (hp <= 75) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(75, true);
//
//                 return
//             }
//         } else {
//             if (boneIndex === 20) {
//                 if (hp <= parseInt(damage / 55)) {
//                     return;
//                 }
//
//                 localplayer.applyDamageTo(parseInt(damage / 55), true);
//
//
//             } else {
//                 if (hp <= parseInt(damage / 25)) {
//                     return;
//                 }
//                 localplayer.applyDamageTo(parseInt(damage / 25), true);
//
//                 return
//             }
//         }
//         return true;
//     }
// });