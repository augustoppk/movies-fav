import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    update(id: string, data: UpdateMovieDto) {
        throw new Error("Method not implemented.");
    }
}
