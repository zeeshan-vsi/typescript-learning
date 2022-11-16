var UserClass = /** @class */ (function () {
    function UserClass(fistName, lastName) {
        this.firstName = fistName;
        this.lastName = lastName;
    }
    UserClass.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    UserClass.id = "abc";
    return UserClass;
}());
