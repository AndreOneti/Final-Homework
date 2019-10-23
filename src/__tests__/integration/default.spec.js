const request = require('supertest');

const app = require('../../app');

describe('Default Rout', () => {
  it('should recieve "200" on GetRout', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response.status).toBe(200);
  });

  it('should have title on response', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response.body).toHaveProperty('title');
  });

  it('should title to be "Home Work API"', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response.body.title).toBe('Home Work API');
  });

  it('should have API on response', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response.body).toHaveProperty('API');
  });

  it('should have API list', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response.body.API).toEqual(expect.arrayContaining(["/api/"]));
  });
});
