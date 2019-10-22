const request = require('supertest');

const app = require('../../app');

describe('Default Rout', () => {
  it('should recieve "200" on GetRout', async () => {
    const response = await request(app)
      .get('/api/v1/');
    expect(response.status).toBe(200);
  });

  it('should recieve "200" on PostRout', async () => {
    const response = await request(app)
      .post('/api/v1/')
      .send({});
    expect(response.status).toBe(200);
  });

  it('should recieve "200" on PatchRout', async () => {
    const response = await request(app)
      .patch('/api/v1/')
      .send({});
    expect(response.status).toBe(200);
  });

  it('should recieve "200" on DeleteRout', async () => {
    const response = await request(app)
      .delete('/api/v1/')
      .send({});
    expect(response.status).toBe(200);
  });
});
