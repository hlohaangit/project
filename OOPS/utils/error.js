class error extends Error{
    constructor(message){
        super(message);
        this.name='validation error';
    }
}
module.exports = error;