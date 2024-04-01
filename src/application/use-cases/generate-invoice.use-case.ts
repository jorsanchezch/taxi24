import { Inject } from "@nestjs/common";
import { Invoice, Trip } from "src/domain/models";
import { InvoiceRepository } from "src/infrastructure/persistence";
import { UseCase } from "./use-case";

export class GenerateInvoiceUseCase implements UseCase {
    constructor(
        @Inject(InvoiceRepository)
        private readonly invoiceRepo: InvoiceRepository, 
    ) {}

    async execute(trip: Trip): Promise<Invoice> {
        try {
            const invoice = await this.invoiceRepo.generate(trip);

            return invoice;
        } catch (error) {
            
            throw new Error('Failed to generate invoice for trip: ' + trip.id);
        }
    }
}