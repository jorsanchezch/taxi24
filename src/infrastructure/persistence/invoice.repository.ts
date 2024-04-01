import { TypeOrmRepository } from "./shared/typeorm.repository";
import { Invoice, Trip } from "src/domain/models";
import { IInvoiceRepository } from "src/application/contracts/repositories";

// Correct naming ideally would be TypeOrmInvoiceRepository implements InvoiceRepository
export class InvoiceRepository extends TypeOrmRepository<Invoice> implements IInvoiceRepository {
    constructor() {
        super(Invoice);
    }

    generate(trip: Trip): Promise<Invoice>{
        return this.repo.find()[0];
    }
}