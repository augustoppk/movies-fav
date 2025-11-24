import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  CreateMovieUseCase,
  DeleteMovieUseCase,
  FindOneMovieUseCase,
  ListMovieUseCase,
  UpdateMovieUseCase,
} from './use-cases';

@Injectable()
export class MovieService {
  constructor(
    private readonly createMovieUseCase: CreateMovieUseCase,
    private readonly listMovieUseCase: ListMovieUseCase,
    private readonly findOneMovieUseCase: FindOneMovieUseCase,
    private readonly deleteMovieUseCase: DeleteMovieUseCase,
    private readonly updateMovieUseCase: UpdateMovieUseCase,
  ) {}

  create(data: CreateMovieDto) {
    return this.createMovieUseCase.execute(data);
  }

  findAll() {
    return this.listMovieUseCase.listall();
  }

  findOne(id: string) {
    return this.findOneMovieUseCase.findone(id);
  }

  update(id: string, data: UpdateMovieDto) {
    return this.updateMovieUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteMovieUseCase.delete(id);
  }
}
