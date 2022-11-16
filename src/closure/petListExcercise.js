function createPetList() {
  // Tu código aquí 👈
  const petList = [];
  return function (newPet) {
    if (newPet) {
      petList.push(newPet);
    }
    return petList;
  };
}
const myPetList = createPetList();

console.log(myPetList("michi"));
console.log(myPetList("firulais"));
console.log(myPetList());
