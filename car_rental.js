// Customer Object
var Customer = function (customerInfo) {
// ** your code here**
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;
};

  this.quotePrice = function(rentalDuration) {
    return this.rentalPricePerDay * rentalDuration;
  };

  this.reserve = function(customer, rentalDuration) {
    if (this.available === true) {
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }
    else {
      return false;
    }
  };

  this.return = function() {
    if (this.available === true) {
      return "Sorry. this car have already been returned.";
    }
    else {
      this.available = true;
      this.customer  = null;
      this.rentalDuration = 0;
    }
  };

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
};

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // **your code here**

this.addCar = function(CarObj) {
  if(this.getCar(carObj.id) === true) {
    console.log("ID already exists");
  }
  else {
    this.car.push(CarObj);
    console.log("Car added to warehouse");
  }
};

this.addCustomer = function(customerObj) {
  if(this.getCustomer(customerObj.id) === true) {
    console.log("ID already exists");
  }
  else {
    this.customer.push(customerObj);
    console.log("Customer added to warehouse");
  }
};

this.removeCar = function(carID) {
  if(this.findCarIndex >= 0) {
    this.cars.splice(this.findCarIndex, 1);
    console.log("Car deleted");
  }
  else {
    console.log("Car not found");
  }
};

this.removeCustomer = function(customerID) {
  if(this.findCustomerIndex >= 0) {
    this.customers.splice(this.findCustomerIndex, 1);
    console.log("Customer deleted");
  }
  else {
    console.log("Customer not found");
  }
};

this.availableCars = function() {
  return this.available.filter(function(car) {
    return car.available ? true : false;
  });
};

this.rentCar = function(customerID, rentalDuration) {
  if(this.availableCars().length === 0) {
    console.log("All our cars have been rented");
  }
  else {
    this.getCustomer(customerID);
  }
  if(this.getCustomer(customerID) > 0) {
    customer.carRented = availableCars[0];
    car.reserve(customerObj, rentalDuration);
      console.log("The car has been reserved");
    }
  else {
    console.log("Please provide a valid customerID");
  }
};

this.returnCar = function(customerID) {
  if(this.getCustomer(customerID)>0) {
    this.customer.carRented = null;
    console.log("Thank you for using our service");
  }
  else {
    console.log("Please provided a valid customerID");
  }
};

this.totalRevenue = function () {
  return this.cars.reduce(function(prevSum, currCar){
    console.log(prevSum, currCar);
    return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
  }, 0);
};
};



// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
console.log(vendor.availableCars());
console.log(vendor.totalRevenue());

vendor.removeCustomer("001");
console.log(vendor.customers);

vendor.removeCar("001");
console.log(vendor.cars);
