import { reduxForm } from 'redux-form'
import * as createAjv from 'ajv/dist/ajv.min';


const re = /[\.\[\]]/;

function setAtPath(ref, path, value) {
    //IT'S A KIND OF MAGIC
    //if you're up for a challenge, rewrite using `prev instead of `next`
    //that code should be more elegant to read :)
    //you can skip the forever checking `next` part
    //TODO refactorme :)

    let parts = path.split(re);

    for (var i=0, l=parts.length; i<l ;++i) {
        let part = parts[i];
        let next = parts[i+1];

        if (!part) continue;

        if (!ref[part]) {
            if (!isNaN(next)) {
                if (next === undefined) {
                    ref[part] = value;
                } else {
                    ref[part] = [];
                }
            } else {
                if (next === undefined) {
                    ref[part] = value;
                } else {
                    ref[part] = {};
                }
            }
        }

        if (next !== undefined) {
            ref = ref[part];
        }
    }
}

/**
 * Converts json-schema validator (ajv) flat errors to nested errors for redux-form to consume
 * @param errors
 * @returns {{}}
 */
function convertErrors (errors) {
    var res = {};

    errors.forEach(function (error) {

        if (error.keyword === 'required') {
            setAtPath(
                res,
                error.dataPath + '.' + error.params.missingProperty,
                error.message
            );
        } else {
            setAtPath(
                res,
                error.dataPath,
                error.message
            );
        }

    });

    return res;
}


/**
 * @param args Object {
 *      ...reduxForm settings +
 *      validatorSettings   optional, config for new Ajv(...)
  *     schema              optional, jsonSchema v4 spec
 * }
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 * @returns {*}
 */
export function reduxFormHelper (args, mapStateToProps, mapDispatchToProps, mergeProps, options) {

    args.fields.push('FORM_ERROR');

    if (args.schema) {
        const ajv = createAjv.default(args.validatorSettings);
        const validator = ajv.compile(args.schema);
        
        const currentValidation = args.validate || function (v, p, e) { return e; };

        args.validate = (values, props) => {

            if (!validator(values)) {
                return currentValidation(values, props, convertErrors(validator.errors));
            }

            return currentValidation(values, props, {});
        }
    }
    
    return reduxForm(args, mapStateToProps, mapDispatchToProps, mergeProps, options);

}
