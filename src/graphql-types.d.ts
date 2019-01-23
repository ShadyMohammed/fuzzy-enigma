export type Maybe<T> = T | null;

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[];

  order?: SitePageConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;

  path?: Maybe<SitePageConnectionPathQueryString_2>;

  component?: Maybe<SitePageConnectionComponentQueryString>;

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;

  context?: Maybe<SitePageConnectionContextInputObject>;

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;

  id?: Maybe<SitePageConnectionIdQueryString_2>;

  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextInputObject {
  slug?: Maybe<SitePageConnectionContextSlugQueryString>;
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;

  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>;

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>;

  spaceId?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString
  >;

  accessToken?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString
  >;

  host?: Maybe<SitePageConnectionPluginCreatorPluginOptionsHostQueryString>;

  environment?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString
  >;

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  color?: Maybe<SitePageConnectionPluginCreatorPluginOptionsColorQueryString>;

  google?: Maybe<SitePageConnectionPluginCreatorPluginOptionsGoogleInputObject>;

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;

  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >;

  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >;

  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2
  >;

  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >;

  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >;

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString
  >;

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString
  >;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  ssrAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHostQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsGoogleInputObject {
  families?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsGoogleFamiliesQueryList
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsGoogleFamiliesQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[];

  order?: SitePluginConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionIdQueryString_2>;

  name?: Maybe<SitePluginConnectionNameQueryString_2>;

  version?: Maybe<SitePluginConnectionVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>;

  spaceId?: Maybe<SitePluginConnectionPluginOptionsSpaceIdQueryString_2>;

  accessToken?: Maybe<
    SitePluginConnectionPluginOptionsAccessTokenQueryString_2
  >;

  host?: Maybe<SitePluginConnectionPluginOptionsHostQueryString_2>;

  environment?: Maybe<
    SitePluginConnectionPluginOptionsEnvironmentQueryString_2
  >;

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2>;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_3
  >;

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  color?: Maybe<SitePluginConnectionPluginOptionsColorQueryString_2>;

  google?: Maybe<SitePluginConnectionPluginOptionsGoogleInputObject_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;

  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_4
  >;

  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>;

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<
    SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2
  >;

  ssrAPIs?: Maybe<SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsSpaceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsEnvironmentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsGoogleInputObject_2 {
  families?: Maybe<SitePluginConnectionPluginOptionsGoogleFamiliesQueryList_2>;
}

export interface SitePluginConnectionPluginOptionsGoogleFamiliesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionSort {
  fields: (Maybe<ContentfulContentTypeConnectionSortByFieldsEnum>)[];

  order?: ContentfulContentTypeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulContentType {
  id?: Maybe<ContentfulContentTypeConnectionIdQueryString_2>;

  name?: Maybe<ContentfulContentTypeConnectionNameQueryString_2>;

  displayField?: Maybe<
    ContentfulContentTypeConnectionDisplayFieldQueryString_2
  >;

  description?: Maybe<ContentfulContentTypeConnectionDescriptionQueryString_2>;

  internal?: Maybe<ContentfulContentTypeConnectionInternalInputObject_2>;
}

export interface ContentfulContentTypeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionDisplayFieldQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulContentTypeConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulContentTypeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulContentTypeConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulContentTypeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionSort {
  fields: (Maybe<ContentfulCategoryConnectionSortByFieldsEnum>)[];

  order?: ContentfulCategoryConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulCategory {
  title?: Maybe<ContentfulCategoryConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulCategoryConnectionSlugQueryString_2>;

  post?: Maybe<ContentfulCategoryConnectionPostQueryList_2>;

  id?: Maybe<ContentfulCategoryConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulCategoryConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulCategoryConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCategoryConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulCategoryConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCategoryConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulCategoryConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostQueryList_2 {
  elemMatch?: Maybe<ContentfulCategoryConnectionPostInputObject_2>;
}

export interface ContentfulCategoryConnectionPostInputObject_2 {
  title?: Maybe<ContentfulCategoryConnectionPostTitleQueryString_2>;

  slug?: Maybe<ContentfulCategoryConnectionPostSlugQueryString_2>;

  id?: Maybe<ContentfulCategoryConnectionPostIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulCategoryConnectionPostContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulCategoryConnectionPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCategoryConnectionPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulCategoryConnectionPostParentQueryString_2>;

  children?: Maybe<ContentfulCategoryConnectionPostChildrenQueryList_2>;

  internal?: Maybe<ContentfulCategoryConnectionPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCategoryConnectionPostNodeLocaleQueryString_2>;
}

export interface ContentfulCategoryConnectionPostTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostInternalInputObject_2 {
  type?: Maybe<ContentfulCategoryConnectionPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCategoryConnectionPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCategoryConnectionPostInternalOwnerQueryString_2>;
}

export interface ContentfulCategoryConnectionPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulCategoryConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCategoryConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCategoryConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulCategoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionSort {
  fields: (Maybe<ContentfulPostConnectionSortByFieldsEnum>)[];

  order?: ContentfulPostConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulPost {
  title?: Maybe<ContentfulPostConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulPostConnectionSlugQueryString_2>;

  category?: Maybe<ContentfulPostConnectionCategoryInputObject_2>;

  featuredImage?: Maybe<ContentfulPostConnectionFeaturedImageInputObject_2>;

  content?: Maybe<ContentfulPostConnectionContentInputObject_2>;

  description?: Maybe<ContentfulPostConnectionDescriptionInputObject_2>;

  id?: Maybe<ContentfulPostConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPostConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPostConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPostConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPostConnectionNodeLocaleQueryString_2>;

  featured_post?: Maybe<ContentfulPostConnectionFeaturedPostQueryList_2>;
}

export interface ContentfulPostConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryInputObject_2 {
  title?: Maybe<ContentfulPostConnectionCategoryTitleQueryString_2>;

  slug?: Maybe<ContentfulPostConnectionCategorySlugQueryString_2>;

  id?: Maybe<ContentfulPostConnectionCategoryIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulPostConnectionCategoryContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulPostConnectionCategoryCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostConnectionCategoryUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPostConnectionCategoryParentQueryString_2>;

  internal?: Maybe<ContentfulPostConnectionCategoryInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPostConnectionCategoryNodeLocaleQueryString_2>;
}

export interface ContentfulPostConnectionCategoryTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategorySlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionCategoryInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostConnectionCategoryInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostConnectionCategoryInternalOwnerQueryString_2>;
}

export interface ContentfulPostConnectionCategoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCategoryNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageInputObject_2 {
  contentful_id?: Maybe<
    ContentfulPostConnectionFeaturedImageContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulPostConnectionFeaturedImageIdQueryString_2>;

  file?: Maybe<ContentfulPostConnectionFeaturedImageFileInputObject_2>;

  title?: Maybe<ContentfulPostConnectionFeaturedImageTitleQueryString_2>;

  description?: Maybe<
    ContentfulPostConnectionFeaturedImageDescriptionQueryString_2
  >;

  node_locale?: Maybe<
    ContentfulPostConnectionFeaturedImageNodeLocaleQueryString_2
  >;

  internal?: Maybe<ContentfulPostConnectionFeaturedImageInternalInputObject_2>;
}

export interface ContentfulPostConnectionFeaturedImageContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileInputObject_2 {
  url?: Maybe<ContentfulPostConnectionFeaturedImageFileUrlQueryString_2>;

  details?: Maybe<
    ContentfulPostConnectionFeaturedImageFileDetailsInputObject_2
  >;

  fileName?: Maybe<
    ContentfulPostConnectionFeaturedImageFileFileNameQueryString_2
  >;

  contentType?: Maybe<
    ContentfulPostConnectionFeaturedImageFileContentTypeQueryString_2
  >;
}

export interface ContentfulPostConnectionFeaturedImageFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileDetailsInputObject_2 {
  size?: Maybe<
    ContentfulPostConnectionFeaturedImageFileDetailsSizeQueryInteger_2
  >;

  image?: Maybe<
    ContentfulPostConnectionFeaturedImageFileDetailsImageInputObject_2
  >;
}

export interface ContentfulPostConnectionFeaturedImageFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulPostConnectionFeaturedImageFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulPostConnectionFeaturedImageFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulPostConnectionFeaturedImageFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionFeaturedImageInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostConnectionFeaturedImageInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPostConnectionFeaturedImageInternalOwnerQueryString_2
  >;
}

export interface ContentfulPostConnectionFeaturedImageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedImageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInputObject_2 {
  content?: Maybe<ContentfulPostConnectionContentContentQueryString_2>;

  nodeType?: Maybe<ContentfulPostConnectionContentNodeTypeQueryString_2>;

  id?: Maybe<ContentfulPostConnectionContentIdQueryString_2>;

  parent?: Maybe<ContentfulPostConnectionContentParentQueryString_2>;

  internal?: Maybe<ContentfulPostConnectionContentInternalInputObject_2>;
}

export interface ContentfulPostConnectionContentContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentNodeTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionContentInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulPostConnectionContentInternalMediaTypeQueryString_2
  >;

  content?: Maybe<ContentfulPostConnectionContentInternalContentQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostConnectionContentInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostConnectionContentInternalOwnerQueryString_2>;
}

export interface ContentfulPostConnectionContentInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInputObject_2 {
  id?: Maybe<ContentfulPostConnectionDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulPostConnectionDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulPostConnectionDescriptionChildrenQueryList_2>;

  description?: Maybe<
    ContentfulPostConnectionDescriptionDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulPostConnectionDescriptionInternalInputObject_2>;
}

export interface ContentfulPostConnectionDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulPostConnectionDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPostConnectionDescriptionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPostConnectionDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostConnectionDescriptionInternalOwnerQueryString_2>;
}

export interface ContentfulPostConnectionDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulPostConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostQueryList_2 {
  elemMatch?: Maybe<ContentfulPostConnectionFeaturedPostInputObject_2>;
}

export interface ContentfulPostConnectionFeaturedPostInputObject_2 {
  id?: Maybe<ContentfulPostConnectionFeaturedPostIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulPostConnectionFeaturedPostContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulPostConnectionFeaturedPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostConnectionFeaturedPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPostConnectionFeaturedPostParentQueryString_2>;

  internal?: Maybe<ContentfulPostConnectionFeaturedPostInternalInputObject_2>;

  node_locale?: Maybe<
    ContentfulPostConnectionFeaturedPostNodeLocaleQueryString_2
  >;
}

export interface ContentfulPostConnectionFeaturedPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostInternalInputObject_2 {
  type?: Maybe<ContentfulPostConnectionFeaturedPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostConnectionFeaturedPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostConnectionFeaturedPostInternalOwnerQueryString_2>;
}

export interface ContentfulPostConnectionFeaturedPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostConnectionFeaturedPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionSort {
  fields: (Maybe<
    ContentfulPostContentRichTextNodeConnectionSortByFieldsEnum
  >)[];

  order?: ContentfulPostContentRichTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulPostContentRichTextNode {
  content?: Maybe<
    ContentfulPostContentRichTextNodeConnectionContentQueryString_2
  >;

  nodeType?: Maybe<
    ContentfulPostContentRichTextNodeConnectionNodeTypeQueryString_2
  >;

  id?: Maybe<ContentfulPostContentRichTextNodeConnectionIdQueryString_2>;

  internal?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalInputObject_2
  >;
}

export interface ContentfulPostContentRichTextNodeConnectionContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionNodeTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalInputObject_2 {
  type?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPostContentRichTextNodeConnectionInternalOwnerQueryString_2
  >;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionSort {
  fields: (Maybe<
    ContentfulPostDescriptionTextNodeConnectionSortByFieldsEnum
  >)[];

  order?: ContentfulPostDescriptionTextNodeConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulPostDescriptionTextNode {
  id?: Maybe<ContentfulPostDescriptionTextNodeConnectionIdQueryString_2>;

  description?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalInputObject_2
  >;
}

export interface ContentfulPostDescriptionTextNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalInputObject_2 {
  type?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPostDescriptionTextNodeConnectionInternalOwnerQueryString_2
  >;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionSort {
  fields: (Maybe<ContentfulFeaturedPostConnectionSortByFieldsEnum>)[];

  order?: ContentfulFeaturedPostConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulFeaturedPost {
  post?: Maybe<ContentfulFeaturedPostConnectionPostInputObject_2>;

  id?: Maybe<ContentfulFeaturedPostConnectionIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulFeaturedPostConnectionContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulFeaturedPostConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulFeaturedPostConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulFeaturedPostConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulFeaturedPostConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulFeaturedPostConnectionPostInputObject_2 {
  title?: Maybe<ContentfulFeaturedPostConnectionPostTitleQueryString_2>;

  slug?: Maybe<ContentfulFeaturedPostConnectionPostSlugQueryString_2>;

  id?: Maybe<ContentfulFeaturedPostConnectionPostIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulFeaturedPostConnectionPostContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulFeaturedPostConnectionPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulFeaturedPostConnectionPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulFeaturedPostConnectionPostParentQueryString_2>;

  children?: Maybe<ContentfulFeaturedPostConnectionPostChildrenQueryList_2>;

  internal?: Maybe<ContentfulFeaturedPostConnectionPostInternalInputObject_2>;

  node_locale?: Maybe<
    ContentfulFeaturedPostConnectionPostNodeLocaleQueryString_2
  >;
}

export interface ContentfulFeaturedPostConnectionPostTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostInternalInputObject_2 {
  type?: Maybe<ContentfulFeaturedPostConnectionPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulFeaturedPostConnectionPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulFeaturedPostConnectionPostInternalOwnerQueryString_2>;
}

export interface ContentfulFeaturedPostConnectionPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulFeaturedPostConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulFeaturedPostConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulFeaturedPostConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulFeaturedPostConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionSort {
  fields: (Maybe<ContentfulAssetConnectionSortByFieldsEnum>)[];

  order?: ContentfulAssetConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterContentfulAsset {
  contentful_id?: Maybe<ContentfulAssetConnectionContentfulIdQueryString_2>;

  id?: Maybe<ContentfulAssetConnectionIdQueryString_2>;

  file?: Maybe<ContentfulAssetConnectionFileInputObject_2>;

  title?: Maybe<ContentfulAssetConnectionTitleQueryString_2>;

  description?: Maybe<ContentfulAssetConnectionDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulAssetConnectionNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulAssetConnectionInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_4>;

  resolutions?: Maybe<ResolutionsTypeName_4>;

  fluid?: Maybe<FluidTypeName_4>;

  sizes?: Maybe<SizesTypeName_4>;

  resize?: Maybe<ResizeTypeName_4>;
}

export interface ContentfulAssetConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileInputObject_2 {
  url?: Maybe<ContentfulAssetConnectionFileUrlQueryString_2>;

  details?: Maybe<ContentfulAssetConnectionFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulAssetConnectionFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulAssetConnectionFileContentTypeQueryString_2>;
}

export interface ContentfulAssetConnectionFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsInputObject_2 {
  size?: Maybe<ContentfulAssetConnectionFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulAssetConnectionFileDetailsImageInputObject_2>;
}

export interface ContentfulAssetConnectionFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulAssetConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulAssetConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulAssetConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulAssetConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;

  width?: Maybe<FixedWidthQueryFloat_4>;

  height?: Maybe<FixedHeightQueryFloat_4>;

  src?: Maybe<FixedSrcQueryString_4>;

  srcSet?: Maybe<FixedSrcSetQueryString_4>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;

  width?: Maybe<ResolutionsWidthQueryFloat_4>;

  height?: Maybe<ResolutionsHeightQueryFloat_4>;

  src?: Maybe<ResolutionsSrcQueryString_4>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;

  src?: Maybe<FluidSrcQueryString_4>;

  srcSet?: Maybe<FluidSrcSetQueryString_4>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;

  sizes?: Maybe<FluidSizesQueryString_4>;
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;

  src?: Maybe<SizesSrcQueryString_4>;

  srcSet?: Maybe<SizesSrcSetQueryString_4>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;

  sizes?: Maybe<SizesSizesQueryString_4>;
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_4 {
  base64?: Maybe<ResizeBase64QueryString_4>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;

  src?: Maybe<ResizeSrcQueryString_4>;

  width?: Maybe<ResizeWidthQueryInt_4>;

  height?: Maybe<ResizeHeightQueryInt_4>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;
}

export interface ResizeBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[];

  order?: MarkdownRemarkConnectionSortOrderValues;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>;

  html?: Maybe<HtmlQueryString_4>;

  excerpt?: Maybe<ExcerptQueryString_4>;

  headings?: Maybe<HeadingsQueryList_4>;

  timeToRead?: Maybe<TimeToReadQueryInt_4>;

  tableOfContents?: Maybe<TableOfContentsQueryString_4>;

  wordCount?: Maybe<WordCountTypeName_4>;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    MarkdownRemarkConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>;
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>;

  sentences?: Maybe<WordCountSentencesQueryInt_4>;

  words?: Maybe<WordCountWordsQueryInt_4>;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextInputObject {
  slug?: Maybe<SitePageContextSlugQueryString>;
}

export interface SitePageContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorIdQueryString>;

  name?: Maybe<SitePagePluginCreatorNameQueryString>;

  version?: Maybe<SitePagePluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;

  parent?: Maybe<SitePagePluginCreatorParentQueryString>;

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>;

  spaceId?: Maybe<SitePagePluginCreatorPluginOptionsSpaceIdQueryString>;

  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>;

  host?: Maybe<SitePagePluginCreatorPluginOptionsHostQueryString>;

  environment?: Maybe<SitePagePluginCreatorPluginOptionsEnvironmentQueryString>;

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger>;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  color?: Maybe<SitePagePluginCreatorPluginOptionsColorQueryString>;

  google?: Maybe<SitePagePluginCreatorPluginOptionsGoogleInputObject>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;

  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>;

  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>;

  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2
  >;

  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>;

  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>;

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>;

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>;

  pluginOptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  ssrAPIs?: Maybe<SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsHostQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsGoogleInputObject {
  families?: Maybe<SitePagePluginCreatorPluginOptionsGoogleFamiliesQueryList>;
}

export interface SitePagePluginCreatorPluginOptionsGoogleFamiliesQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageInternalDescriptionQueryString>;

  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>;

  spaceId?: Maybe<SitePluginPluginOptionsSpaceIdQueryString_2>;

  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_2>;

  host?: Maybe<SitePluginPluginOptionsHostQueryString_2>;

  environment?: Maybe<SitePluginPluginOptionsEnvironmentQueryString_2>;

  maxWidth?: Maybe<SitePluginPluginOptionsMaxWidthQueryInteger_2>;

  backgroundColor?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_3>;

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  color?: Maybe<SitePluginPluginOptionsColorQueryString_2>;

  google?: Maybe<SitePluginPluginOptionsGoogleInputObject_2>;

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;

  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_4>;

  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>;

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginPluginOptionsPluginsSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  backgroundColor?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsSpaceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsEnvironmentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsGoogleInputObject_2 {
  families?: Maybe<SitePluginPluginOptionsGoogleFamiliesQueryList_2>;
}

export interface SitePluginPluginOptionsGoogleFamiliesQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataInputObject_2 {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;

  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>;

  author?: Maybe<SiteSiteMetadataAuthorQueryString_2>;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;

  type?: Maybe<SiteInternalTypeQueryString_2>;

  owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeDisplayFieldQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalInputObject_2 {
  type?: Maybe<ContentfulContentTypeInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulContentTypeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulContentTypeInternalOwnerQueryString_2>;
}

export interface ContentfulContentTypeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategorySlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostQueryList_2 {
  elemMatch?: Maybe<ContentfulCategoryPostInputObject_2>;
}

export interface ContentfulCategoryPostInputObject_2 {
  title?: Maybe<ContentfulCategoryPostTitleQueryString_2>;

  slug?: Maybe<ContentfulCategoryPostSlugQueryString_2>;

  id?: Maybe<ContentfulCategoryPostIdQueryString_2>;

  contentful_id?: Maybe<ContentfulCategoryPostContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulCategoryPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCategoryPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulCategoryPostParentQueryString_2>;

  children?: Maybe<ContentfulCategoryPostChildrenQueryList_2>;

  internal?: Maybe<ContentfulCategoryPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCategoryPostNodeLocaleQueryString_2>;
}

export interface ContentfulCategoryPostTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostInternalInputObject_2 {
  type?: Maybe<ContentfulCategoryPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCategoryPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCategoryPostInternalOwnerQueryString_2>;
}

export interface ContentfulCategoryPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryInternalInputObject_2 {
  type?: Maybe<ContentfulCategoryInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulCategoryInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulCategoryInternalOwnerQueryString_2>;
}

export interface ContentfulCategoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCategoryNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryInputObject_2 {
  title?: Maybe<ContentfulPostCategoryTitleQueryString_2>;

  slug?: Maybe<ContentfulPostCategorySlugQueryString_2>;

  id?: Maybe<ContentfulPostCategoryIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPostCategoryContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPostCategoryCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostCategoryUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPostCategoryParentQueryString_2>;

  internal?: Maybe<ContentfulPostCategoryInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPostCategoryNodeLocaleQueryString_2>;
}

export interface ContentfulPostCategoryTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategorySlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryInternalInputObject_2 {
  type?: Maybe<ContentfulPostCategoryInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostCategoryInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostCategoryInternalOwnerQueryString_2>;
}

export interface ContentfulPostCategoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCategoryNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageInputObject_2 {
  contentful_id?: Maybe<ContentfulPostFeaturedImageContentfulIdQueryString_2>;

  id?: Maybe<ContentfulPostFeaturedImageIdQueryString_2>;

  file?: Maybe<ContentfulPostFeaturedImageFileInputObject_2>;

  title?: Maybe<ContentfulPostFeaturedImageTitleQueryString_2>;

  description?: Maybe<ContentfulPostFeaturedImageDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulPostFeaturedImageNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulPostFeaturedImageInternalInputObject_2>;
}

export interface ContentfulPostFeaturedImageContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageFileInputObject_2 {
  url?: Maybe<ContentfulPostFeaturedImageFileUrlQueryString_2>;

  details?: Maybe<ContentfulPostFeaturedImageFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulPostFeaturedImageFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulPostFeaturedImageFileContentTypeQueryString_2>;
}

export interface ContentfulPostFeaturedImageFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageFileDetailsInputObject_2 {
  size?: Maybe<ContentfulPostFeaturedImageFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulPostFeaturedImageFileDetailsImageInputObject_2>;
}

export interface ContentfulPostFeaturedImageFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostFeaturedImageFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulPostFeaturedImageFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<
    ContentfulPostFeaturedImageFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulPostFeaturedImageFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostFeaturedImageFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPostFeaturedImageFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageInternalInputObject_2 {
  type?: Maybe<ContentfulPostFeaturedImageInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostFeaturedImageInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostFeaturedImageInternalOwnerQueryString_2>;
}

export interface ContentfulPostFeaturedImageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedImageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInputObject_2 {
  content?: Maybe<ContentfulPostContentContentQueryString_2>;

  nodeType?: Maybe<ContentfulPostContentNodeTypeQueryString_2>;

  id?: Maybe<ContentfulPostContentIdQueryString_2>;

  parent?: Maybe<ContentfulPostContentParentQueryString_2>;

  internal?: Maybe<ContentfulPostContentInternalInputObject_2>;
}

export interface ContentfulPostContentContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentNodeTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInternalInputObject_2 {
  type?: Maybe<ContentfulPostContentInternalTypeQueryString_2>;

  mediaType?: Maybe<ContentfulPostContentInternalMediaTypeQueryString_2>;

  content?: Maybe<ContentfulPostContentInternalContentQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostContentInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostContentInternalOwnerQueryString_2>;
}

export interface ContentfulPostContentInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInputObject_2 {
  id?: Maybe<ContentfulPostDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulPostDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulPostDescriptionChildrenQueryList_2>;

  description?: Maybe<ContentfulPostDescriptionDescriptionQueryString_2>;

  internal?: Maybe<ContentfulPostDescriptionInternalInputObject_2>;
}

export interface ContentfulPostDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulPostDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<ContentfulPostDescriptionInternalMediaTypeQueryString_2>;

  content?: Maybe<ContentfulPostDescriptionInternalContentQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostDescriptionInternalOwnerQueryString_2>;
}

export interface ContentfulPostDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostInternalInputObject_2 {
  type?: Maybe<ContentfulPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulPostInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulPostInternalOwnerQueryString_2>;
}

export interface ContentfulPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostQueryList_2 {
  elemMatch?: Maybe<ContentfulPostFeaturedPostInputObject_2>;
}

export interface ContentfulPostFeaturedPostInputObject_2 {
  id?: Maybe<ContentfulPostFeaturedPostIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPostFeaturedPostContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPostFeaturedPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostFeaturedPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPostFeaturedPostParentQueryString_2>;

  internal?: Maybe<ContentfulPostFeaturedPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPostFeaturedPostNodeLocaleQueryString_2>;
}

export interface ContentfulPostFeaturedPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostInternalInputObject_2 {
  type?: Maybe<ContentfulPostFeaturedPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPostFeaturedPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostFeaturedPostInternalOwnerQueryString_2>;
}

export interface ContentfulPostFeaturedPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostFeaturedPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeNodeTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeInternalInputObject_2 {
  type?: Maybe<ContentfulPostContentRichTextNodeInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulPostContentRichTextNodeInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPostContentRichTextNodeInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPostContentRichTextNodeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostContentRichTextNodeInternalOwnerQueryString_2>;
}

export interface ContentfulPostContentRichTextNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostContentRichTextNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeInternalInputObject_2 {
  type?: Maybe<ContentfulPostDescriptionTextNodeInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulPostDescriptionTextNodeInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPostDescriptionTextNodeInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPostDescriptionTextNodeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPostDescriptionTextNodeInternalOwnerQueryString_2>;
}

export interface ContentfulPostDescriptionTextNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPostDescriptionTextNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostInputObject_2 {
  title?: Maybe<ContentfulFeaturedPostPostTitleQueryString_2>;

  slug?: Maybe<ContentfulFeaturedPostPostSlugQueryString_2>;

  id?: Maybe<ContentfulFeaturedPostPostIdQueryString_2>;

  contentful_id?: Maybe<ContentfulFeaturedPostPostContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulFeaturedPostPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulFeaturedPostPostUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulFeaturedPostPostParentQueryString_2>;

  children?: Maybe<ContentfulFeaturedPostPostChildrenQueryList_2>;

  internal?: Maybe<ContentfulFeaturedPostPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulFeaturedPostPostNodeLocaleQueryString_2>;
}

export interface ContentfulFeaturedPostPostTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostInternalInputObject_2 {
  type?: Maybe<ContentfulFeaturedPostPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulFeaturedPostPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulFeaturedPostPostInternalOwnerQueryString_2>;
}

export interface ContentfulFeaturedPostPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostInternalInputObject_2 {
  type?: Maybe<ContentfulFeaturedPostInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulFeaturedPostInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulFeaturedPostInternalOwnerQueryString_2>;
}

export interface ContentfulFeaturedPostInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulFeaturedPostNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileInputObject_2 {
  url?: Maybe<ContentfulAssetFileUrlQueryString_2>;

  details?: Maybe<ContentfulAssetFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulAssetFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulAssetFileContentTypeQueryString_2>;
}

export interface ContentfulAssetFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileDetailsInputObject_2 {
  size?: Maybe<ContentfulAssetFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulAssetFileDetailsImageInputObject_2>;
}

export interface ContentfulAssetFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulAssetFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulAssetFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulAssetFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalInputObject_2 {
  type?: Maybe<ContentfulAssetInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulAssetInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulAssetInternalOwnerQueryString_2>;
}

export interface ContentfulAssetInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;

  width?: Maybe<FixedWidthQueryFloat_3>;

  height?: Maybe<FixedHeightQueryFloat_3>;

  src?: Maybe<FixedSrcQueryString_3>;

  srcSet?: Maybe<FixedSrcSetQueryString_3>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;

  width?: Maybe<ResolutionsWidthQueryFloat_3>;

  height?: Maybe<ResolutionsHeightQueryFloat_3>;

  src?: Maybe<ResolutionsSrcQueryString_3>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;

  src?: Maybe<FluidSrcQueryString_3>;

  srcSet?: Maybe<FluidSrcSetQueryString_3>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;

  sizes?: Maybe<FluidSizesQueryString_3>;
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;

  src?: Maybe<SizesSrcQueryString_3>;

  srcSet?: Maybe<SizesSrcSetQueryString_3>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;

  sizes?: Maybe<SizesSizesQueryString_3>;
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_3 {
  base64?: Maybe<ResizeBase64QueryString_3>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;

  src?: Maybe<ResizeSrcQueryString_3>;

  width?: Maybe<ResizeWidthQueryInt_3>;

  height?: Maybe<ResizeHeightQueryInt_3>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;
}

export interface ResizeBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>;

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>;

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>;
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>;

  sentences?: Maybe<WordCountSentencesQueryInt_3>;

  words?: Maybe<WordCountWordsQueryInt_3>;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum sitePageConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum sitePageDistinctEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum sitePageGroupEnum {
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Path = "path",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextSlug = "context___slug",
  PluginCreatorNode = "pluginCreator___NODE",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalOwner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsSpaceId = "pluginOptions___spaceId",
  PluginOptionsAccessToken = "pluginOptions___accessToken",
  PluginOptionsHost = "pluginOptions___host",
  PluginOptionsEnvironment = "pluginOptions___environment",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsColor = "pluginOptions___color",
  PluginOptionsGoogleFamilies = "pluginOptions___google___families",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum sitePluginConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum sitePluginDistinctEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsSpaceId = "pluginOptions___spaceId",
  PluginOptionsAccessToken = "pluginOptions___accessToken",
  PluginOptionsHost = "pluginOptions___host",
  PluginOptionsEnvironment = "pluginOptions___environment",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsColor = "pluginOptions___color",
  PluginOptionsGoogleFamilies = "pluginOptions___google___families",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum sitePluginGroupEnum {
  Resolve = "resolve",
  Id = "id",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsSpaceId = "pluginOptions___spaceId",
  PluginOptionsAccessToken = "pluginOptions___accessToken",
  PluginOptionsHost = "pluginOptions___host",
  PluginOptionsEnvironment = "pluginOptions___environment",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsColor = "pluginOptions___color",
  PluginOptionsGoogleFamilies = "pluginOptions___google___families",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonKeywords = "packageJson___keywords",
  Parent = "parent",
  InternalContentDigest = "internal___contentDigest",
  InternalType = "internal___type",
  InternalOwner = "internal___owner"
}

export enum ContentfulContentTypeConnectionSortByFieldsEnum {
  Id = "id",
  Name = "name",
  DisplayField = "displayField",
  Description = "description",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulContentTypeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulContentTypeDistinctEnum {
  Id = "id",
  Name = "name",
  DisplayField = "displayField",
  Description = "description",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulContentTypeGroupEnum {
  Id = "id",
  Name = "name",
  DisplayField = "displayField",
  Description = "description",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum ContentfulCategoryConnectionSortByFieldsEnum {
  Title = "title",
  Slug = "slug",
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum contentfulCategoryConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum ExcerptFormats {
  Plain = "PLAIN",
  Html = "HTML"
}

export enum HeadingLevels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6"
}

export enum ContentfulImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export enum ImageResizingBehavior {
  NoChange = "NO_CHANGE",
  Pad = "PAD",
  Crop = "CROP",
  Fill = "FILL",
  Thumb = "THUMB",
  Scale = "SCALE"
}

export enum ContentfulImageCropFocus {
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
  Bottom = "BOTTOM",
  BottomRight = "BOTTOM_RIGHT",
  BottomLeft = "BOTTOM_LEFT",
  Right = "RIGHT",
  Left = "LEFT",
  Faces = "FACES",
  Center = "CENTER"
}

export enum contentfulCategoryDistinctEnum {
  Title = "title",
  Slug = "slug",
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum contentfulCategoryGroupEnum {
  Title = "title",
  Slug = "slug",
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum ContentfulPostConnectionSortByFieldsEnum {
  Title = "title",
  Slug = "slug",
  CategoryNode = "category___NODE",
  FeaturedImageNode = "featuredImage___NODE",
  ContentNode = "content___NODE",
  DescriptionNode = "description___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale",
  FeaturedPostNode = "featured_post___NODE"
}

export enum contentfulPostConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulPostDistinctEnum {
  Title = "title",
  Slug = "slug",
  CategoryNode = "category___NODE",
  FeaturedImageNode = "featuredImage___NODE",
  ContentNode = "content___NODE",
  DescriptionNode = "description___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale",
  FeaturedPostNode = "featured_post___NODE"
}

export enum contentfulPostGroupEnum {
  Title = "title",
  Slug = "slug",
  CategoryNode = "category___NODE",
  FeaturedImageNode = "featuredImage___NODE",
  ContentNode = "content___NODE",
  DescriptionNode = "description___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  Children = "children",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale",
  FeaturedPostNode = "featured_post___NODE"
}

export enum contentfulPostContentRichTextNodeConnectionSortByFieldsEnum {
  Content = "content",
  NodeType = "nodeType",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulPostContentRichTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulPostContentRichTextNodeDistinctEnum {
  Content = "content",
  NodeType = "nodeType",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulPostContentRichTextNodeGroupEnum {
  Content = "content",
  NodeType = "nodeType",
  Id = "id",
  Parent = "parent",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulPostDescriptionTextNodeConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulPostDescriptionTextNodeConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulPostDescriptionTextNodeDistinctEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulPostDescriptionTextNodeGroupEnum {
  Id = "id",
  Parent = "parent",
  Children = "children",
  Description = "description",
  InternalType = "internal___type",
  InternalMediaType = "internal___mediaType",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum ContentfulFeaturedPostConnectionSortByFieldsEnum {
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum contentfulFeaturedPostConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulFeaturedPostDistinctEnum {
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum contentfulFeaturedPostGroupEnum {
  PostNode = "post___NODE",
  Id = "id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Parent = "parent",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  NodeLocale = "node_locale"
}

export enum ContentfulAssetConnectionSortByFieldsEnum {
  ContentfulId = "contentful_id",
  Id = "id",
  FileUrl = "file___url",
  FileDetailsSize = "file___details___size",
  FileDetailsImage = "file___details___image",
  FileFileName = "file___fileName",
  FileContentType = "file___contentType",
  Title = "title",
  Description = "description",
  NodeLocale = "node_locale",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  ResizeBase64 = "resize___base64",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeSrc = "resize___src",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio"
}

export enum contentfulAssetConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum contentfulAssetDistinctEnum {
  ContentfulId = "contentful_id",
  Id = "id",
  FileUrl = "file___url",
  FileDetailsSize = "file___details___size",
  FileDetailsImage = "file___details___image",
  FileFileName = "file___fileName",
  FileContentType = "file___contentType",
  Title = "title",
  Description = "description",
  NodeLocale = "node_locale",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum contentfulAssetGroupEnum {
  ContentfulId = "contentful_id",
  Id = "id",
  FileUrl = "file___url",
  FileDetailsSize = "file___details___size",
  FileDetailsImage = "file___details___image",
  FileFileName = "file___fileName",
  FileContentType = "file___contentType",
  Title = "title",
  Description = "description",
  NodeLocale = "node_locale",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner"
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody",
  Html = "html",
  Excerpt = "excerpt",
  Headings = "headings",
  TimeToRead = "timeToRead",
  TableOfContents = "tableOfContents",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words"
}

export enum markdownRemarkConnectionSortOrderValues {
  Asc = "ASC",
  Desc = "DESC"
}

export enum markdownRemarkDistinctEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody"
}

export enum markdownRemarkGroupEnum {
  Id = "id",
  Parent = "parent",
  InternalContent = "internal___content",
  InternalType = "internal___type",
  InternalContentDigest = "internal___contentDigest",
  InternalOwner = "internal___owner",
  FrontmatterTitle = "frontmatter___title",
  RawMarkdownBody = "rawMarkdownBody"
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all ContentfulContentType nodes */
  allContentfulContentType?: Maybe<ContentfulContentTypeConnection>;
  /** Connection to all ContentfulCategory nodes */
  allContentfulCategory?: Maybe<ContentfulCategoryConnection>;
  /** Connection to all ContentfulPost nodes */
  allContentfulPost?: Maybe<ContentfulPostConnection>;
  /** Connection to all contentfulPostContentRichTextNode nodes */
  allContentfulPostContentRichTextNode?: Maybe<
    ContentfulPostContentRichTextNodeConnection
  >;
  /** Connection to all contentfulPostDescriptionTextNode nodes */
  allContentfulPostDescriptionTextNode?: Maybe<
    ContentfulPostDescriptionTextNodeConnection
  >;
  /** Connection to all ContentfulFeaturedPost nodes */
  allContentfulFeaturedPost?: Maybe<ContentfulFeaturedPostConnection>;
  /** Connection to all ContentfulAsset nodes */
  allContentfulAsset?: Maybe<ContentfulAssetConnection>;
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;

  sitePage?: Maybe<SitePage>;

  sitePlugin?: Maybe<SitePlugin>;

  site?: Maybe<Site>;

  contentfulContentType?: Maybe<ContentfulContentType>;

  contentfulCategory?: Maybe<ContentfulCategory>;

  contentfulPost?: Maybe<ContentfulPost>;

  contentfulPostContentRichTextNode?: Maybe<ContentfulPostContentRichTextNode>;

  contentfulPostDescriptionTextNode?: Maybe<ContentfulPostDescriptionTextNode>;

  contentfulFeaturedPost?: Maybe<ContentfulFeaturedPost>;

  contentfulAsset?: Maybe<ContentfulAsset>;

  markdownRemark?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean;
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  jsonName?: Maybe<string>;

  internalComponentName?: Maybe<string>;

  path?: Maybe<string>;

  component?: Maybe<string>;

  componentChunkName?: Maybe<string>;

  context?: Maybe<Context>;

  pluginCreator?: Maybe<SitePlugin>;

  pluginCreatorId?: Maybe<string>;

  componentPath?: Maybe<string>;

  internal?: Maybe<Internal_12>;
}

export interface Context {
  slug?: Maybe<string>;
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  resolve?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_3>;

  nodeAPIs?: Maybe<(Maybe<string>)[]>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;

  packageJson?: Maybe<PackageJson_2>;

  internal?: Maybe<Internal_13>;
}

export interface PluginOptions_3 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>;

  spaceId?: Maybe<string>;

  accessToken?: Maybe<string>;

  host?: Maybe<string>;

  environment?: Maybe<string>;

  maxWidth?: Maybe<number>;

  backgroundColor?: Maybe<string>;

  linkImagesToOriginal?: Maybe<boolean>;

  color?: Maybe<string>;

  google?: Maybe<Google_2>;

  name?: Maybe<string>;

  short_name?: Maybe<string>;

  start_url?: Maybe<string>;

  background_color?: Maybe<string>;

  theme_color?: Maybe<string>;

  display?: Maybe<string>;

  path?: Maybe<string>;

  pathCheck?: Maybe<boolean>;
}

export interface Plugins_2 {
  resolve?: Maybe<string>;

  id?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_4>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;
}

export interface PluginOptions_4 {
  maxWidth?: Maybe<number>;

  backgroundColor?: Maybe<string>;

  linkImagesToOriginal?: Maybe<boolean>;
}

export interface Google_2 {
  families?: Maybe<(Maybe<string>)[]>;
}

export interface PackageJson_2 {
  name?: Maybe<string>;

  description?: Maybe<string>;

  version?: Maybe<string>;

  main?: Maybe<string>;

  author?: Maybe<string>;

  license?: Maybe<string>;

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>;

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>;

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>;

  keywords?: Maybe<(Maybe<string>)[]>;
}

export interface Dependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface DevDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface PeerDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface Internal_13 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_12 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulContentTypeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulContentTypeGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulContentTypeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
}

/** Node of type ContentfulContentType */
export interface ContentfulContentType extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  name?: Maybe<string>;

  displayField?: Maybe<string>;

  description?: Maybe<string>;

  internal?: Maybe<Internal_14>;
}

export interface Internal_14 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulContentTypeGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulContentTypeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
}

/** A connection to a list of items. */
export interface ContentfulCategoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulCategoryEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulCategoryGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulCategoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulCategory>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulCategory>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulCategory>;
}

/** Node of type ContentfulCategory */
export interface ContentfulCategory extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  post?: Maybe<(Maybe<ContentfulPost>)[]>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_15>;

  node_locale?: Maybe<string>;
}

/** Node of type ContentfulPost */
export interface ContentfulPost extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type contentfulPostContentRichTextNode */
  childContentfulPostContentRichTextNode?: Maybe<
    ContentfulPostContentRichTextNode
  >;
  /** The child of this node of type contentfulPostDescriptionTextNode */
  childContentfulPostDescriptionTextNode?: Maybe<
    ContentfulPostDescriptionTextNode
  >;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  category?: Maybe<ContentfulCategory>;

  featuredImage?: Maybe<ContentfulAsset>;

  content?: Maybe<ContentfulPostContentRichTextNode>;

  description?: Maybe<ContentfulPostDescriptionTextNode>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_16>;

  node_locale?: Maybe<string>;

  featured_post?: Maybe<(Maybe<ContentfulFeaturedPost>)[]>;
}

/** Node of type contentfulPostContentRichTextNode */
export interface ContentfulPostContentRichTextNode extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  content?: Maybe<string>;

  nodeType?: Maybe<string>;

  internal?: Maybe<Internal_17>;
}

export interface Internal_17 {
  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  content?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type contentfulPostDescriptionTextNode */
export interface ContentfulPostDescriptionTextNode extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;

  description?: Maybe<string>;

  internal?: Maybe<Internal_18>;
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_19>;

  frontmatter?: Maybe<Frontmatter_2>;

  rawMarkdownBody?: Maybe<string>;

  html?: Maybe<string>;

  htmlAst?: Maybe<Json>;

  excerpt?: Maybe<string>;

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>;

  timeToRead?: Maybe<number>;

  tableOfContents?: Maybe<string>;

  wordCount?: Maybe<WordCount>;
}

export interface Internal_19 {
  content?: Maybe<string>;

  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Frontmatter_2 {
  title?: Maybe<string>;
}

export interface MarkdownHeading {
  value?: Maybe<string>;

  depth?: Maybe<number>;
}

export interface WordCount {
  paragraphs?: Maybe<number>;

  sentences?: Maybe<number>;

  words?: Maybe<number>;
}

export interface Internal_18 {
  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  content?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type ContentfulAsset */
export interface ContentfulAsset extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  contentful_id?: Maybe<string>;

  file?: Maybe<File_2>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  node_locale?: Maybe<string>;

  internal?: Maybe<Internal_20>;

  fixed?: Maybe<ContentfulFixed>;

  resolutions?: Maybe<ContentfulResolutions>;

  fluid?: Maybe<ContentfulFluid>;

  sizes?: Maybe<ContentfulSizes>;

  resize?: Maybe<ContentfulResize>;
}

export interface File_2 {
  url?: Maybe<string>;

  details?: Maybe<Details_2>;

  fileName?: Maybe<string>;

  contentType?: Maybe<string>;
}

export interface Details_2 {
  size?: Maybe<number>;

  image?: Maybe<Image_2>;
}

export interface Image_2 {
  width?: Maybe<number>;

  height?: Maybe<number>;
}

export interface Internal_20 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface ContentfulFixed {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;
}

export interface ContentfulResolutions {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;
}

export interface ContentfulFluid {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;
}

export interface ContentfulSizes {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;
}

export interface ContentfulResize {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  src?: Maybe<string>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  aspectRatio?: Maybe<number>;
}

export interface Internal_16 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type ContentfulFeaturedPost */
export interface ContentfulFeaturedPost extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  post?: Maybe<ContentfulPost>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_21>;

  node_locale?: Maybe<string>;
}

export interface Internal_21 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_15 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulCategoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulCategoryGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulCategoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulCategory>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulCategory>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulCategory>;
}

/** A connection to a list of items. */
export interface ContentfulPostConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPostEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulPostGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulPostEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPost>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPost>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPost>;
}

/** A connection to a list of items. */
export interface ContentfulPostGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPostGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPostGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPost>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPost>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPost>;
}

/** A connection to a list of items. */
export interface ContentfulPostContentRichTextNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPostContentRichTextNodeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<
    (Maybe<ContentfulPostContentRichTextNodeGroupConnectionConnection>)[]
  >;
}

/** An edge in a connection. */
export interface ContentfulPostContentRichTextNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPostContentRichTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPostContentRichTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPostContentRichTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulPostContentRichTextNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<
    (Maybe<ContentfulPostContentRichTextNodeGroupConnectionEdge>)[]
  >;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPostContentRichTextNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPostContentRichTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPostContentRichTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPostContentRichTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulPostDescriptionTextNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPostDescriptionTextNodeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<
    (Maybe<ContentfulPostDescriptionTextNodeGroupConnectionConnection>)[]
  >;
}

/** An edge in a connection. */
export interface ContentfulPostDescriptionTextNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPostDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPostDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPostDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulPostDescriptionTextNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<
    (Maybe<ContentfulPostDescriptionTextNodeGroupConnectionEdge>)[]
  >;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPostDescriptionTextNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPostDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPostDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPostDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulFeaturedPostConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulFeaturedPostEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulFeaturedPostGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulFeaturedPostEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulFeaturedPost>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulFeaturedPost>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulFeaturedPost>;
}

/** A connection to a list of items. */
export interface ContentfulFeaturedPostGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulFeaturedPostGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulFeaturedPostGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulFeaturedPost>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulFeaturedPost>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulFeaturedPost>;
}

/** A connection to a list of items. */
export interface ContentfulAssetConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulAssetEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulAssetGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulAssetEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
}

/** A connection to a list of items. */
export interface ContentfulAssetGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulAssetGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulAssetGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  siteMetadata?: Maybe<SiteMetadata_2>;

  port?: Maybe<Date>;

  host?: Maybe<string>;

  pathPrefix?: Maybe<string>;

  polyfill?: Maybe<boolean>;

  buildTime?: Maybe<Date>;

  internal?: Maybe<Internal_22>;
}

export interface SiteMetadata_2 {
  title?: Maybe<string>;

  description?: Maybe<string>;

  author?: Maybe<string>;
}

export interface Internal_22 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePageConnectionSort>;

  filter?: Maybe<FilterSitePage>;
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePluginConnectionSort>;

  filter?: Maybe<FilterSitePlugin>;
}
export interface AllContentfulContentTypeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulContentTypeConnectionSort>;

  filter?: Maybe<FilterContentfulContentType>;
}
export interface AllContentfulCategoryQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulCategoryConnectionSort>;

  filter?: Maybe<FilterContentfulCategory>;
}
export interface AllContentfulPostQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPostConnectionSort>;

  filter?: Maybe<FilterContentfulPost>;
}
export interface AllContentfulPostContentRichTextNodeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPostContentRichTextNodeConnectionSort>;

  filter?: Maybe<FilterContentfulPostContentRichTextNode>;
}
export interface AllContentfulPostDescriptionTextNodeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPostDescriptionTextNodeConnectionSort>;

  filter?: Maybe<FilterContentfulPostDescriptionTextNode>;
}
export interface AllContentfulFeaturedPostQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulFeaturedPostConnectionSort>;

  filter?: Maybe<FilterContentfulFeaturedPost>;
}
export interface AllContentfulAssetQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulAssetConnectionSort>;

  filter?: Maybe<FilterContentfulAsset>;
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<MarkdownRemarkConnectionSort>;

  filter?: Maybe<FilterMarkdownRemark>;
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>;

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;

  path?: Maybe<SitePagePathQueryString_2>;

  component?: Maybe<SitePageComponentQueryString>;

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;

  context?: Maybe<SitePageContextInputObject>;

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageComponentPathQueryString>;

  id?: Maybe<SitePageIdQueryString_2>;

  internal?: Maybe<SitePageInternalInputObject_2>;
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>;

  id?: Maybe<SitePluginIdQueryString_2>;

  name?: Maybe<SitePluginNameQueryString_2>;

  version?: Maybe<SitePluginVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginInternalInputObject_2>;
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;

  port?: Maybe<SitePortQueryString_2>;

  host?: Maybe<SiteHostQueryString_2>;

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;

  buildTime?: Maybe<SiteBuildTimeQueryString_2>;

  id?: Maybe<SiteIdQueryString_2>;

  internal?: Maybe<SiteInternalInputObject_2>;
}
export interface ContentfulContentTypeQueryArgs {
  id?: Maybe<ContentfulContentTypeIdQueryString_2>;

