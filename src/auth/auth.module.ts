import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/model/auth.model";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}