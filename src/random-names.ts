const chance = require('chance').Chance();


export const handler = async (event: { [key: string]: any }, context: { [key: string]: any }) => {

  // Use limit parameter if provided, else default to 10.
  const limit = +event.queryStringParameters?.limit || 10;

  try {
    if (event.httpMethod === 'GET') return {
      statusCode: 200,
      headers: { 'Cache-Control': 'no-store, max-age=0' },

      // Create array of defined length, map els to random name using Chance.
      body: JSON.stringify({ names: [...Array(limit)].map(x => chance.name()) }, null, 2)
    };

    return {
      statusCode: 400,
      headers: {},
      body: 'Only GET is accepted.'
    };

  } catch (error) {
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(error.stack || JSON.stringify(error, null, 2))
    }
  }
}
