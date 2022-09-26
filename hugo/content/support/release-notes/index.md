---
title: "Release notes"
description: "Release Notes"
lead: "Release notes are starting with version 2.3.0"
draft: false
---

## Version 2.6.3

#### Features

- Collecting of UnparsedData can now be disabled via the CollectUnparsedData prop
- JsonSource: The json property name that holds the data array can now be set with the PropertyNameOfDataArray prop
- Adding EntityFramework Bulk Operations extensions for MySql
- TableDefinition sql codes: Reduce columns for DbDestination/DbSource meta data retrieval to absolute minimum

#### Bug fixes

- JsonSource: Fixing bug that UnparsedData is not properly json formatting when using the Limit Property
- Fixed bug where Primary keys were incorrectly dropped/recreated when altering a table with CreateTableTask
- Make special version of TableDefinition.FromTableName explicitly for DbDestination or remove duplicates?
- Adding UnparsedData support for XmlSource (disabled by default)

## Version 2.6.2

#### Features

- Lookups now allow selecting multiple rows with same key from lookup source
- Creating beta version for extending Entity Framework's DbContext
- Improving support for BulkOperations (preparation for future EntityFramework support)
- ETLBoxNotSupportException replaced with System.NotSupportedException

#### Bug fixes 

- GetDatabaseListTask now properly treats databases with special characters in name

## Version 2.6.1

#### Features

- ETLBox.MySql now references MySql.Data 8.0.29
- XmlSource offers ElementNameRetrievalFunc to change the ElementName while processing Xml data
- DbDestination and DbMerge  support instant reading of value generated columns (e.g. computed columns, identites or default values) after inserting/updating data
- Fixing issue where IgnoreColumn set on mutiple props without column name threw an exception
- Meta data retrieval for procedures in SqlServer added: TableDefinition.FromProcedureName(...)
- ETLBoxError: Original exception now retrievable with GetException()
- New connector: (Sybase) SAP ASE

#### Bug fixes 

- Nullable int replaced with int type in ExcelColumn attribute \(non basic CLR types lead to issues in attributes\)


## Version 2.6.0

#### Features

- New transformation: WaitTransformation waits for other components (or TaskCompletionSources) before any data can pass
- Postgres schema search path logic is now supported (when only a table name is provided, the search path is used to find the first matching schema)
- LookupTransformation: PartialCacheSettings now expose SqlParameter which are applied to the LoadCacheSql
- ETLBoxError extended with additional Information from exception source (e.g. current request URI and progress count)
- Now supporting BulkOperations in DbDestination and DbSource (BulkUpdate, BulkDelete and BulkSelect)
- HttpResponseMessage is now part of StreamMetaData
- All streaming source&destinations now expose same unified constructor (string uri, ResourceType resourceType)
- Breaking Change: SqlTask.ExecuteScalar<T> will now return T as type (was Nullable<T> before)

#### Bug fixes

- DbMerge: Erroneous rows are now properly forwarded when conversion issue during data lookup occur
- LookupTransformation/Error linking: data conversion exceptions are now properly forwarded with improved error message
- Fixed bug that broke GetTableListTask when table name contained spaces
- HttpClient is not disposed anymore when cleaning up streaming source connectors
- DbMerge: ColumnMap flag IgnoreColumn=true is now properly observed
- DbMerge: identity columns are now ignored by default
- Lookup: ColumnMapping is now properly observed when using DbSource as lookup source in partial cache
- Improved exception message when type conversion of data fails
- QueryParameter extended with additional constructor (name, value) and fixed issue with null values


## Version 2.5.2

#### Features

- Streaming sources enhanced with RowModificationAction that allows to enrich rows with the current stream meta data or to modify rows before they are sent into the output buffer
- LookupTransformation: Property IgnoreDataTypes renamed to UseExactNumericTypes
- DbMerge supports duplicate filtering with the new flag 'FilterDuplicates'
- TextDestination: Added WriteHeaderFunc which writes a custom header line as first row into output file
- ColumnMap attribute extended with property "IgnoreColumn" which allows to ignore particular columns when reading or writing into a database


#### Bug fixes

- .NET 3.1 and .NET standard version contains references to 3.1 system packages, .NET 5  only references 5.0 system packages
- DbMerge now ignores flawed rows (redirected via LinkErrorTo) in delta output
- Improved exception handling for SqlTask.ExecuteReader
- SqlServer: fixed bug when reading column definition from tables containing HIERACHYID, GEOGRAPHY or GEOMETRY data type
- CreateTableTask: Fixed bug that prevented keywords to be used as default values
- TableDefinition in SqlServer: Sql specific keywords in default values (e.g. GETDATE) are now correctly read
- DbMerge: will throw exception if a readonly variable is used incorrectly as CompareColumn
- DbSource/DbDestination/DbMerge: Improved exception message if a column mapping with duplicate column names is provided
- Fixed bug when parsing sql statements that contained column names in single quotes
- Using GetNextUri/HasNextUri, error message improved if status code response is not 200
- Fixed in DbMerge: If input row is null, Exception is thrown: "TargetException: Non-static method requires a target"
- Lookup: retrieved column values are now converted automatically into type of destination property

## Version 2.5.1

#### Features 

- DbMerge: Added new MergeMode 'InsertsOnly'

## Version 2.5.0

#### Features

