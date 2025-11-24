/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ListGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const genre = await this.prisma.genre.findMany({
           
        });;
        if (!genre) {throw new NotFoundException("genre not found");}
        return genre;
    }
}