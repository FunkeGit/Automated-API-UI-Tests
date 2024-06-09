import {test,expect} from '@playwright/test'
var user_id;

//Get All Users Request
test('Total number of posts', async({request})=>{
   const TotalPosts = await request.get(`/posts`);

   const responseBody= JSON.parse(await TotalPosts.text())
   console.log(responseBody);

   expect(responseBody[99].id).toBe(100); //Retrieve number of total post from response body
   expect(TotalPosts.status()).toBe(200);

   const totalCountOfPosts= responseBody; //Total number of posts stored in a variable 
});

//Post Request
test("Create a New User", async ( {request})=>{
    const newUser=await request.post(`/posts`,
                                       {
                                        data:{"userid": 13, "Title": "Food is a source",  "body": "Chocomilo is so sweet",},
                                        headers:{ "Content-type": "application/json; charset=UTF-8"}
                                       }
                                       );
    
    console.log(await newUser.json())
    const responsePost= JSON.parse(await newUser.text()) //extraction of the value of new user from response body
    expect(responsePost.id).toBe(101);
    expect(newUser.status()).toBe(201);

   var resp= responsePost; //Store ID of newly created user in a variable
   user_id= resp.id;
});

//Get One User Request
test("Get Only One User", async({request})=>{
  const getOneUser= await request.get(`/posts/$user_id`)

  console.log(await getOneUser.json())
  const response=JSON.parse(await getOneUser.text()) //extraction of the value of new user from response body
   // expect(response.title).toBe('Food is a source');
    expect(getOneUser.status()).toBe(404);
});

//Patch Request
test('Update User', async( { request})=>{
    const response=await request.patch(`/posts/$user_id`,
                      {
                        data:{ "userid": 13, "Title": "Energy giving food", "body": "Spaghetti healthy source", },
                        headers:{
                          "Content-type": "application/json; charset=UTF-8"}
                      })
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

//Delete Request
test('Delete User', async ( { request})=>{
    const response= await request.delete(`/posts/$user_id`)
    expect(response.status()).toBe(200);
});
