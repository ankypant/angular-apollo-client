import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GetEmployeesGQL,
  GetEmployeesQuery
} from '@core/graphql/types.angularApollo';
import { pluck, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public employeeDetails: GetEmployeesQuery = {
    employee: []
  };

  private employeeDetails$: Observable<ApolloQueryResult<GetEmployeesQuery>>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public getEmployeesGQL: GetEmployeesGQL) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private getEmployeeDetails() {
    this.employeeDetails$ = this.getEmployeesGQL
      .watch()
      .valueChanges.pipe(takeUntil(this.destroy$));

    this.employeeDetails$.pipe(pluck('data')).subscribe(response => {
      this.employeeDetails.employee = response.employee;
    });
  }
}
