function makeMeSlow() {
    const start = Date.now()
    while (Date.now() - start < 7000){
        for (let x = 0; x < 1000000; ++x) { }
    }
}