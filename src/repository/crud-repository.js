class crudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data)  {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            error.message= 'something went wrong in the repository later of crudRepository';
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            error:'something went wrong in the repository later of crudRepository';
            throw {error};
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            error:'something went wrong in the repository later of crudRepository';
            throw {error};
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            error:'something went wrong in the repository later of crudRepository';
            throw {error};
        }
    }

    async delete(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            error:'something went wrong in the repository later of crudRepository';
            throw {error};
        }
    }
}

module.exports = crudRepository;