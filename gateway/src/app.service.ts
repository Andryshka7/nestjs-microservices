import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class AppService {
    constructor(@Inject('MICROSERVICE') private readonly microserviceClient: ClientProxy) {}

    async getMockData() {
        const mockData = await lastValueFrom<{ date: number }>(
            this.microserviceClient.send('get_mockData', {})
        )
        return mockData
    }
}
