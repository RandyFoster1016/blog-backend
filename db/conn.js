
const { Client } = require('pg');
const client = new Client({
    user: 'randy',
    host: 'postgresql://blogdb_ug6o_user:M3YIcQnHvR65WGCvCNFqy56qhAuhLpEn@dpg-cull7pl6l47c73dqloug-a/blogdb_ug6o',
    database: 'blogdb',
    password: 'randy',
    port: 5432,
});

async function check(){
    await client.connect()
    // const res = await client.query('SELECT * from blogs')
    // console.log(res.rows[0]) // Hello world!
    // await client.end()  
}

check();
module.exports = client;
