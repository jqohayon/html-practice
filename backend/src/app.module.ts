import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { Feedback } from './feedback/feedback.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'feedback_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Feedback]),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class AppModule {} 