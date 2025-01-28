// function myLanguages(results) {
//     let rates = []
//     let languages = []
//     Object.entries(results).forEach(([key, value]) => {
//         value >= 60 && rates.push(value)
//     });
//     rates.sort((a, b) => b - a)
//     rates.forEach(element => {
//         Object.entries(results).forEach(([key, value]) => {
//             value == element && languages.push(key)
//         });
//     });
//     return languages;
// }

function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59)
    .sort((a,b) => results[b] - results[a])
}