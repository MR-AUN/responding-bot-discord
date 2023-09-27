import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NecordModule } from 'necord';
import { ConfigModule } from "@nestjs/config";

@Module({
  
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      intents: ['Guilds', 'GuildMessages', 'DirectMessages']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
