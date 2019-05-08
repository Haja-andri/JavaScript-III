/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
"this" will refer to a local context and that context will varies on where and when the "this" is called/used  
* 1. For the first princile which is at the highest level of the code environement. "This" will refer to the context inside of the console window object. It seats then at the global level.  
* 2. For the second principle, Implicit Binding, "this" will refer to the context inside the object he is in use. It can also refer to an object passed as a parameter to the function in which it is used.  
* 3. For the New Binding principle, "this" is used in a constructor function (an object used to construct other objects), in that case this will refer to the instance of the object newly created with the constructor
* 4. For the Explicit Binding, "this" is iused along with Javascipt built in methods, "call" and "apply" that are used to swap object attributes. In that case "this" is explicitly defined  

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const square = {
    sideLength : 5,
    surface : function () {
        console.log(this.sideLength * this.sideLength);
    }
};

square.surface();

// Principle 3

// code example for New Binding

function MyScreen (description){
    this.width = description.width;
    this.height = description.height;
    this.screenType = description.screenType;
    this.resolution = function (){
        console.log(`The resolution of my ${this.screenType} is ${this.width} by ${this.height}`);
    };
    this.surface = function (){
        console.log(`The surface of my ${this.screenType} ` + this.width * this.height + 'px');
    };
}

const iPhone = new MyScreen({screenType: 'iPhone', width: 320, height: 600});
const desktop = new MyScreen({screenType: 'Desktop',width: 1280, height: 900});

iPhone.resolution();
desktop.resolution();

iPhone.surface();
desktop.surface();

// Principle 4

// code example for Explicit Binding

iPhone.resolution.call(desktop);
desktop.resolution.apply(iPhone)