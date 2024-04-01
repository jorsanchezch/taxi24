import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InvoiceRepository } from 'src/infrastructure/persistence';

@Controller('invoices')
export class InvoiceController {
    constructor(
        private readonly invoiceRepo: InvoiceRepository, 
    ) {}

    @Get()
    findAll() {
        return this.invoiceRepo.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.invoiceRepo.getById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.invoiceRepo.delete(id);
    }
}
