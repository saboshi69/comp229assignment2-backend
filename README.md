### SERVER SETTING

1. Clone this repository `git clone https://github.com/saboshi69/comp229assignment2-backend.git` and Install all dependency `npm install`
2. Add .env file at the main root
3. In the .env file, add `DB_CONNECT="mongodb+srv://<<YOUR MONGODB USER>>:<<YOUR MONGODB PASSWORD>>@<<YOUR CLUSTER PATH>>.mongodb.net/?retryWrites=true&w=majority"`
4. You should find your step 3 information from MONGODB ATLAS PAGE, if not please contact me via school email
5. Type in `npm start` to start the server, it should be running on port 3000
6. You can also add `FRONTEND_DEV_URL=http://localhost:4200` and `FRONTEND_PROD_URL=https://some production route` in the .env to enable cors config.(Please uncomment the config in app.js if you do it)

### Why there is a api folder and index.js inside?

It is used in vercel hosting service. Please ignore it if you not trying to host it.

### API Endpoints

#### business list route

- GET /business: Fetch all business
- GET /business/:id: Fetch a single student by id
- POST /business: Add a new student
- PUT /business/:id: Update a student by id
- DELETE /business/:id: Delete a student by id

#### login route

- POST /user: Check if the username and password is correct

### TEST CASE

#### Create a new student (POST request):

URL: http://localhost:3000/business
Method: POST
Body (raw JSON):

```
{
   "name": "John Doe",
   "age": 22,
   "major": "Computer Science"
}
```

Click "Send". You should see the newly created student returned in the response, with an \_id field that MongoDB automatically generates.

#### Get all businesses (GET request):

URL: http://localhost:3000/business
Method: GET
Click "Send". You should see an array of all the business in the database.

#### Get a specific business (GET request):

URL: http://localhost:3000/business/{id} (replace {id} with an actual business ID)
Method: GET
Click "Send". You should see the specific student's data in the response.

#### Update a business (PUT request):

URL: http://localhost:3000/business/{id} (replace {id} with an actual business ID)
Method: PUT
Body (raw JSON):

```
{
   "name": "Jane Doe",
   "phone": "123"
}
```

Click "Send". You should see the updated student's data in the response.

#### Delete a business (DELETE request):

URL: http://localhost:3000/business/{id} (replace {id} with an actual business ID)
Method: DELETE
Click "Send". You should receive a 204 No Content response status code, meaning the student was successfully deleted.
Remember to replace {id} with an actual student ID for the GET, PUT, and DELETE requests. You get the student ID when you create a student.
