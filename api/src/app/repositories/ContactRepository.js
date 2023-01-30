// eslint-disable-next-line import/no-extraneous-dependencies
const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
    SELECT T1.id, t1.name, t1.email, t1.phone, t1.category_id, t2.name as category_name
    FROM contacts T1
    LEFT JOIN categories T2 ON T2.id = T1.category_id
    ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]); // O Postgres permite fazer a inserção de registros utilizando o $

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    UPDATE contacts
    SET name = $1, email = $2, phone = $3, category_id = $4
    WHERE id = $5
    RETURNING *
    `, [name, email, phone, category_id, id]); // O Postgres permite fazer a inserção de registros utilizando o $

    return row;
  }

  async delete(id) {
    const deleteOP = await db.query(`
    DELETE FROM contacts WHERE id = $1
    `, [id]); // O Postgres permite fazer a inserção de registros utilizando o $

    return deleteOP;
  }
}
module.exports = new ContactRepository();
