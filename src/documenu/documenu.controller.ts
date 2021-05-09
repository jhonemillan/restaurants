import { Controller, Get, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DocumenuService } from './documenu.service';

@Controller('documenu')
export class DocumenuController {
  constructor(private documenuService: DocumenuService) {}

  @UseGuards(JwtAuthGuard)
  @Get('zipcode')
  getByZip(@Body() body: { zipcode: string }) {
    return this.documenuService.findByZipCode(body.zipcode);
  }

  @UseGuards(JwtAuthGuard)
  @Get('state')
  getByState(@Body() body: { state: string }) {
    return this.documenuService.findByState(body.state);
  }
}
