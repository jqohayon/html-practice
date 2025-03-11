import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { Feedback } from './feedback/feedback.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'feedback',
      models: [Feedback],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Feedback])
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class AppModule {} 