const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneid, userOne, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async ()=>{
    const response = await request(app).post('/users').send({
        name: 'Andy',
        email: 'andy@example.com',
        password: 'toystory'
    }).expect(201)

    // assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //assertions about the response
    //expect(response.body.user.name).toBe('Andy')
    expect(response.body).toMatchObject({
        user: {
            name: 'Andy',
            email: 'andy@example.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('toystory')
})

test('Should log in existing user', async ()=>{
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneid)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async()=>{
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thas'
    }).expect(400)
})

test('Should get profile for user', async ()=>{
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async()=>{
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async ()=>{
    await request(app)
        .delete('/users/me')
        .set('Authorization',  `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneid)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async ()=>{
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

//send a file using supertest

test('Should upload avatar image', async()=>{
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    const user = await User.findById(userOneid)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

//update

test('Should update valid user fields', async ()=>{
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        name: 'Jess'
    })
    .expect(200)
    const user = await User.findById(userOneid)
    expect(user.name).toEqual('Jess')
})

test('Should not update invalid user fields', async ()=>{
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        location: 'Jaipur'
    })
    .expect(400)
})

//
// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated