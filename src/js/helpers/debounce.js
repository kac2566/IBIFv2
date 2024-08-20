/**
 * Force callback function to wait a certain amount of time before running again.
 * @param {callback} callback
 * @param {number} delay delay in milliseconds
 * @param immediate
 * @returns {function()} - Return function wrapped into debounce/timeout
 */

export function debounce(callback, delay, immediate) {
    let timeoutId;

    return (...args) => {
        const boundCallback = callback.bind(this, ...args);

        clearTimeout(timeoutId);

        if (immediate && !timeoutId) {
            boundCallback();
        }

        timeoutId = setTimeout(() => {
            if (!immediate) {
                boundCallback();
            }
            timeoutId = null; // reset the timer
        }, delay);
    };
}
