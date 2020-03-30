import mysql from 'mysql';
import { DB_CONFIG } from './dbConfig';

export class MysqlConnection {
    connection = null;

    constructor() {
        this.createConnection();
    }

    createConnection = () => {
        this.connection = mysql.createConnection(DB_CONFIG);
    }

    doQuery = (sql) => {
        this.connection.connect();

        return new Promise((resolve, reject) => {
            this.connection.query(sql, (error, results, fields) => {
                if (error) {
                    return reject(error);
                }

                console.log(fields);
                console.log(results);
                resolve(results);
            });
            this.connection.end();
        });
    }
}