class FormSchema {
    constructor(schema){
        this.schema = schema
    }
}
let formSchema
module.exports = (schema) => typeof formSchema !== 'undefined'
    ? formSchema
    : new FormSchema(schema)