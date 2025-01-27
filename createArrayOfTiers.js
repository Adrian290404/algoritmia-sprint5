function createArrayOfTiers(num) {
    const numToString = num.toString();
    let tiers = [];
    for (let i = 1; i <= numToString.length; i++) {
        tiers.push(numToString.slice(0, i));
    }
    console.log(tiers);
    return tiers;
}