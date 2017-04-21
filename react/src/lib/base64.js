

export function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(null, reader.result);
    };
    reader.onerror = function (error) {
        cb(error);
    };
}