- Removed unnecessary command preparation and removed DoPrepareCommand property in connection managers
- Support that HttpRequestMessage can be changed in StreamMetaData when using GetNextUri/HasNextUri pattern
- Updated third party dependencies to latest version
- Upgraded CsvHelper to latest version (some Configurations are now part of Context object). This change may be a breaking change depending on your usage
 of CsvHelper specific configuration settings. Please refer to the {< link-ext url="https://joshclose.github.io/CsvHelper/change-log/" text="CsvHelper release notes" >} to see what changed here. 
- Breaking change: DataFlow.LoggingThresholdRows renamed to LogThreshold
- Breaking change: Combining CreateLogTable and ReadLogTable tasks into LogTask (e.g. use `LogTask.CreateLogTable(..)` instead)
- Breaking change: Introducing structured logging - core package now supports general ILogger interface instead NLog. You can now assign your ILogger instance to the static property `Logging.LogInstance`. Now NLog, Serilog and other logger supporting the log abstraction interface will be supported.  
- LoadProcess: adding SourceId column to ease joins with other tables
- Combining CustomTask/Package/Sequence into LogSection 
- Combining Create/Start/Abort/End/Read LoadProcessTasks into one LoadProcessTask (e.g. use `LoadProcessTask.Create()` instead)
- Added support for FOREIGN KEY  constraints in `CreateTableTask` and `TableDefinition` object
- Added Parquet source/destination

#### Bug fixes

- AggregationMethods Min/Max now support DateTime
- LogThreshold set on component now prioritized over global threshold value

## Version 2.4.4

#### Features

- CommandTimeout property limiting timeout for sql commands added to all connection managers
- KeepIdentity renamed to AllowIdentityInsert in DbDestination (Breaking change)

#### Bug fixes

- Improved support for Db2 - internal sql updated to work on zOS and LUW version

## Version 2.4.3

#### Features

- SqlConnectionManager exposes parameter to use row locks instead table lock for bulk insert operations
- DbSource: Sql property now allows query parameter

#### Bug fixes

- Improved exception handling for DbMerge: Added check for IdColumn
- XmlSource now correctly reads all tags if xml contains no line breaks


## Version 2.4.2

#### Features

- DataTypeConverter: Added helper method to convert from CLR type to SqlServer specific data type
- ExcelSource exposes ExcelColumns property, allowing to manual set column configuration
- All components now have delegate for progress tracking
- New destination: ExcelDestination

#### Bug fixes

- ExcelSource: EndColumn value in ExcelRange now starts counting at with 1 instead 0


## Version 2.4.1

#### Features

- Adding GetNextUri/HasNextUri pattern to DataFlowStreamDestinations
- ResourceType.File is now default for all streaming sources and destinations
- Streaming sources: New property CreateStreamReader allows usage of existing streams
- Streaming destinations: New property CreateStreamWriter allows to write into existing streams
- Adding integration to Azure Blob Storage for streaming sources and destinations (ResourceType.AzureBlob)
- ExcelSource&CsvSource: ReadFieldHeaders will read header data based on current configuration (can be called before the actual data flow started)
- DbMerge now exposes ColumnMapping property
- New transformation: FilterTransformation as alternative to linking with predicates
- ColumnRename: RenameFunc let you define a custom function to rename each column/prop separately with a custom function

#### Bug fixes

- SqlServer: fixing bug for Query parameter types without length (e.g. DECIMAL)
- DbSource: Using a sql query where the column names include white spaces, these white spaces are kept

## Version 2.4.0

#### Features 

- TextSource: ParseLineAction changed to ParseLineFunc
- StreamMetaData holds number of processed rows per request
- Added Redis source/destination (package ETLBox.Redis)
- Added Couchbase source/destination (package ETLBox.Couchbase)
- Added MongoDb source/destination (package ETLBox.MongoDb)
- Network class: Network.Cancel(..) allows to cancel a running complete data flow

#### Bug fixes

- DbMerge: For missing compare columns, the non-Id columns are now properly used detecting exists/updates
- Db2ConnectionManager/UseSqlBulkInsert: Fixed bug when parameter where exceeding Db2 maximum
- Network class: Networks now correctly cancels when exception in error path is thrown

## Version 2.3.2

#### Features 

*General*: 
- Auto generated xml documentation added to package - now visible with Intellisense or when browsing package content.

*DataFlow*: 
- ExcelSource exposes parsed header names in FieldHeaders property.
- DbSource has ColumnConverters property

## Version 2.3.1

#### Features

*ConnectionManagers*:
- ODBC/OleDb now have ConnectionManagerType property settable. 

*ControlFlow*:
- Db2 now has support for schemas
- CreateTableTask: Now offers functionality to alter tables (Alter() / CreateOrAlter()) 
- CreateSchemaTask supports authorization
- Added GetTableListTask (return all tables in database)

*DataFlow*:
- UnparsedData property for streaming sources now contains data of skipped rows.
- All executable sources allow to set limit for records to read
- Added property KeepIdentity to DbDestination which allows overwriting of Identity columns
- DataConverters available for DbDestination (allows to add custom column converter)
- (Breaking Change) DbSource: Replace List<string>ColumnNames prop with ICollection<ColumnMap> ColumnMapping 
- (Breaking change) Improved naming in ColumnMap Attribute (NewName = PropertyName, CurrentName = DbColumnName)
- (Breaking change) ColumnRename now uses RenameColumn attribute instead ColumnMapping. 

#### Bug fixes 

- Postgres connection manager now has full support for jsonb columns.  
- DbSource/Sql property: Whitespace in column aliases are now properly parsed as column names.
