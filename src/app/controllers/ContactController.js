const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Lista todos os registros
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro

  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
