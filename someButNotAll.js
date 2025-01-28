const someButNotAll = (seq, pred) => {
    const arraySeq = Array.isArray(seq) ? seq : [...seq]
    const trueCount = arraySeq.filter(pred).length
    return trueCount > 0 && trueCount < arraySeq.length
}