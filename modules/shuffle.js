function immutableShuffle(array) {
  const clonedArray = Array.from(array); // Create a new array to not mutate the existing one.

  for (let index = clonedArray.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const temporary = clonedArray[index];
    clonedArray[index] = clonedArray[randomIndex];
    clonedArray[randomIndex] = temporary;
  }

  return clonedArray;
}

module.exports = function shuffle(array) {
  if (array && array.length > 1) {
    return immutableShuffle(array);
  }

  return array;
};
