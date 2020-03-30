import { STRING, TIME } from 'sequelize';
import { MySqlOrm } from '../config/mysqlOrmConfig';

const ConversationModel = MySqlOrm.define('conversation', {
    id: {
        type: STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    chat: {
        type: STRING,
        allowNull: false,
        field: 'chat',
        validate: {
            notNull: {
                msg: "The field cannot be empty"
            }
        },
    },
    timestamp: {
        type: TIME
    }
}, {
    tableName: 'conversation',
    paranoid: false,
    timestamps: false
});

export default ConversationModel;