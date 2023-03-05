import {Express, Request, Response } from "express";
import oracledb, {Connection, getConnection } from "oracledb";
import db from "../db";

let connection;
let d:db = new db;

async function run() {

    let connection;
    let d:db = new db;
    try {
      // Get a non-pooled connection
  
      connection = await oracledb.getConnection(d.dbConfig);
  
    //   await demoSetup.setupBf(connection);  // create the demo table
  
      const result = await connection.execute(
        // The statement to execute
        `SELECT * FROM users WHERE email = :idbv `,//OR username = ?
  
        // The "bind value" 3 for the bind variable ":idbv"
        ["cuongtranduc86@gmail.com"],
  
        // Options argument.  Since the query only returns one
        // row, we can optimize memory usage by reducing the default
        // maxRows value.  For the complete list of other options see
        // the documentation.
        {
          maxRows: 1
          //, outFormat: oracledb.OUT_FORMAT_OBJECT  // query result format
          //, extendedMetaData: true                 // get extra metadata
          //, fetchArraySize: 100                    // internal buffer allocation size for tuning
        });
  
      console.log(result.metaData); // [ { name: 'FARMER' }, { name: 'PICKED' }, { name: 'RIPENESS' } ]
      console.log(result.rows);     // [ [ 'Mindy', 2019-07-16T03:30:00.000Z, 'More Yellow than Green' ] ]
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          // Connections should always be released when not needed
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  
  run();

export const register = (req:Request,res:Response) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    
    try {
        connection =  oracledb.getConnection(d.dbConfig);
        const result = getConnection;
    } catch (error) {
        
    }
    
  
    // db.(q, [req.body.email, req.body.username], (err:Error, data:any) => {
    //   if (err) return res.status(500).json(err);
    //   if (data.length) return res.status(409).json("User already exists!");
  
    //   //Hash the password and create a user
    //   const salt = bcrypt.genSaltSync(10);
    //   const hash = bcrypt.hashSync(req.body.password, salt);
  
    //   const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    //   const values = [req.body.username, req.body.email, hash];
  
    //   db.query(q, [values], (err, data) => {
    //     if (err) return res.status(500).json(err);
    //     return res.status(200).json("User has been created.");
    //   });
    // });
  };

// export const register = (req:Request,res:Response)=>{
//     //check user
//     const q:String = "SLECT * FROM USERS WHERE EMAIL = ? OR USERNAME = ?";
//     try {
//         let connection:Connection = getConnection;
//         connection.queryStream
      
//     } catch (error) {
        
//     }
// };

export const login = (req:Request,res:Response)=>{
    
};

export const logout = (req:Request,res:Response)=>{
    
};