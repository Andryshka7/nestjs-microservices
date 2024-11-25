import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getMockData() {
        const mockData = { date: Date.now() }
        return mockData
    }
}
