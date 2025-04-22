import { Controller, Get, Param, Post } from '@nestjs/common';
import { RobotsService } from './robots.service';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Get()
  findAll() {
    return this.robotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.robotsService.findOneById(id);
  }

  @Post()
  create() {
    return this.robotsService.create();
  }

} 