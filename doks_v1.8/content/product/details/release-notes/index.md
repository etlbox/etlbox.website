---
title: "Release notes"
description: "ETLBox Release notes (starting with 2.3.1)"
lead: "Release notes are starting with version 2.3.0."
draft: false
images: []
menu:
  docs:
    parent: "details"
weight: 120
toc: true
---

## Version 3.7.0

#### Features

- Distinct: Added counter properties for distinct and duplicate values
- DataTypeCheck: Added counter properties for valid and flawed rows
- RowValidation: Added counter properties for valid and invalid data
- New transformation: ConditionalSplit
- Adding BulkOperations extensions for any IDbConnection
- Flexible mapping of property to column names for DbDestination and DbSource
- ExcelSource can now also read from hidden sheets (enabled by default)
- [BREAKING] Renaming DestinationTableDefinition to TableDefinition in DbMerge

#### Bug Fixes:

- Fixed issues when reading value generated columns

## Version 3.6.1

_Resolved issues with corrupted packaging in version 3.6.0. This release contains no functional changes._

## Version 3.6.0

#### Features

_This release includes an anonymous installation tracking feature to help us understand how often ETLBox is installed and improve the product. No personal data is collected, and the tracking applies only to free users without a license key. If you want to disable this feature or would like to have more information about it, please contact us!_

- XmlDestination now offers ShouldConvertDynamicPropToAttribute to specify attributes for dynamic rows
- Package update - this version will still support .NET Framework
- LookupTransformation: Added RemoveUnmatchedRows flag which will omit rows that don't match to simulate INNER JOIN behavior

#### Bug Fixes:

- Renamed automatic void linking to ComplementVoidLinking, disabled by default, fixed issues with backpressure

## Version 3.5.2

#### Features:

- Pivot: ValueCombination has been removed
- Pivot: Added FlattenAggregationResults to flatten data if 2 or more PivotValues are used
- Pivot: Added GrandTotal for columns and rows
- Pivot: PivotValues now use same aggregation methods, custom functions and predicates like AggregationColumn
- ColumnTransformation: ReorderFunc now accepts object as return value, e.g. for sorting of string or date values
- CustomDestination: Adding WriteActionAsync

#### Bug Fixes:

- FilterTransformation: Fixed issue for backpressure cases

## Version 3.5.1

#### Features:

- SqlTask.ExecuteNonQuery/ExecuteReader/ExecuteScalar: Added CancellationToken parameter
- Aggregation now also works only with GroupColumns \(equivalent to a GROUP BY\)
- ColumnTransformation: Order index is now equivalent to the position in the resulting order
- Aggregation using dynamic objects: 'double' is preserved as data type when aggregating
- ColumnTransformation: Check dynamic object performance
- DbMerge now offers a CompareFunc to override comparison check
- Lookup: Added ShouldSkipRow which specifies a condition when a row should be skipped
- Pivot: Renaming PivotValueColumn to PivotValue, ValueAggregationFunc to ValueCombination and DuplicateAggregationFunc to ValueAggregation
- Pivot: Introducing PivotRow to specify the columns for grouping

#### Bug Fixes:

- DbMerge: Proper exception message when one of the IdColumns of a POCO is not writeable
- Exception during stream creation in streaming destination now written into Exception property


## Version 3.5.0

#### Features:

- Network validation: Added "default" void linking if component is linked with a single predicate
- Network class extended with helper method LinkAllErrorTo()
- \[BREAKING\] ColumnRename renamed to ColumnTransformation, adding option to reorder or remove columns
- Sort: Support for "default" data types like DateTime and String
- Network: added StartWith() and LinkTo() methods directly on Network class (less code for linking needed)
- Pivot: Added handling of duplicates
- FilterTransformation: Added count of filtered/unfiltered rows
- Added ErrorCount property for all components (only if LinkErrorTo redirects flawed rows)
- New Component: RowValidation
- Network initialization: Reduced initialization steps for larger networks
- Updated dependencies to latest versions

#### Bug Fixes:

- Pivot: KeepEmptyValues now have aligned order in dynamic output object
- Fixed issue where exceptions in predicates were not properly handled
- Improving XmlSource when reading using dynamic objects

## Version 3.4.4

#### Features:

