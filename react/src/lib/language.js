
export function ensureEnglish (fields, data) {
    if (fields.length === 0) fields.push(Object.assign({language: 'en'}, data));

    return fields;
}

export function ensureDutch (fields, data) {
    if (fields.length <= 1) fields.push(Object.assign({language: 'nl'}, data));

    return fields;
}
