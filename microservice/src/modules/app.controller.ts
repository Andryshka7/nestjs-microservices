import { Controller } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private appService: AppService) {}

    @MessagePattern('get_mockData')
    async handleGetMockData() {
        return this.appService.getMockData()
    }
}
