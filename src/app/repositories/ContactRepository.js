// eslint-disable-next-line import/no-extraneous-dependencies
const { uuid } = require('uuidv4');

const contacts = [

  {
    id: uuid(),
    name: 'Carlos',
    email: 'Carlos@mail.com',
    phone: '12345678',
    category_id: uuid(),
  },

];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
