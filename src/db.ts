import * as oracledb from 'oracledb';
// export const db = oracledb.createPool({
//     user: "<<USER_NAME>>",
//     password: "<<USER_PASSWORD>>",
//     connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST=127.0.0.1)(PORT = 1521))(CONNECT_DATA =(SERVICE_NAME='orcl21pdb')))"
//   })

export default class DatabaseConnection {
    private oracleDB = oracledb;
    public dbConfig = {
        user: "blog",
        password: "blog",
        connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST=127.0.0.1)(PORT = 1521))(CONNECT_DATA =(SERVICE_NAME='orcl21pdb')))"
    }

    public async init(): Promise<void> {
    }

    public async connectWithDB() {
        return new Promise((resolve, reject) => {
            this.oracleDB.getConnection(this.dbConfig, (err, connection) => {
                if (err) {
                    reject(err.message);
                }
                console.log('Connected with Database...');
                resolve(connection);
            });
        });
    }

    public doRelease(connection: any) {
        connection.release((err: any) => {
            if (err)
                console.error(err.message);
            console.log('connection released');
        });
    }
}