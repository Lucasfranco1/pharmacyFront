import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMedicineComponent } from './table-medicine.component';

describe('TableMedicineComponent', () => {
  let component: TableMedicineComponent;
  let fixture: ComponentFixture<TableMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
