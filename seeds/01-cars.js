
exports.seed = async function (knex) {

  // Deletes ALL existing entries
  await knex("cars").truncate()

  // Inserts seed entries
  await knex('cars').insert([
    { VIN: "1difjoiiqjdiwjdioqw1", make: "Lexus", model: "ES300h", milage: 55000 },
    { VIN: "1difjoiiqjdiwjdioqw1", make: "Mercedes Benz", model: "GL", milage: 50000 },
    { VIN: "1difjoiiqjdiwjdioqw1", make: "Honda", model: "Civic", milage: 90000 },
    { VIN: "1difjoiiqjdiwjdioqw1", make: "Toyota", model: "Prius", milage: 130000 },
    { VIN: "1difjoiiqjdiwjdioqw1", make: "Toyota", model: "Camry", milage: 100000 }
  ]);
};
