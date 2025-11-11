import { Controller, Get, Post, Body } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genre') // <- importante!
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.genresService.create(name);
  }

  @Get()
  findAll() {
    return this.genresService.findAll();
  }
}