import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MICROSERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    port: 4001
                }
            }
        ])
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
