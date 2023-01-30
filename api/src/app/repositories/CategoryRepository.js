// eslint-disable-next-line import/no-extraneous-dependencies
const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
    SELECT *
    FROM categories
    ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [name]);
    return row;
  }

  async create({
    name,
  }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `, [name]); // O Postgres permite fazer a inserção de registros utilizando o $

    return row;
  }

  async update(id, {
    name,
  }) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id]); // O Postgres permite fazer a inserção de registros utilizando o $

    return row;
  }

  async delete(id) {
    const deleteOP = await db.query(`
    DELETE FROM categories WHERE id = $1
    `, [id]); // O Postgres permite fazer a inserção de registros utilizando o $

    return deleteOP;
  }
}
module.exports = new CategoryRepository();
