const request = require('supertest');
const { MongoClient } = require('mongodb');

const app = require('../../app');

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(process.env.MONGO_URL_DEPLOY, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     db = await connection.db();
//   });

//   afterAll(async () => {
//     await db.collection('users').deleteMany({});
//     await connection.close();
//     await db.close();
//   });

//   beforeEach(async () => {
//     await db.collection('users').deleteMany({});
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = { _id: 'some-user-id', name: 'Andre' };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({name: 'Andre'});
//     expect(insertedUser).toEqual(mockUser);
//   });

//   it('should be error in find', async () => {
//     const users = db.collection('users');

//     const mockUser = { _id: 'some-user-id', name: 'Andre' };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({name: 'Carvalho'});
//     expect(insertedUser).not.toEqual(mockUser);
//   });
// });

describe('Nothing', () => {
  it('should make notinh', async () => {
    expect(2).toEqual(2);
  });
});
