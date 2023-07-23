/**
 * -------------------------------
 *          MongoDB connection
 * --------------------------------
 * 1. create account
 * 2. create a user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > View full code
 * 5. change the password in the uri
 * -------------------------------------
 *  
 * 
 * ***server site
 * 1. CREATE ----- POST
 * 2. app.post('/users', (req, res) => {})
 * 3. make the function async to use await inside it
 * 4. make sure use express.json() in middleware
 * 5. access the body: const user = req.body
 * 6. const result = await userCollection.insertedOne(user)
 * 7. res.send(result) 
 * 
 * 
 * ***client site
 * 1. create fetch
 * 2. create second parameter as an object
 * 3. provide.. method: 'POST'
 * 4. add headers:{'content-type': 'application/json'}
 * 5. add body: JSON.stringify(user) 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * -------------------------
 * READ MANY
 * ---------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * 
 * 
 * 
 * ----------------------------
 * DELETE
 * ---------------------------
 * 1. create app.delete('/users/:id, async(req, res) => {})
 * 2. specific unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId(id) }
 * 4.const result = await userCollection.deleteOne(query);
 * 
 * ***Client 
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 * 
 * 
*/