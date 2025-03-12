import { UserDto } from '../models/user.dto';

export class UserService {
    private _headers = {
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string) {}

    public async getMyUser(userName: string): Promise<UserDto> {
        const response = await fetch(`${this._baseUrl}/user/${userName}`, {
            headers: this._headers
        });

        return await response.json();
    }

}