  name?: Maybe<ContentfulContentTypeNameQueryString_2>;

  displayField?: Maybe<ContentfulContentTypeDisplayFieldQueryString_2>;

  description?: Maybe<ContentfulContentTypeDescriptionQueryString_2>;

  internal?: Maybe<ContentfulContentTypeInternalInputObject_2>;
}
export interface ContentfulCategoryQueryArgs {
  title?: Maybe<ContentfulCategoryTitleQueryString_2>;

  slug?: Maybe<ContentfulCategorySlugQueryString_2>;

  post?: Maybe<ContentfulCategoryPostQueryList_2>;

  id?: Maybe<ContentfulCategoryIdQueryString_2>;

  contentful_id?: Maybe<ContentfulCategoryContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulCategoryCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCategoryUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulCategoryInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCategoryNodeLocaleQueryString_2>;
}
export interface ContentfulPostQueryArgs {
  title?: Maybe<ContentfulPostTitleQueryString_2>;

  slug?: Maybe<ContentfulPostSlugQueryString_2>;

  category?: Maybe<ContentfulPostCategoryInputObject_2>;

  featuredImage?: Maybe<ContentfulPostFeaturedImageInputObject_2>;

  content?: Maybe<ContentfulPostContentInputObject_2>;

  description?: Maybe<ContentfulPostDescriptionInputObject_2>;

