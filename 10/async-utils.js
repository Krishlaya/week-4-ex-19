export const sleep = ms => new Promise(res => setTimeout(res, ms));

export const retry = async (fn, n, delay) => {
    for (let i = 0; i < n; i++) {
        try {
            return await fn();
        } catch {
            if (i === n - 1) throw new Error("Failed");
            await sleep(delay);
        }
    }
};

export const timeout = (promise, ms) =>
    Promise.race([
        promise,
        new Promise((_, rej) =>
            setTimeout(() => rej("Timeout"), ms))
    ]);