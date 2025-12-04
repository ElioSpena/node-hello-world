function countVowels(userWord) {
  const vowals = ["a", "e", "i", "o", "u"];
  let count = 0;
  const letters = [...userWord.toLowerCase()];

  if (userWord === "") {
    console.log("inserire una parola o una frase!");
    return 0;
  } else {
    letters.forEach((letter) => vowals.includes(letter) && count++);
  }

  return count;
}

export { countVowels };
