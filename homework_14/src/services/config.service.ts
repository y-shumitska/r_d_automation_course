import { ConfigDto } from '../dtos/config.dto';

export class ConfigService {
    public getApiConfig(): ConfigDto {
        return {
            baseUrl: 'https://official-joke-api.appspot.com'
        };
    }
}
