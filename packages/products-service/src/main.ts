import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { EnvConfig, validateEnvs } from './config/envs.config';

async function bootstrap() {
  let envs: EnvConfig;
  try {
    envs = validateEnvs(process.env);
    console.log('✅ Variables de entorno validadas correctamente');
  } catch (error) {
    console.error(error);
    console.error(
      'La aplicación no puede iniciar sin las variables de entorno requeridas',
    );
    process.exit(1);
  }

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: +process.env.PORT!,
      },
    },
  );
  await app.listen();
  console.log(`Product Microservices running on Port: ${envs.port}`);
}
bootstrap();