- Aggregation has new AggregationMethods and functionalities (e.g. Mean, Median, Mode, CountDistinct, CustomAggregation, Predicate,...)
- New transformation: Pivot

#### Bug Fixes:

- Fixes issue with cloning dynamic objects that contain null values

## Version 3.4.3

#### Features:

- Added ExecutionStartTime/ExecutionEndTime on each component
- Added "Tag" object for custom reference

#### Bug Fixes:

- Fixes issue with "hanging network" introduced with 3.4.2

## Version 3.4.2

#### Features:

- Updating ExcelDataReader to 3.7.0
- Network: Added OnInitialization/OnCompletion/OnException callbacks
- SqlConnectionManager: 'KeepNulls' property enables keeping null value when inserted into column with DEFAULT constraint
- Added DataTypeTester class that automatically detects and convert string into CLR types in a dynamic object

#### Bug Fixes:

- ParquetDestination: Write order property now also taken into account for dynamic objects
- Fixed typo in method CreateIndexTask.CreateOrRecreate()
- Fixed default value issue in cloning library
- Changed cloning library back to Deep Cloner (this fixed security issue with old version System.Text.RegularExpression)

## Version 3.4.1

#### Features:

- DataFrame now automatically converts enums into integer values
- Multicast: Allows to override default cloning with custom cloning strategy
- Updating packages to latest versions (including CsvHelper to 33.0.1)

#### Bug Fixes:

- Fixing issue with thread unsafe calls when cloning dynamic objects in Multicast

## Version 3.4.0

#### Features:

- Improved Odbc support
- Improved TableDefinition search, using default schema retrieval as backup
- DbSource: Use ADO.NET Reader method GetSchemaTable() to retrieve table definition if no other definition was provided
- Lookup: Adding 'OnNoMatchFound' callback which is invoked if no record can be retrieved for a row
- Lookup: Partial cache now offeres different eviction policies
- DbTypeCheck: Adding ConversionError object to redirected flawed rows
- New Connector for Apache Kafka
- Adding Apache Spark support (only basic support for Odbc)
- DbMerge: Adding support for different eviction policies when using partial cache mode
- Adding OnInitialization delegate for all dataflow components
- ObjectNameDescriptor now supports 3dots namings (e.g. "database"."schema"."table")
- LinkErrorTo(..) is now part of interface IDataFlowComponent
- Streaming sources: Adding support for MIME multipart responses

#### Bug Fixes:

- Fixed bug where duplicate column headers can't be read using ReadFieldHeaders()

## Version 3.3.0

#### Features:

- Added Network.ParallelExecute\(params Network\[\] networks\) to support parallel execution of disparate networks
- Network: Added methods 'PrintAsJson' and 'PrintAsNodes' to support printing or visualizing a network
- New connector: ETLBox.Analysis (connector to Microsoft.Analysis.DataFrame)
- Updated 3rd party libraries
- Network execution throws an exception when a network is started containing components that are not linked
- XmlSource/XmlDestination: Improved support for namespaces

#### Bug fixes:

- Improved exception handling if Http Endpoint returns error code
- Re-adding support for parsing column names from CTEs

## Version 3.2.0

#### Features

- Multicast now uses a deep clone instead of a shallow clone when broadcasting objects
- Improved displayed debug information
- Network class: Exposes ApplyToAllNodes method which let you run a custom action on each node
- TableDefinition.FromCLRType creates a TableDefinition directly from a class
- Improved logging output
- ExcelDestination: if appending to an existing excel, if the specified SheetName does not exists, a new sheet is created
- Networks are now allowed to be executed multiple times
- DataFlowComponents now offer OnException delegate property which is invoked when an Exception occurs in a component

#### Bug fixes

- Fixed bug where global Settings.DisableAllLogging can't be overwritten by individual tasks
- Fixed bug: CancellationTokenSource is now properly injected into the network when starting with Network.Execute\(\)
- Fixed bug where schema name containing a dot was not properly parsed in SqlServer
- Fixed issue where shared lookup sources threw an exception

## Version 3.1.0

#### Features

- Distinct: Offers now a 'GetUniqueKeyFunc' as an alternative option to identify a record as unique
- ExcelDestination: Allow appending data to existing file
- New Transformation: DbTypeCheck will check each row if all values would fit into the corresponding table column

#### Bug fixes

