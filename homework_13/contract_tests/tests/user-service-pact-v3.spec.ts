import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { UserService } from '../src/services/user.service';
import { UserDto } from '../src/models/user.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('Pact V3 Store user service contract tests', () => {
    let userService: UserService;

    const provider = new PactV3({
        consumer: 'user-consumer-v3',
        provider: 'user-provider-v3'
    });

    const userResponseExample: UserDto =
        {
            id: 1,
            username: 'superJohn',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com',
            password: 'superpassword',
            phone: '0983242819',
            userStatus: 2
        } as unknown as UserDto;

    const expectedBody = MatchersV3.like(userResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('User service returns expected response', () => {
            provider
                .given('User exists')
                .uponReceiving('A request to get a user')
                .withRequest({
                    method: 'GET',
                    path: '/user/superJohn',
                    headers: {
                        accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (mockUserService) => {
                userService = new UserService(
                    mockUserService.url
                );

                const user: UserDto = await userService.getMyUser('superJohn');

                expect(user).to.contain.keys(
                    'id',
                    'username',
                    'firstName',
                    'lastName',
                    'email',
                    'password',
                    'phone',
                    'userStatus'
                );
                expect(user.id).to.be.a('number');
                expect(user.username).to.be.a('string');
                expect(user.firstName).to.be.a('string');
                expect(user.lastName).to.be.a('string');
                expect(user.email).to.be.a('string');
                expect(user.password).to.be.a('string');
                expect(user.phone).to.be.a('string');
                expect(user.userStatus).to.be.a('number');
            });
        });
    });

    describe('Pact V3 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io/v2',
                pactUrls: [path.resolve(process.cwd(), './pacts/user-consumer-v3-user-provider-v3.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
