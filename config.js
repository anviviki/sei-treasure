export const config = {
    anticaptchaApikey: "a3c5be12f09bd1416aab944554cac9ef", // paste your apikey
    txAmount: { from: 500, to: 1000 }, // random uSei amount limits to send
    delayBetweenTransactions: 0, // milliseconds
    timeToWaitForFaucetTokens: 5, // minutes
    waitForGiftsToBeMinted: false, // false recommended
    recheckMode: false // true/false, check old mnemonics for available gifts for send\mint
}
