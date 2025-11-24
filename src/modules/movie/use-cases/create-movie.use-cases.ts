import { Injectable, Logger } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { CreateMovieRepository } from '../repository';

@Injectable()
export class CreateMovieUseCase {
  createmovieRepository: any;
  constructor(
    private readonly createMovieRepository: CreateMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateMovieDto) {
    try {
      const movie = await this.createMovieRepository.create(data);
      this.logger.log('movie created successfully');
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
