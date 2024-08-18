const removeFromArray = function(array, item) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
