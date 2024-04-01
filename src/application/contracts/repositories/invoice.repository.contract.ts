import { Invoice, Trip } from 'src/domain/models/';
import Repository from './repository.contract'

export interface IInvoiceRepository extends Repository<Invoice> {
    generate(trip: Trip): Promise<Invoice>;
}