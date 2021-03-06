import Model from './Model';
// import bcrypt from 'bcryptjs';

class UsuariosModel extends Model {

    static get tableName() {
        return 'usuarios';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        import Devocoes from './DevocoesModel';
        
        return {
            devocoes: {
                relation: Model.ManyToManyRelation,
                modelClass: Devocoes,
                join: {
                    from: 'usuarios.id',
                    through: {
                        // modelClass: UsuariosDevocoes,
                        from: 'usuarios_devocoes.usuario_id',
                        to: 'usuarios_devocoes.devocao_id',
                    },
                    to: 'devocoes.id'
                }
            },
        };
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'uuid' },
                nome: { type: 'string', minLength: 1, maxLength: 255 },
                data_nasc: { type: 'date' },
                email: { type: 'email' },
                password_hash: { type: 'text' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }

}

export default UsuariosModel;