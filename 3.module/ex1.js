function Person(){
    this.smile = '大笑';
    this.handom = '帅';
}
Person.prototype.eat = function () {
    console.log('吃');
};
Person.prototype.drink = function () {
    console.log('喝水');
};
Person.prototype.home = [1,2,3];
//exports.Person = Person;

module.exports = Person;