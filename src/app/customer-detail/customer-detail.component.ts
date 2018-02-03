import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CustomerService } from '../Services/Customer-Service';
import { Customer } from '../models/customer';
import { JsonPipe } from '@angular/common';
import { ChangeChar } from '../pipes/changeToCapital';
import { AppError } from '../error-handle/app-error';
import { CityModel } from '../models/City-Model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [ ChangeChar],
  animations: [
    trigger('animationDetail', [
      state('in',
        style({
          background: '#cfd8dc',
          transform: 'translateX(0)'
        })
      ),
      transition('void => in', [
        animate(
          '500ms ease-out',
          style({
            transform: 'translateY(100%)',
            opacity: 0
          })
        )]),
    transition('in => void', [
      animate(
        '400ms',
        keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ])
      )
    ])
  ])]
})
export class CustomerDetailComponent implements OnInit {
// using input directive to get the customerDetail from parent
  customer: Customer = new Customer();
  cityModel: CityModel = new CityModel();
  id: number;
  // initialixing the animationDetail state
  animationDetail = 'in';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
// get the customer based on his id
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.customerService.getCustomer(this.id).subscribe(
        (customer: Customer) => {
          this.customer = customer;
          console.log(this.customer);
        },
        (error: AppError) => {
          console.log('error:', error);
        }
      );
    });
  }
// navigate to customer form on edit button click
  onEdit() {
    this.router.navigate(['/customers', this.id, 'edit']);
  }
  // delete the customer using customer service on delete button click
  onDelete() {
    if (confirm('Are you sure?')) {
      this.customerService.deleteCustomer(this.id).subscribe(
        () => {
          console.log('Customer deleted successfully.');
          this.router.navigate(['/customers']);
        },
        (error: AppError) => {
          console.log('error:', error);
        }
      );
    }
  }
  // handling the animation event start
  animationStarted(event) {
    console.log('Animation started:', event);
  }
// handling the animation event end
  animationDone(event) {
    console.log('Animation done:', event);
  }
}
