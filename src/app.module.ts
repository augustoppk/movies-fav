import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './modules/movie/movie.module';
import { GenreModule } from './modules/genre/genre.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [MovieModule, GenreModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
