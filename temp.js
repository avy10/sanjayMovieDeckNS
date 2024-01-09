/* function addElementAtRandomPlace(array, elementToAdd) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  console.log("RANDOMINDEX", randomIndex)
  // Use map to create a new array with the new element at the random index
let newArray;
if(randomIndex === 0) {
	array.unshift(elementToAdd)
} else if (randomIndex > array.length - 1){
	array.push(elementToAdd)
} else {
   newArray = array.map((item, index) =>
    index === randomIndex ? elementToAdd : item
  );

}

console.log(newArray)
  
  // Update the original array
  array.length = 0;
  array.push(...newArray);
} */
function addElementAtRandomPlace(array, elementToAdd) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  
  // Use map to create a new array with the new element at the random index
  const newArray = array.map((item, index) =>
    index === randomIndex ? elementToAdd : item
  );
  
  // Update the original array
  array.length = 0;
  array.push(...newArray);
}

const myArray = [1, 2, 3, 4, 5];
const elementToAdd = 10;

addElementAtRandomPlace(myArray, elementToAdd);

console.log(myArray); 

addElementAtRandomPlace(myArray, elementToAdd);
console.log(myArray); 