- FilterTransformation: FilterPredicate only invoked once,  adding error linking, fixing internal progress count
- Excel and CsvSource: ReadFieldHeaders now also set the Property 'FieldHeaders' in the current instance if using the same Uri

## Version 3.0.2

#### Features

- Added EntityFramework Bulk Operations for Postgres
- CreateTableTask now supports creation of temporary table
- Updating package references
- Improved options for EntitiyFramework bulk operations
- Renaming ETLBox.EntityFramework to EFBox (packages and namespace)

## Version 3.0.1

#### Features

- Adding BlobServiceEndpoint to AzureBlobStorageConfiguration
- Improved exception message if e.g. a MatchColumn references the same columns
- Lookup: improved exception message if PartialCacheSize is bigger than buffer size
- Replacing property BlockBlobClient BlockBlobClient with Func<string, BlockBlobClient>CreateBlockBlobClient in AzureBlobStorageConfiguration
- ParquetDestination now supports nullable data types
- ParquetDestination offers function to add custom meta data
- ParquetSource/ParquetDestination now support Guid as data type

#### Bug fixes

- StreamingDestination: HasNextRecord is not invoked for first record, count of ProcessedRows corrected
- Fixed exception when using GetNextUri/HasNextUri for ParquetDestination
- Fixing bug in Sql statement parsing
- Fixing performance issue when writing parquet files into blob storage

## Version 3.0.0

#### Features

- Updating package references to current version, Improving support for .NET 7 and .NET 6
- Using MySqlConnector (instead of MySql.Data connector) when connecting to MariaDb
- Adding MariaDbOdbcConnector which allows Odbc connections to MariaDb
- New connector: Snowflake
- LogProcessTask: Start/End/Abort will modify passed process, and not create new instance
- Adding SnowflakeOdbcConnector which allow Odbc connections to Snowflake
- New connector: Neo4j
- New connector: Azure Cosmos Db
- Renamed package ETLBox.AzureServiceBus to ETLBox.Azure.ServiceBus
- New connector: Azure Tables
- New connector: SAP HANA
- Azure ServiceBusSource now allows to fetch multiple messages with MaxMessageSize
- Adding HanaOdbcConnector which allows Odbc connections to SAP HANA
- Network class now throws exception when trying to run network twice (no network execution/no error message before)
- Improved support for Db2 and different architectures (LUW, zOS, Cloud)
- SqlTask: Removed obsolete static helper methods that contained a "name" properties
- SqlTask: Removed obsolete static helper methods ExecuteReaderSingleLine
- DbDestination / DbMerge: Removing obsolete Wait() method
- \[BREAKING\] QueryParameter: Renamed DBType -> DbType, DBSize -> DbSize, Type -> SqlType
- \[BREAKING\] Static class DataFlow renamed to Settings, properties of static class ControlFlow (DefaultDbConnection) moved into Settings, new namespace: ETLBox (was ETLBox.DataFlow before)
- \[BREAKING\] Prpoerty LogInstance (ETLBox.Logging.Logging) moved into ETLBox.DataFlow.Settings
-\[BREAKING\] New namespace ETLBox, which contains some shared classes that were used in other namespaces before
- \[BREAKING\] Namespace ETLBox.DataFlow now combines ETLBox.DataFlow, ETLBox.DataFlow.Connectors and ETLBox.DataFlow.Transformations
- \[BREAKING\] Namespace ETLBox.ControlFlow now combines ETLBox.ControlFlow and ETLBox.ControlFlow.Tasks
- \[BREAKING\] Moved ObjectNameDescriptor from ETLBox.Helper to ETLBox.ControlFlow
- \[BREAKING\] Created separate namespace for all classes which are added via separate package (e.g. JsonSource is now in the namespace ETLBox.Json)
- \[BREAKING\] Renamed Attribute \[ColumnMap\] to \[DbColumnMap\]
- \[BREAKING\] Renamed DbSource. SourceTableDefinition -> TableDefinition and DbDestination.DestinationTableDefinition to TableDefinition
- \[BREAKING\] DbMerge.MergeProperties: The properties (IdColumns, UpdateColumns, CompareColumns, DeleteColumns) are now direct properties of DbMerge
- \[BREAKING\] Renamed enum ConnectionManagerType to ConnectionType, Property IConnectionManager.ConnectionManagerType to ConnectionType

