import { useCallback, useState } from 'react';

/* ** HOOKS-REACT ** */

/**
 * Alterne une valeur
 */
export function useToggle(initialValue = null) {
    const [value, setValue] = useState(initialValue);
    return [value, useCallback(() => setValue(v => !v), [])];
}


/* ** OTHERS ** */

/**
 * Date parser
 * @param date
 * @returns {string}
 */
export const dateParser = (date) => {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    let timestamp = Date.parse(date);
    let dateFormatted = new Date(timestamp).toLocaleDateString('fr-FR', options);
    return dateFormatted.toString();
};

/**
 * TimeStamps parser
 * @param tsp
 * @returns {string}
 */
export const timestampParser = (tsp) => {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    let date = new Date(tsp).toLocaleDateString('fr-FR', options);
    return date.toString();
};

/**
 * Return true si la value est null ou undefined
 * @param {(string|Object|Array)} value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
    return value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);
};

/**
 * Resolve une promesse après une durée donnée
 * @param {number} duration
 */
export function wait (duration) {
    return new Promise(resolve => {
        window.setTimeout(resolve, duration)
    })
}
