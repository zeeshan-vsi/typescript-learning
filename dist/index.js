var getData = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
var user1 = {
    name: "zeeshan",
    email: "zeeshan@gmail.com",
    userName: "zeeshanAwais",
    helloMessage: function () {
        return "hello ".concat(this.name);
    }
};
var usersArray = [
    {
        name: "zeeshan",
        email: "zeeshan@gmail.com",
        userName: "zeeshanAwais",
        helloMessage: function () {
            return "hello ".concat(this.name);
        }
    }
];
var pageNumber = '10';
var numericPageNumber = pageNumber;
var someElement = document.getElementById('id');
someElement.addEventListener('input', function (event) {
    var target = event.target;
    console.log(target.value);
});
console.log(someElement.value);
console.log(user1.helloMessage());
console.log(getData('awais', 'zeeshan'));
