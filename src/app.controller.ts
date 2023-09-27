import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Context, ContextOf, On, Once, SlashCommand, SlashCommandContext } from 'necord';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
