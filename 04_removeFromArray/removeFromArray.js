function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
