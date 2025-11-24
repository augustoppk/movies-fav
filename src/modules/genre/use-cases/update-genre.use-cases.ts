/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { UpdateGenreRepository } from '../repository/update-genre-repository';

@Injectable()
export class UpdateGenreUseCase {
    constructor(
        private readonly updateGenreRepository: UpdateGenreRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateGenreDto) {
        try {
            const genre = await this.updateGenreRepository.update(id,data);
            this.logger.log("genre updated successfully");
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}