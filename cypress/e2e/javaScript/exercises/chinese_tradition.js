function luckyMoney(money, giftees) {
    if (money < 0 || money >= 100) return -1; //incorrect money input
    if (giftees < 0 || giftees >= 10) return -2; //incorrect giftees input
    if (money >= giftees * 8) return giftees; //spend the entire budget (unless there is enough budget to give everyone 8)
    if (money < giftees) return 0; // not enough money
    
    let m = money, g = giftees; // enough budget for giftees left after donating 8 as much as possible

    while (m >= 8 + (g - 1) && g > 0) {
       m -= 8; // m = m - 8
       g--;
    }

    if(g === 1 && m === 4) return 0;

    return giftees - g;
 }
 
 console.log('inputs: 12 2, result: ', luckyMoney(12, 2));
 console.log('inputs: 24 4, result: ', luckyMoney(24, 4));
 console.log('inputs: 7 2, result: ', luckyMoney(7, 2));
 console.log('inputs: 64 9, result: ', luckyMoney(64, 9));
 console.log('inputs: 60 8, result: ', luckyMoney(60, 8));


 64 - 9
 56 - 8
 48 - 7
 40 - 6
 32 - 5
 24 - 4
 16 - 3
 8 - 2