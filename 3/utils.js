export const mergeObjects = (...objs) =>
    objs.reduce((acc, obj) => ({
        ...acc,
        ...Object.keys(obj).reduce((deep, key) => ({
            ...deep,
            [key]:
                //this is the decision point 
                typeof acc[key] === "object" && typeof obj[key] === "object" //both are object then do this
                    ? mergeObjects(acc[key], obj[key])//this is recursion
                    : obj[key]//other wise do this
        }), {})
    }), {});

export const uniqueArray = (...arrays) =>
    [...new Set([].concat(...arrays))];

export const pick = (obj, ...keys) =>
    keys.reduce((acc, key) => ({
        ...acc,
        [key]: obj[key]
    }), {});

export const omit = (obj, ...keys) =>
    Object.keys(obj)
        .filter(key => !keys.includes(key))
        .reduce((acc, key) => ({
            ...acc,
            [key]: obj[key]
        }), {});

export const zipArrays = (...arrays) =>
    arrays[0].map((_, i) => arrays.map(arr => arr[i]));

export const flattenOnce = (...arrays) =>
    [].concat(...arrays);

export default {
    version: "1.0.0",
    functions: [
        "mergeObjects",
        "uniqueArray",
        "pick",
        "omit",
        "zipArrays",
        "flattenOnce"
    ]
};