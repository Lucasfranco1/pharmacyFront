export class SaleEntity{
    id?: string;
    medicine:string[];
    amount: number;
    unitValue: number;
    totalValue: number;
    
    

    constructor(medicine:string[], amount: number, unitValue: number, totalValue: number){
            this.medicine = medicine;
            this.amount = amount;
            this.unitValue = unitValue;
            this.totalValue = totalValue;                        
    }
}