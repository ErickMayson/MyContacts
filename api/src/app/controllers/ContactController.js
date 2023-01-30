const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Lista todos os registros
    const { orderBy } = request.query;

    const contacts = await ContactRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name && !email) {
      return response.status(400).json({ error: 'Name and Email cannot be empty' });
    }

    if (!name || !email) {
      return response.status(400).json({ error: 'Name or/and Email cannot be empty' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'Email taken.' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // Editar um registro

    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(400).json({ error: 'Contact non-existent' });
    }

    if (!name && !email) {
      return response.status(400).json({ error: 'Name and Email cannot be empty' });
    }

    if (!name || !email) {
      return response.status(400).json({ error: 'Name or/and Email cannot be empty' });
    }

    const emailExists = await ContactRepository.findByEmail(email);

    if (emailExists && emailExists.id !== id) {
      return response.status(400).json({ error: 'Email taken.' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await ContactRepository.delete(id);
    // 204: No Content
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
