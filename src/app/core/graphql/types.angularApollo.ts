// tslint:disable
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};




export type Employee = {
   __typename?: 'Employee',
  id: Scalars['Int'],
  name: Scalars['String'],
  email?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  employeeDetails: Employee,
};


export type MutationEmployeeDetailsArgs = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  employee: Array<Maybe<Employee>>,
};

export type GetEmployeesQueryVariables = {};


export type GetEmployeesQuery = (
  { __typename?: 'Query' }
  & { employee: Array<Maybe<(
    { __typename?: 'Employee' }
    & Pick<Employee, 'name' | 'id' | 'email'>
  )>> }
);

export const GetEmployeesDocument = gql`
    query getEmployees {
  employee {
    name
    id
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmployeesGQL extends Apollo.Query<GetEmployeesQuery, GetEmployeesQueryVariables> {
    document = GetEmployeesDocument;
    
  }