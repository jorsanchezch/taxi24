import { Inject } from "@nestjs/common";
import { User } from "src/domain/models";
import { UserRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";
import { CreateUserRequest } from "../dtos";

export class CreateUserUseCase implements UseCase {
    constructor(
        @Inject(UserRepository)
        private readonly userRepo: UserRepository, 
    ) {}

    execute(validated: CreateUserRequest): Promise<User> {
        try {
            const user = this.userRepo.create(validated.toModel());

            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }
}