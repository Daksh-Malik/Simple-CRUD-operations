import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Daksh123@',
    database: 'crud_application'
}).promise();

export async function getAllData() {
    // const result = await pool.query("SELECT * FROM employees"); //here result stores array of arrays info but we only need one data array
    const [rows] = await pool.query("SELECT * FROM employees"); //therefore used this method 
    return rows;
}

export async function getData(id){
    // const [row] = await pool.query(`SELECT * FROM employees WHERE id = ${id}`); //this method is unsafe and can lead to SQL Injections
    const [row] = await pool.query(`SELECT * FROM employees WHERE id = ?`,[id]); //safe way is using '?'
    return row[0]; // [0] is used to extract only the object instead of all array
}

export async function createData(name, age, country, postion, wage){
    const [result] = await pool.query(
        `INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)`,
        [name, age, country, postion, wage]
    );
}

export async function deleteData(id){
    await pool.query(
        'DELETE FROM employees WHERE id = ?', [id]
    );
}

export async function updateData(name, age, country, postion, wage, id){
    await pool.query(
        "UPDATE employees SET name = ?, age = ?, country = ?, position = ?, wage = ? WHERE id = ?",
        [name, age, country, postion, wage, id]
    );
}

console.log(await getAllData()); //await is used for promise
console.log(await getData(1));
// createData("Parv",16,"India","CEO",900000);
console.log(await getAllData());