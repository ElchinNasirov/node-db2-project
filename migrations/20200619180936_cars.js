exports.up = async function (knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.text("VIN", 128).notNull()
        table.text("make", 128).notNull()
        table.text("model", 128).notNull()
        table.integer("milage").notNull()
        table.text("transmission", 80)
        table.text("titleStatus", 80)
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("cars")
};
