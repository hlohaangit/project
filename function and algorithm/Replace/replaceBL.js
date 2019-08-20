var newName= (name) => {
    if (name.length<3){
        return 'username less than 3 characters';
    }
    return 'Hey ! ' + name+ '. How are you?';

}
module.exports= {newName}