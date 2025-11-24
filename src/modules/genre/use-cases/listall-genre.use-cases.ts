/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListGenreRepository } from '../repository/listall-genre-repository';

@Injectable()
export class ListGenreUseCase {
    constructor(
        private readonly listGenreRepository: ListGenreRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const genre = await this.listGenreRepository.list();
            this.logger.log("genre listed successfully");
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}