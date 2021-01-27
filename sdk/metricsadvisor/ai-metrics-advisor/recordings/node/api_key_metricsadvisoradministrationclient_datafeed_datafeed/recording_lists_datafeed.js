let nock = require('nock');

module.exports.hash = "75560962d48bb306d43a15f445b1b16a";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/dataFeeds')
  .query(true)
  .reply(200, {"value":[{"dataFeedId":"ba83086a-880b-4e8b-a5a4-0ba260e74ecd","dataFeedName":"js-test-sqlServerFeed-161070014038707451","metrics":[{"metricId":"af07fa9d-a0d1-4ce6-bccd-73cf3ffa0fc7","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"78c65b73-657e-403a-88e9-f00b62b6a7e8","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"city","dimensionDisplayName":"city"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"SqlServer","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2021-01-15T08:42:25Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"connectionString":"sqlServer_connection_string","query":"select * from adsample2 where Timestamp = @StartTime"}},{"dataFeedId":"ba305960-90eb-467e-a70f-c12a9a0b264b","dataFeedName":"js-test-appInsightsFeed-161070014038707409","metrics":[{"metricId":"5099354d-48d4-4235-95e1-d8a956621655","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"b5305f21-b4fa-4277-b97c-03fbebe4ebca","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"city","dimensionDisplayName":"city"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2021-01-15T08:42:23Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests | where timestamp >= starttime and timestamp < endtime | summarize request_count = count(), duration_avg_ms = avg(duration), duration_95th_ms = percentile(duration, 95), duration_max_ms = max(duration) by resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}},{"dataFeedId":"bd1533c3-b9a4-44f1-9a49-59d3ea4f5f4d","dataFeedName":"js-test-appInsightsFeed-160530608834108103","metrics":[{"metricId":"c5ed1cbf-6f8b-4c63-83f9-8fdbeb3099c3","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"cd69f758-a534-458e-96b9-2ed9c798476a","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"city","dimensionDisplayName":"city"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2020-11-13T22:21:31Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests |?where?timestamp?>=?starttime?and?timestamp?<?endtime |?summarize?request_count?=?count(),?duration_avg_ms?=?avg(duration),?duration_95th_ms?=?percentile(duration,?95),?duration_max_ms?=?max(duration)?by?resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}},{"dataFeedId":"2169ef15-ae74-4fe6-bce1-1bb7c58217a4","dataFeedName":"js-test-appInsightsFeed-160530606466100954","metrics":[{"metricId":"be0316fc-9106-4d02-b1b7-2248614ce8ff","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"465c2be4-3a00-4178-a6a9-41fcb4432cf4","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"city","dimensionDisplayName":"city"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2020-11-13T22:21:10Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests |?where?timestamp?>=?starttime?and?timestamp?<?endtime |?summarize?request_count?=?count(),?duration_avg_ms?=?avg(duration),?duration_95th_ms?=?percentile(duration,?95),?duration_max_ms?=?max(duration)?by?resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}},{"dataFeedId":"7b9edf98-78b6-4ddd-b44a-2bac83cae6b3","dataFeedName":"js-test-appInsightsFeed-160497041382000529","metrics":[{"metricId":"988eb02a-f67b-4200-b96e-48250890a621","metricName":"Metric1","metricDisplayName":"Metric1","metricDescription":""},{"metricId":"b51dbae1-009c-4fae-a24b-32cae2822706","metricName":"Metric2","metricDisplayName":"Metric2","metricDescription":""}],"dimension":[{"dimensionName":"Dim1","dimensionDisplayName":"Dim1 display"},{"dimensionName":"Dim2","dimensionDisplayName":"Dim2 display"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2020-11-10T01:07:45Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests |?where?timestamp?>=?starttime?and?timestamp?<?endtime |?summarize?request_count?=?count(),?duration_avg_ms?=?avg(duration),?duration_95th_ms?=?percentile(duration,?95),?duration_max_ms?=?max(duration)?by?resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}},{"dataFeedId":"94a55268-a300-4909-b25a-fadb446a0308","dataFeedName":"js-test-appInsightsFeed-160496970249406144","metrics":[{"metricId":"2c7aa84e-8caa-4715-bebc-fcfd80f68015","metricName":"Metric1","metricDisplayName":"Metric1","metricDescription":""},{"metricId":"b820536b-e92c-4a03-aeab-854710cb5277","metricName":"Metric2","metricDisplayName":"Metric2","metricDescription":""}],"dimension":[{"dimensionName":"Dim1","dimensionDisplayName":"Dim1 display"},{"dimensionName":"Dim2","dimensionDisplayName":"Dim2 display"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2020-11-10T00:57:07Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests |?where?timestamp?>=?starttime?and?timestamp?<?endtime |?summarize?request_count?=?count(),?duration_avg_ms?=?avg(duration),?duration_95th_ms?=?percentile(duration,?95),?duration_max_ms?=?max(duration)?by?resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}},{"dataFeedId":"b1e83213-bf36-4104-9116-ad62f445c3f6","dataFeedName":"js-test-appInsightsFeed-160496963066701727","metrics":[{"metricId":"4047a2c2-c936-4b25-9339-e485dd35565d","metricName":"Metric1","metricDisplayName":"Metric1","metricDescription":""},{"metricId":"f41f51c8-2e1e-4945-ad73-7d9f7b666341","metricName":"Metric2","metricDisplayName":"Metric2","metricDescription":""}],"dimension":[{"dimensionName":"Dim1","dimensionDisplayName":"Dim1 display"},{"dimensionName":"Dim2","dimensionDisplayName":"Dim2 display"}],"dataStartFrom":"2020-08-21T00:00:00Z","dataSourceType":"AzureApplicationInsights","timestampColumn":"","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","granularityAmount":null,"allUpIdentification":"__CUSTOM_SUM__","needRollup":"NeedRollup","fillMissingPointType":"CustomValue","fillMissingPointValue":555,"rollUpMethod":"Sum","rollUpColumns":[],"dataFeedDescription":"Data feed description","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["kaghiya@microsoft.com"],"viewers":[],"creator":"kaghiya@microsoft.com","status":"Active","createdTime":"2020-11-10T00:53:52Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"apiKey":"appInsights_app_key","query":"let gran=60m; let starttime=datetime(@StartTime); let endtime=starttime + gran; requests |?where?timestamp?>=?starttime?and?timestamp?<?endtime |?summarize?request_count?=?count(),?duration_avg_ms?=?avg(duration),?duration_95th_ms?=?percentile(duration,?95),?duration_max_ms?=?max(duration)?by?resultCode","azureCloud":"Azure","applicationId":"appInsights_application"}}],"@nextLink":null}, [
  'Content-Length',
  '11677',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '980d95ab-f7b4-4c0c-8a10-51c34ce649ac',
  'x-envoy-upstream-service-time',
  '141',
  'apim-request-id',
  '980d95ab-f7b4-4c0c-8a10-51c34ce649ac',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 15 Jan 2021 08:42:26 GMT'
]);