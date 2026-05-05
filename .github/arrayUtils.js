// 1. chunk
function chunk(arr, size) {
    if (size <= 0) return [];
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

// 2. flatten
function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

// 3. groupBy
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const group = obj[key];
        if (!acc[group]) acc[group] = [];
        acc[group].push(obj);
        return acc;
    }, {});
}

// 4. zip
function zip(arr1, arr2) {
    let length = Math.min(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < length; i++) {
        result.push([arr1[i], arr2[i]]);
    }

    return result;
}

// export (important if using modules)
module.exports = { chunk, flatten, groupBy, zip };