  id?: Maybe<ContentfulPostIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPostContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPostUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPostNodeLocaleQueryString_2>;

  featured_post?: Maybe<ContentfulPostFeaturedPostQueryList_2>;
}
export interface ContentfulPostContentRichTextNodeQueryArgs {
  content?: Maybe<ContentfulPostContentRichTextNodeContentQueryString_2>;

  nodeType?: Maybe<ContentfulPostContentRichTextNodeNodeTypeQueryString_2>;

  id?: Maybe<ContentfulPostContentRichTextNodeIdQueryString_2>;

  internal?: Maybe<ContentfulPostContentRichTextNodeInternalInputObject_2>;
}
export interface ContentfulPostDescriptionTextNodeQueryArgs {
  id?: Maybe<ContentfulPostDescriptionTextNodeIdQueryString_2>;

  description?: Maybe<
    ContentfulPostDescriptionTextNodeDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulPostDescriptionTextNodeInternalInputObject_2>;
}
export interface ContentfulFeaturedPostQueryArgs {
  post?: Maybe<ContentfulFeaturedPostPostInputObject_2>;

  id?: Maybe<ContentfulFeaturedPostIdQueryString_2>;

  contentful_id?: Maybe<ContentfulFeaturedPostContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulFeaturedPostCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulFeaturedPostUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulFeaturedPostInternalInputObject_2>;

