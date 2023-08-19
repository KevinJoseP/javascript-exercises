const removeFromArray = function(arr, ...args) {
    let arr2 = [];

    for (let i = 0; i < arr.length;i++)
    {
        if (!args.includes(arr[i]))
        {
            arr2.push(arr[i]);
        }
    }
    return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
