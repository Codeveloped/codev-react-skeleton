import { reduxFormHelper } from '../../lib/form';


export default reduxFormHelper({
    form: 'login',
    fields: ['username', 'password'],
    validatorSettings: {
        coerceTypes: true,
        allErrors: true
    },
    schema: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                minLength: 5,
                maxLength: 6
            },
            password: {
                type: 'string',
                minLength: 5,
                maxLength: 6
            }
        },
        required: ['username', 'password']
    },
});
