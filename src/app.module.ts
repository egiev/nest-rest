import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ReportModule } from './report/report.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
