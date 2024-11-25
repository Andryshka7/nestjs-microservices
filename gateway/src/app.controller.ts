import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private appService: AppService) {}
    @Get()
    async fetchData() {
        const mockData = await this.appService.getMockData()
        // const mockData = { date: Date.now() }

        return mockData
    }
}
