/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(
    private readonly createGenreUseCase: any,
    private readonly listGenreUseCase: any,
    private readonly findoneGenreUseCase: any,
  ) {}
  create(data: CreateGenreDto) {
    return this.createGenreUseCase.execute(data);
  }

  findAll() {
    return this.listGenreUseCase.list();
  }

  findOne(id: string) {
    return this.findoneGenreUseCase.findone(id);
  }

  update(id: string, data: UpdateGenreDto) {
    return this.createGenreUseCase.update(id, data);
  }

  remove(id: string) {
    return this.listGenreUseCase.delete(id);
  }
}
