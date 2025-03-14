import { beforeAll, describe, expect, test } from 'vitest';
import { ConfigService } from 'src/services/config.service';
import { FetchApiService } from 'src/services/fetch-api.service';
import { JokesApi } from 'src/apis/jokes.api';

describe('The Jokes API tests', () => {
    let jokesApi: JokesApi;

    beforeAll(() => {
        const configService = new ConfigService();
        const config = configService.getApiConfig();
        const fetchApi = new FetchApiService(config.baseUrl);
        jokesApi = new JokesApi(fetchApi);
    });

    test('All values in the response of the getRandomJoke method must have correct types', async () => {
        const [response, joke] = await jokesApi.getRandomJoke();
        expect(response.status).toBeOneOf([200, 201]);
        expect(typeof joke.type).toBe('string');
        expect(typeof joke.setup).toBe('string');
        expect(typeof joke.punchline).toBe('string');
        expect(typeof joke.id).toBe('number');
    });

    test('The id from the getRandomJoke equals the id from the getJokeById', async () => {
        const [preresponse, prejoke] = await jokesApi.getRandomJoke();
        const [response, joke] = await jokesApi.getJokeById(prejoke.id);
        expect(response.status).toBeOneOf([200, 201]);
        expect(joke.id).toBe(prejoke.id);
    });

    test('The response of the getJokeTypes contains an array with certain values', async () => {
        const [response, typesDto] = await jokesApi.getJokeTypes();
        expect(response.status).toBeOneOf([200, 201]);
        expect(typesDto.types).toEqual(expect.arrayContaining(['general', 'knock-knock', 'programming', 'dad']));
    });

    test('The response of the getJokeByType method returns the same type used in the url', async () => {
        const [response, jokes] = await jokesApi.getJokeByType('programming');
        expect(response.status).toBeOneOf([200, 201]);
        expect(jokes[0].type).toEqual('programming');
    });

    test('The response of the getTenRandomJokes returns 10 objects', async () => {
        const [response, jokes] = await jokesApi.getTenRandomJokes();
        expect(response.status).toBeOneOf([200, 201]);
        expect(jokes.length).toBe(10);
    });
});
