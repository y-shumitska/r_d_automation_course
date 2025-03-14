import { IApiService } from '../services/interfaces/i-api-service';
import { JokeDto } from '../dtos/joke.dto';
import { JokeTypesDto } from '../dtos/joke-types.dto';

export class JokesApi {
    public constructor(private apiService: IApiService) {}

    public async getRandomJoke(): Promise<[Response, JokeDto]> {
        const response = await this.apiService.get('/jokes/random');
        const responseJson = await response.json();

        return await [response as Response, responseJson];
    }

    public async getJokeById(jokeId: number): Promise<[Response, JokeDto]> {
        const response = await this.apiService.get(`/jokes/${jokeId}`);
        const responseJson = await response.json();

        return await [response as Response, responseJson];
    }

    public async getJokeTypes(): Promise<[Response, JokeTypesDto]> {
        const response = await this.apiService.get('/types');
        const responseJson = await response.json();

        return await [response as Response, { types: responseJson }];
    }

    public async getJokeByType(randomType: string): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get(`/jokes/${randomType}/random`);
        const responseJson = await response.json();

        return await [response as Response, responseJson];
    }

    public async getTenRandomJokes(): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get('/jokes/ten');
        const responseJson = await response.json();

        return await [response as Response, responseJson];
    }

    public async getSomeJokes(randomNumber: number): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get(`/jokes/random/${randomNumber}`);
        const responseJson = await response.json();

        return await [response as Response, responseJson];
    }
}
