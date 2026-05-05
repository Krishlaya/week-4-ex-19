export const chunk = (arr, size) =>
    arr.reduce((acc, _, i) =>
        i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []);

export const flatten = arr => arr.flat();

export const groupBy = (arr, key) =>
    arr.reduce((acc, obj) => {
        const k = obj[key];
        acc[k] = acc[k] || [];
        acc[k].push(obj);
        return acc;
    }, {});

export const keyBy = (arr, key) =>
    arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {});