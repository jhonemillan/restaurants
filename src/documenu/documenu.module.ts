import { Module } from '@nestjs/common';
import { DocumenuService } from './documenu.service';
import { DocumenuController } from './documenu.controller';

@Module({
  providers: [DocumenuService],
  controllers: [DocumenuController],
})
export class DocumenuModule {}
