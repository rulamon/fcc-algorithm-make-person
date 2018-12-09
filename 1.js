var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = () => firstAndLast;
  this.getFirstName = () => firstAndLast.split(" ")[0];
  this.getLastName = () => firstAndLast.split(" ")[1];
  this.setFullName = function(fullName) {
  	if (typeof fullName === "string") {
  		firstAndLast = fullName
  	};
  };
  this.setFirstName = function(firstName) {
  	if (typeof firstName === "string") {
  		firstAndLast = firstAndLast.replace(/^\w*/, firstName)
  	};
  };
  this.setLastName = function(lastName) {
  	if (typeof lastName === "string") {
  		firstAndLast = firstAndLast.replace(/\w*$/, lastName)
  	};
  };

};

var bob = new Person('Bob Ross');
console.log(bob.setLastName("Loetie"));
console.log(bob.getFullName())