#### Bug fixes

- Fixed issues with spaces in table names for GetTableListTask
- Improving support for dynamic objects in Azure ServiceBusSource

## Version 2.7.1

#### Features

- Adapter for Azure Service Bus
- Network.Execute now accepts IDataFlowComponent or derived interfaces as arguments
- XmlSource: When using dynamic approach, attribute name prefix can now be configured (default is 'at_')
- Fixed issue when using special path expressions with JsonPathConverter
- DbMerge: Overwriting identity/auto increment columns now possible when AllowIdentityInsert is set to true

## Version 2.7.0

#### Features

- Aggregation: Adding AggregationCondition to only execute predefined aggregation methods when condition is met
- Added async methods for SqlTask (e.g. ExecuteNonQueryAsync), RowCountTask and TruncateTableTask
- DbMerge: ValueGeneratedColumns are now also populated for Exists in DbMerge output
- RowCountTask: Changed return type of Count() and HasRows() to expected return types int and bool
- Improving thrown exceptions- now the original exception is always thrown (was AggregateException before)
- CsvSource: Enabling auto detection of delimiter in default configuration
- Adding RequestCount to StreamMetaData
- Added ValueToSqlConversionFunc for Odbc/OleDb connection managers
- ExcelSource: Exposes property SheetNumber to specify a sheet index instead of a sheet name
- ExcelSource: Sheet name comparison by default is now case-insensitive (can be switched back to case-sensitive)
- ExcelDestination: Default Sheetname set to "Sheet1"

#### Bug fixes

- Aggregation: Group columns with the FirstValue aggregation method now properly retrieves the first value for a group
- Fixed slowed ODBC connector execution performance for tables with more than 20 columns
- ExcelSource: Only first sheet will be read from source if no sheet name is specified
- Fixed AccessViolation errors for bulk inserts via Odbc with MySql connector
- DbSource: Fixed issue with no white spaces when parsing column names in sql

## Version 2.6.8

#### Features

- Network Execute/ExecuteAsync now accepts CancellationToken instead of CancellationTokenSource (BREAKING CHANGE)

#### Bug fixes

- LogLevel for messages for each batch of processed rows during processing reduced to Debug (was Information before) - final amount still logged as Information
- DisableLogging now also disables logging for Trace/Fatal message (were always logged before)

## Version 2.6.7

#### Features

- Distinct: now offers LinkDuplicatesTo(..) to forward duplicates into separate output
- DbMerge: Performs implicit type cast when determining equality of CompareColumns
- DbMerge: Records marked as deletion but not present in destination now flagged with ChangeAction NotFound
- DbMerge: Adding ColumnConverters

#### Bug fixes

- Lookup: When retrieving multiple values from source, unmatched input data was filtered out - this is fixed

## Version 2.6.6

#### Bug fixes

- JsonSource/XmlSource: Fixing issue that limit property is properly observed when collecting unparsed data and using the GetNextUri/HasNextUri functions

## Version 2.6.5

#### Features
- PostgresSql bulk insert now adds flawed data row information to Data dictionary of Exception message

#### Bug fixes
- DbSource: Fixed issue where sql was provided and properties where mapped to wrong column
- Fixed bug when collecting unparsed data and setting limit on XmlSource or JsonSource
- Fixed bug for GetTableListTask where table names contained an invalid quotation at the beginning

## Version 2.6.4

#### Features

- Network.Execute & ExecuteAsync (and same methods on components) now accept a CancellationTokenSource

#### Bug fixes
- Fixing issues in XmlSource when collecting unparsed data
- Fixing issues in JsonSource when collecting unparsed data


## Version 2.6.3

#### Features

- Collecting of UnparsedData can now be disabled via the CollectUnparsedData prop
- JsonSource: The json property name that holds the data array can now be set with the PropertyNameOfDataArray prop
- Adding EntityFramework Bulk Operations extensions for MySql
- TableDefinition sql codes: Reduce columns for DbDestination/DbSource meta data retrieval to absolute minimum

#### Bug fixes

- JsonSource: Fixing bug that UnparsedData is not properly json formatting when using the Limit Property
- Fixed bug where Primary keys were incorrectly dropped/recreated when altering a table with CreateTableTask
- DbDestination/DbSource/DbMerge: Amount of meta data to obtain TableDefinition is reduced
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
