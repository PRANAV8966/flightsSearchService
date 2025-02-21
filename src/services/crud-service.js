class crudService  {
    constructor(repository) {
       this.repository = repository;

    }
    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            error:'something went wrong in the service layer of crudService';
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            error:'something went wrong in the service layer of crudService';
            throw {error};
        }
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            error:'something went wrong in the service layer of crudService';
            throw {error};
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            error:'something went wrong in the service layer of crudService';
            throw {error};
        }
    }

    async delete(id) {
        try {
            await this.repository.delete(id);
            return true;
        } catch (error) {
            error:'something went wrong in the service layer of crudService';
            throw {error};
        }
    }
}

module.exports = crudService;