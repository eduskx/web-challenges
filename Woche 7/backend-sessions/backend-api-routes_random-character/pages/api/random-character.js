import Chance from "chance";

const chance = new Chance();
const character = {
  name: chance.name(),
  age: chance.age(),
  profession: chance.profession(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
