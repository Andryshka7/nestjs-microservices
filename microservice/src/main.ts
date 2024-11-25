import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from 'modules/app.module'

const PORT = 4001

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: PORT
        }
    })
    await app.listen()
    console.log(`Miscroservice is working on port ${PORT}`)
}

bootstrap()
