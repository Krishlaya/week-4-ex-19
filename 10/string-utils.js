export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str, n) =>
    str.length > n ? str.slice(0, n) + "..." : str;

export const suffix = (str, suf) => str + suf;

export const countWords = str => str.trim().split(/\s+/).length;

export const slugify = str =>
    str.toLowerCase().replace(/\s+/g, "-");