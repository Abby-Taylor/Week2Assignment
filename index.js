
var isHotOutside = false;
var isWeekDay = true;
var hasMoneyInPocket = false;
var costOfMilk = 1.98;
var moneyInWallet = 20;
var thirstLevel = 9;

var shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
var willGoSwimming = isHotOutside && !isWeekDay;
var isAGoodDay = isHotOutside && (moneyInWallet > 0) && !isWeekDay;
var willBuyMilk = isHotOutside && (thirstLevel >= 3) && (moneyInWallet >= (2 * costOfMilk));

console.log ( shouldBuyIcecream );
console.log ( willGoSwimming );
console.log ( isAGoodDay );
console.log ( willBuyMilk );

