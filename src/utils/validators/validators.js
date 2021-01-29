export const required = (value) => {
    if (value) return undefined;

    return 'It is required field'
}
export const maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`;

    return undefined
}