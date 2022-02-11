import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type AbortMultipartUploadReturn = {
  __typename?: 'AbortMultipartUploadReturn';
  message: Scalars['String'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CompleteMultipartUploadReturn = {
  __typename?: 'CompleteMultipartUploadReturn';
  location: Scalars['String'];
};

export type CreateMultipartUploadReturn = {
  __typename?: 'CreateMultipartUploadReturn';
  key: Scalars['String'];
  uploadId: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  numParts?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
};

export type GetUrlReturn = {
  __typename?: 'GetUrlReturn';
  url: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Part = {
  __typename?: 'Part';
  ETag?: Maybe<Scalars['String']>;
  PartNumber?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type PartInput = {
  ETag?: InputMaybe<Scalars['String']>;
  PartNumber?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  created_at: Scalars['timestamptz'];
  date_of_birth?: Maybe<Scalars['date']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_valid: Scalars['Boolean'];
  last_name: Scalars['String'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  updated_at: Scalars['timestamptz'];
  vip: Scalars['Boolean'];
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_birth?: InputMaybe<Date_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_of_birth?: InputMaybe<Scalars['date']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_of_birth?: InputMaybe<Scalars['date']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vip = 'vip'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  abortMultipartUpload?: Maybe<AbortMultipartUploadReturn>;
  completeMultipartUpload?: Maybe<CompleteMultipartUploadReturn>;
  createMultipartUpload?: Maybe<CreateMultipartUploadReturn>;
  /** delete single row from the table: "test2_tables" */
  deleteTest2Table?: Maybe<Test2Tables>;
  /** delete data from the table: "test2_tables" */
  deleteTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** delete single row from the table: "test_tables" */
  deleteTestTable?: Maybe<TestTables>;
  /** delete data from the table: "test_tables" */
  deleteTestTables?: Maybe<TestTables_Mutation_Response>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "order_products" */
  delete_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** delete single row from the table: "order_products" */
  delete_order_products_by_pk?: Maybe<Order_Products>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** insert a single row into the table: "test2_tables" */
  insertTest2Table?: Maybe<Test2Tables>;
  /** insert data into the table: "test2_tables" */
  insertTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** insert a single row into the table: "test_tables" */
  insertTestTable?: Maybe<TestTables>;
  /** insert data into the table: "test_tables" */
  insertTestTables?: Maybe<TestTables_Mutation_Response>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update single row of the table: "test2_tables" */
  updateTest2Table?: Maybe<Test2Tables>;
  /** update data of the table: "test2_tables" */
  updateTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** update single row of the table: "test_tables" */
  updateTestTable?: Maybe<TestTables>;
  /** update data of the table: "test_tables" */
  updateTestTables?: Maybe<TestTables_Mutation_Response>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
};


/** mutation root */
export type Mutation_RootAbortMultipartUploadArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCompleteMultipartUploadArgs = {
  fileKey: Scalars['String'];
  parts?: InputMaybe<Array<InputMaybe<PartInput>>>;
  uploadId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateMultipartUploadArgs = {
  fileKey: Scalars['String'];
  metadata?: InputMaybe<Scalars['String']>;
  numParts?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootDeleteTest2TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest2TablesArgs = {
  where: Test2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTestTableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestTablesArgs = {
  where: TestTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ProductsArgs = {
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsertTest2TableArgs = {
  object: Test2Tables_Insert_Input;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest2TablesArgs = {
  objects: Array<Test2Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTableArgs = {
  object: TestTables_Insert_Input;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTablesArgs = {
  objects: Array<TestTables_Insert_Input>;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateTest2TableArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  pk_columns: Test2Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest2TablesArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  where: Test2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTestTableArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  pk_columns: TestTables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestTablesArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  where: TestTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_products" */
export type Order_Products = {
  __typename?: 'order_products';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_valid: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['Int'];
  price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_products" */
export type Order_Products_Aggregate = {
  __typename?: 'order_products_aggregate';
  aggregate?: Maybe<Order_Products_Aggregate_Fields>;
  nodes: Array<Order_Products>;
};

/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_Fields = {
  __typename?: 'order_products_aggregate_fields';
  avg?: Maybe<Order_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Products_Max_Fields>;
  min?: Maybe<Order_Products_Min_Fields>;
  stddev?: Maybe<Order_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Products_Sum_Fields>;
  var_pop?: Maybe<Order_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Products_Var_Samp_Fields>;
  variance?: Maybe<Order_Products_Variance_Fields>;
};


/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Products_Max_Order_By>;
  min?: InputMaybe<Order_Products_Min_Order_By>;
  stddev?: InputMaybe<Order_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Products_Avg_Fields = {
  __typename?: 'order_products_avg_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_products" */
export type Order_Products_Avg_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  _not?: InputMaybe<Order_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint */
  OrderProductsPkey = 'order_products_pkey'
}

/** input type for incrementing numeric columns in table "order_products" */
export type Order_Products_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Products_Max_Fields = {
  __typename?: 'order_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Products_Min_Fields = {
  __typename?: 'order_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  __typename?: 'order_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Products>;
};

/** on conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns?: Array<Order_Products_Update_Column>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "order_products". */
export type Order_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_products */
export type Order_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_products" */
export enum Order_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Products_Stddev_Fields = {
  __typename?: 'order_products_stddev_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_products" */
export type Order_Products_Stddev_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Products_Stddev_Pop_Fields = {
  __typename?: 'order_products_stddev_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_products" */
export type Order_Products_Stddev_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Products_Stddev_Samp_Fields = {
  __typename?: 'order_products_stddev_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_products" */
export type Order_Products_Stddev_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Products_Sum_Fields = {
  __typename?: 'order_products_sum_fields';
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order_products" */
export type Order_Products_Sum_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "order_products" */
export enum Order_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Order_Products_Var_Pop_Fields = {
  __typename?: 'order_products_var_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_products" */
export type Order_Products_Var_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Products_Var_Samp_Fields = {
  __typename?: 'order_products_var_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_products" */
export type Order_Products_Var_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Products_Variance_Fields = {
  __typename?: 'order_products_variance_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_products" */
export type Order_Products_Variance_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz'];
  customer_id: Scalars['uuid'];
  /** An object relationship */
  customers: Customers;
  id: Scalars['Int'];
  is_valid: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  order_date: Scalars['timestamptz'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  order_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  customers?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  customers?: InputMaybe<Customers_Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  downloadGetUrl?: Maybe<GetUrlReturn>;
  file?: Maybe<File>;
  listParts?: Maybe<Part>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  part?: Maybe<Part>;
  prepareUploadParts?: Maybe<GetUrlReturn>;
  /** fetch data from the table: "test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch aggregated fields from the table: "test2_tables" */
  test2TablesAggregate: Test2Tables_Aggregate;
  /** fetch data from the table: "test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test_tables" */
  testTables: Array<TestTables>;
  /** fetch aggregated fields from the table: "test_tables" */
  testTablesAggregate: TestTables_Aggregate;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDownloadGetUrlArgs = {
  fileKey: Scalars['String'];
};


export type Query_RootListPartsArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


export type Query_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrepareUploadPartsArgs = {
  fileKey: Scalars['String'];
  partNumber: Scalars['Int'];
  uploadId: Scalars['String'];
};


export type Query_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Query_RootTest2TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Query_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Query_RootTestTablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch aggregated fields from the table: "test2_tables" */
  test2TablesAggregate: Test2Tables_Aggregate;
  /** fetch data from the table: "test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test_tables" */
  testTables: Array<TestTables>;
  /** fetch aggregated fields from the table: "test_tables" */
  testTablesAggregate: TestTables_Aggregate;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Subscription_RootTest2TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Subscription_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Subscription_RootTestTablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** columns and relationships of "test2_tables" */
export type Test2Tables = {
  __typename?: 'test2Tables';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "test2_tables" */
export type Test2Tables_Aggregate = {
  __typename?: 'test2Tables_aggregate';
  aggregate?: Maybe<Test2Tables_Aggregate_Fields>;
  nodes: Array<Test2Tables>;
};

/** aggregate fields of "test2_tables" */
export type Test2Tables_Aggregate_Fields = {
  __typename?: 'test2Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test2Tables_Max_Fields>;
  min?: Maybe<Test2Tables_Min_Fields>;
};


/** aggregate fields of "test2_tables" */
export type Test2Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test2Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test2_tables". All fields are combined with a logical 'AND'. */
export type Test2Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  _not?: InputMaybe<Test2Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test2_tables" */
export enum Test2Tables_Constraint {
  /** unique or primary key constraint */
  Test2TablesPkey = 'test2_tables_pkey'
}

/** input type for inserting data into table "test2_tables" */
export type Test2Tables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test2Tables_Max_Fields = {
  __typename?: 'test2Tables_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test2Tables_Min_Fields = {
  __typename?: 'test2Tables_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test2_tables" */
export type Test2Tables_Mutation_Response = {
  __typename?: 'test2Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test2Tables>;
};

/** on conflict condition type for table "test2_tables" */
export type Test2Tables_On_Conflict = {
  constraint: Test2Tables_Constraint;
  update_columns?: Array<Test2Tables_Update_Column>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test2_tables". */
export type Test2Tables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test2Tables */
export type Test2Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test2_tables" */
export enum Test2Tables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test2_tables" */
export type Test2Tables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test2_tables" */
export enum Test2Tables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "test_tables" */
export type TestTables = {
  __typename?: 'testTables';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "test_tables" */
export type TestTables_Aggregate = {
  __typename?: 'testTables_aggregate';
  aggregate?: Maybe<TestTables_Aggregate_Fields>;
  nodes: Array<TestTables>;
};

/** aggregate fields of "test_tables" */
export type TestTables_Aggregate_Fields = {
  __typename?: 'testTables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TestTables_Max_Fields>;
  min?: Maybe<TestTables_Min_Fields>;
};


/** aggregate fields of "test_tables" */
export type TestTables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TestTables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_tables". All fields are combined with a logical 'AND'. */
export type TestTables_Bool_Exp = {
  _and?: InputMaybe<Array<TestTables_Bool_Exp>>;
  _not?: InputMaybe<TestTables_Bool_Exp>;
  _or?: InputMaybe<Array<TestTables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_tables" */
export enum TestTables_Constraint {
  /** unique or primary key constraint */
  TestTablesPkey = 'test_tables_pkey'
}

/** input type for inserting data into table "test_tables" */
export type TestTables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TestTables_Max_Fields = {
  __typename?: 'testTables_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TestTables_Min_Fields = {
  __typename?: 'testTables_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test_tables" */
export type TestTables_Mutation_Response = {
  __typename?: 'testTables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestTables>;
};

/** on conflict condition type for table "test_tables" */
export type TestTables_On_Conflict = {
  constraint: TestTables_Constraint;
  update_columns?: Array<TestTables_Update_Column>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** Ordering options when selecting data from "test_tables". */
export type TestTables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: testTables */
export type TestTables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_tables" */
export enum TestTables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test_tables" */
export type TestTables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test_tables" */
export enum TestTables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DownloadGetUrlQueryVariables = Exact<{
  fileKey: Scalars['String'];
}>;


export type DownloadGetUrlQuery = { __typename?: 'query_root', downloadGetUrl?: { __typename?: 'GetUrlReturn', url: string } | null };

export type CreateMultipartUploadMutationVariables = Exact<{
  fileKey: Scalars['String'];
}>;


export type CreateMultipartUploadMutation = { __typename?: 'mutation_root', createMultipartUpload?: { __typename?: 'CreateMultipartUploadReturn', uploadId: string, key: string } | null };

export type PrepareUploadPartsQueryVariables = Exact<{
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
  partNumber: Scalars['Int'];
}>;


export type PrepareUploadPartsQuery = { __typename?: 'query_root', prepareUploadParts?: { __typename?: 'GetUrlReturn', url: string } | null };

export type ListPartsQueryVariables = Exact<{
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
}>;


export type ListPartsQuery = { __typename?: 'query_root', listParts?: { __typename?: 'Part', ETag?: string | null, size?: number | null, PartNumber?: number | null } | null };

export type AbortMultipartUploadMutationVariables = Exact<{
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
}>;


export type AbortMultipartUploadMutation = { __typename?: 'mutation_root', abortMultipartUpload?: { __typename?: 'AbortMultipartUploadReturn', message: string } | null };

export type CompleteMultipartUploadMutationVariables = Exact<{
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
  parts: Array<InputMaybe<PartInput>> | InputMaybe<PartInput>;
}>;


export type CompleteMultipartUploadMutation = { __typename?: 'mutation_root', completeMultipartUpload?: { __typename?: 'CompleteMultipartUploadReturn', location: string } | null };


export const DownloadGetUrlDocument = gql`
    query downloadGetUrl($fileKey: String!) {
  downloadGetUrl(fileKey: $fileKey) {
    url
  }
}
    `;

export function useDownloadGetUrlQuery(options: Omit<Urql.UseQueryArgs<DownloadGetUrlQueryVariables>, 'query'>) {
  return Urql.useQuery<DownloadGetUrlQuery>({ query: DownloadGetUrlDocument, ...options });
};
export const CreateMultipartUploadDocument = gql`
    mutation createMultipartUpload($fileKey: String!) {
  createMultipartUpload(fileKey: $fileKey) {
    uploadId
    key
  }
}
    `;

export function useCreateMultipartUploadMutation() {
  return Urql.useMutation<CreateMultipartUploadMutation, CreateMultipartUploadMutationVariables>(CreateMultipartUploadDocument);
};
export const PrepareUploadPartsDocument = gql`
    query prepareUploadParts($fileKey: String!, $uploadId: String!, $partNumber: Int!) {
  prepareUploadParts(
    fileKey: $fileKey
    uploadId: $uploadId
    partNumber: $partNumber
  ) {
    url
  }
}
    `;

export function usePrepareUploadPartsQuery(options: Omit<Urql.UseQueryArgs<PrepareUploadPartsQueryVariables>, 'query'>) {
  return Urql.useQuery<PrepareUploadPartsQuery>({ query: PrepareUploadPartsDocument, ...options });
};
export const ListPartsDocument = gql`
    query listParts($fileKey: String!, $uploadId: String!) {
  listParts(fileKey: $fileKey, uploadId: $uploadId) {
    ETag
    size
    PartNumber
  }
}
    `;

export function useListPartsQuery(options: Omit<Urql.UseQueryArgs<ListPartsQueryVariables>, 'query'>) {
  return Urql.useQuery<ListPartsQuery>({ query: ListPartsDocument, ...options });
};
export const AbortMultipartUploadDocument = gql`
    mutation abortMultipartUpload($fileKey: String!, $uploadId: String!) {
  abortMultipartUpload(fileKey: $fileKey, uploadId: $uploadId) {
    message
  }
}
    `;

export function useAbortMultipartUploadMutation() {
  return Urql.useMutation<AbortMultipartUploadMutation, AbortMultipartUploadMutationVariables>(AbortMultipartUploadDocument);
};
export const CompleteMultipartUploadDocument = gql`
    mutation completeMultipartUpload($fileKey: String!, $uploadId: String!, $parts: [PartInput]!) {
  completeMultipartUpload(fileKey: $fileKey, uploadId: $uploadId, parts: $parts) {
    location
  }
}
    `;

export function useCompleteMultipartUploadMutation() {
  return Urql.useMutation<CompleteMultipartUploadMutation, CompleteMultipartUploadMutationVariables>(CompleteMultipartUploadDocument);
};