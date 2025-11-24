/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneGenreRepository } from '../repository/findone-genre-repository';

@Injectable()
export class FindOnegenreUseCase {
    constructor(
        private readonly findonegenreRepository: FindOneGenreRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const genre = await this.findonegenreRepository.findone(id);
            this.logger.log("genre found successfully");
            if (!genre) return new NotFoundException("genre not found");
            return genre;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("genre not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}