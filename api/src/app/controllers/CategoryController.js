const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    // Lista todos os registros
    const { orderBy } = request.query;

    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);

    if (!category) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(category);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name cannot be empty' });
    }

    const category = await CategoryRepository.create({
      name,
    });

    return response.json(category);
  }

  async update(request, response) {
    // Editar um registro

    const { id } = request.params;
    const {
      name,
    } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: 'category non-existent' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name and Email cannot be empty' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name or/and Email cannot be empty' });
    }

    const category = await CategoryRepository.update(id, {
      name,
    });

    return response.json(category);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await CategoryRepository.delete(id);
    // 204: No Content
    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
