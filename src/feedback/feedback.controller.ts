import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.entity';

@Controller('api/feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() feedback: { name?: string; message: string; email?: string }): Promise<Feedback> {
    return this.feedbackService.create(feedback);
  }

  @Get()
  async findAll(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }
} 