  node_locale?: Maybe<ContentfulFeaturedPostNodeLocaleQueryString_2>;
}
export interface ContentfulAssetQueryArgs {
  contentful_id?: Maybe<ContentfulAssetContentfulIdQueryString_2>;

  id?: Maybe<ContentfulAssetIdQueryString_2>;

  file?: Maybe<ContentfulAssetFileInputObject_2>;

  title?: Maybe<ContentfulAssetTitleQueryString_2>;

  description?: Maybe<ContentfulAssetDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulAssetNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulAssetInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_3>;

  resolutions?: Maybe<ResolutionsTypeName_3>;

  fluid?: Maybe<FluidTypeName_3>;

  sizes?: Maybe<SizesTypeName_3>;

  resize?: Maybe<ResizeTypeName_3>;
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>;

  html?: Maybe<HtmlQueryString_3>;

  excerpt?: Maybe<ExcerptQueryString_3>;

  headings?: Maybe<HeadingsQueryList_3>;

  timeToRead?: Maybe<TimeToReadQueryInt_3>;

  tableOfContents?: Maybe<TableOfContentsQueryString_3>;

  wordCount?: Maybe<WordCountTypeName_3>;
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>;
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePageGroupEnum>;
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>;
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePluginGroupEnum>;
}
export interface DistinctContentfulContentTypeConnectionArgs {
  field?: Maybe<ContentfulContentTypeDistinctEnum>;
}
export interface GroupContentfulContentTypeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulContentTypeGroupEnum>;
}
export interface DistinctContentfulCategoryConnectionArgs {
  field?: Maybe<ContentfulCategoryDistinctEnum>;
}
export interface GroupContentfulCategoryConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulCategoryGroupEnum>;
}
export interface CreatedAtContentfulCategoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulCategoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedAtContentfulPostArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulPostArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number;

  truncate?: Maybe<boolean>;

  format?: Maybe<ExcerptFormats>;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string;
}
export interface FixedContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface ResolutionsContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface FluidContentfulAssetArgs {
  maxWidth?: number;

