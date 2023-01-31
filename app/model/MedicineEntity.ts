export class MedicineEntity{
    id?: number;
    nameMedicine:string;
    factoryLaboratory: string;
    manufacturingDate: string;
    dueDate: string;
    stockQuantity: string;
    unitValue: string;

    constructor(nameMedicine:string, factoryLaboratory: string, manufacturingDate: string, dueDate: string,
        stockQuantity: string, unitValue: string){
            this.nameMedicine = nameMedicine;
            this.factoryLaboratory = factoryLaboratory;
            this.manufacturingDate = manufacturingDate;
            this.dueDate = dueDate;
            this.stockQuantity = stockQuantity;
            this.unitValue = unitValue;

    }
}