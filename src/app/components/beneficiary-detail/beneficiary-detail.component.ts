import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-beneficiary-detail',
  templateUrl: './beneficiary-detail.component.html',
  styleUrls: ['./beneficiary-detail.component.css']
})
export class BeneficiaryDetailComponent implements OnInit {

  displayedColumns: string[] = ['accountNo', 'beneficiaryName', 'actions'];
  items:any

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {

    this.getAllBeneficiary()

  }

  deleteBeneficiary(customerId:any, beneficiaryId:any){
    this.customerService.deleteBeneficiaryByCustomerIdAndBeneficiaryId(customerId, beneficiaryId).subscribe(res => {
      alert(res)
      this.getAllBeneficiary()
    },
    err=>{
      alert(err)
    })
  }

  getAllBeneficiary(){
    this.customerService.getAllBeneficiaryByCustomerId(this.customerService.customer.userId).subscribe(res => {
      console.log(res)
      this.items = res
    })
  }



}
