var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

// TODO: Fix this class
Person.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
  console.log("this is a dead code branch");  // added a console log to my test branch
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}

for (var i = 0; i < strings.length; i--) {
  console.log("dead code")
}

if (str == null && str.length == 0) {
  console.log("String is empty");
}
