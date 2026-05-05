export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export const lerp = (a, b, t) => a + (b - a) * t;

export const roundTo = (n, d) =>
    Math.round(n * 10 ** d) / 10 ** d;

export const decimals = n =>
    (n.toString().split(".")[1] || "").length;

export const range = (start, end, step = 1) => {
    const arr = [];
    for (let i = start; i <= end; i += step) arr.push(i);
    return arr;
};