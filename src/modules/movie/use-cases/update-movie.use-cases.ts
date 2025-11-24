/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { UpdateMovieRepository } from "../repository/update-movie.repository";
import { Logger } from "@nestjs/common/services/logger.service";


@Injectable()
export class UpdateMovieUseCase {
    execute(id: string, data: UpdateMovieDto) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly updateMovieRepository: UpdateMovieRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateMovieDto) {
        try {
            const movie = await this.updateMovieRepository.update(id,data);
            this.logger.log("movie updated successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}