  maxHeight?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;

  sizes?: Maybe<string>;
}
export interface SizesContentfulAssetArgs {
  maxWidth?: number;

  maxHeight?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;

  sizes?: Maybe<string>;
}
export interface ResizeContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  jpegProgressive?: boolean;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  toFormat?: Maybe<ContentfulImageFormat>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface CreatedAtContentfulFeaturedPostArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulFeaturedPostArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulPostConnectionArgs {
  field?: Maybe<ContentfulPostDistinctEnum>;
}
export interface GroupContentfulPostConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPostGroupEnum>;
}
export interface DistinctContentfulPostContentRichTextNodeConnectionArgs {
  field?: Maybe<ContentfulPostContentRichTextNodeDistinctEnum>;
}
export interface GroupContentfulPostContentRichTextNodeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPostContentRichTextNodeGroupEnum>;
}
export interface DistinctContentfulPostDescriptionTextNodeConnectionArgs {
  field?: Maybe<ContentfulPostDescriptionTextNodeDistinctEnum>;
}
export interface GroupContentfulPostDescriptionTextNodeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPostDescriptionTextNodeGroupEnum>;
}
export interface DistinctContentfulFeaturedPostConnectionArgs {
  field?: Maybe<ContentfulFeaturedPostDistinctEnum>;
}
export interface GroupContentfulFeaturedPostConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulFeaturedPostGroupEnum>;
}
export interface DistinctContentfulAssetConnectionArgs {
  field?: Maybe<ContentfulAssetDistinctEnum>;
}
export interface GroupContentfulAssetConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulAssetGroupEnum>;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<MarkdownRemarkGroupEnum>;
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
