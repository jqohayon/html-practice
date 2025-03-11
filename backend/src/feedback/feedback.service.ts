import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback)
    private feedbackModel: typeof Feedback,
  ) {}

  async create(feedback: { message: string }): Promise<Feedback> {
    return this.feedbackModel.create(feedback);
  }

  async findAll(): Promise<Feedback[]> {
    return this.feedbackModel.findAll();
  }
} 