// >>> An enum is a special "class" that represent a group of constants.
// >>> Enums come in two flavors String and Numeric. 

// enum CardinalDirections {
//     East, West, North, South
// }
// console.log(CardinalDirections.East);

// OR //

// >>> Numeric Enums - Initialized
// >>> We can set the value of the first numeric enum and have it auto increment from that.

// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   }
//   console.log(CardinalDirections.North);
//   console.log(CardinalDirections.West);

// >>> Numeric Enums -fully Initialized
// >>> You can assign unique number values for each enum value. Then the values will not increment.

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   console.log(StatusCodes.NotFound);
//   console.log(StatusCodes.Success);

// >>> Sting Enums >>> 
// >>> Enums can also contain String values

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  
  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);