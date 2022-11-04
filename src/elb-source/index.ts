// https://www.terraform.io/docs/providers/sumologic/r/elb_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#automatic_date_parsing ElbSource#automatic_date_parsing}
  */
  readonly automaticDateParsing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#category ElbSource#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#collector_id ElbSource#collector_id}
  */
  readonly collectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#content_type ElbSource#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#cutoff_relative_time ElbSource#cutoff_relative_time}
  */
  readonly cutoffRelativeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#cutoff_timestamp ElbSource#cutoff_timestamp}
  */
  readonly cutoffTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#description ElbSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#fields ElbSource#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#force_timezone ElbSource#force_timezone}
  */
  readonly forceTimezone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#host_name ElbSource#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#id ElbSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#manual_prefix_regexp ElbSource#manual_prefix_regexp}
  */
  readonly manualPrefixRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#multiline_processing_enabled ElbSource#multiline_processing_enabled}
  */
  readonly multilineProcessingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#name ElbSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#paused ElbSource#paused}
  */
  readonly paused: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#scan_interval ElbSource#scan_interval}
  */
  readonly scanInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#timezone ElbSource#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#use_autoline_matching ElbSource#use_autoline_matching}
  */
  readonly useAutolineMatching?: boolean | cdktf.IResolvable;
  /**
  * authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#authentication ElbSource#authentication}
  */
  readonly authentication: ElbSourceAuthentication;
  /**
  * default_date_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#default_date_formats ElbSource#default_date_formats}
  */
  readonly defaultDateFormats?: ElbSourceDefaultDateFormats[] | cdktf.IResolvable;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#filters ElbSource#filters}
  */
  readonly filters?: ElbSourceFilters[] | cdktf.IResolvable;
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#path ElbSource#path}
  */
  readonly path: ElbSourcePath;
}
export interface ElbSourceAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#access_key ElbSource#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#auth_provider_x509_cert_url ElbSource#auth_provider_x509_cert_url}
  */
  readonly authProviderX509CertUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#auth_uri ElbSource#auth_uri}
  */
  readonly authUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#client_email ElbSource#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#client_id ElbSource#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#client_x509_cert_url ElbSource#client_x509_cert_url}
  */
  readonly clientX509CertUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#private_key ElbSource#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#private_key_id ElbSource#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#project_id ElbSource#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#region ElbSource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#role_arn ElbSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#secret_key ElbSource#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#token_uri ElbSource#token_uri}
  */
  readonly tokenUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#type ElbSource#type}
  */
  readonly type: string;
}

export function elbSourceAuthenticationToTerraform(struct?: ElbSourceAuthenticationOutputReference | ElbSourceAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    auth_provider_x509_cert_url: cdktf.stringToTerraform(struct!.authProviderX509CertUrl),
    auth_uri: cdktf.stringToTerraform(struct!.authUri),
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_x509_cert_url: cdktf.stringToTerraform(struct!.clientX509CertUrl),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    token_uri: cdktf.stringToTerraform(struct!.tokenUri),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ElbSourceAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElbSourceAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._authProviderX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProviderX509CertUrl = this._authProviderX509CertUrl;
    }
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientX509CertUrl = this._clientX509CertUrl;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._tokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUri = this._tokenUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourceAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._authProviderX509CertUrl = undefined;
      this._authUri = undefined;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._clientX509CertUrl = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._secretKey = undefined;
      this._tokenUri = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._authProviderX509CertUrl = value.authProviderX509CertUrl;
      this._authUri = value.authUri;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._clientX509CertUrl = value.clientX509CertUrl;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._projectId = value.projectId;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._secretKey = value.secretKey;
      this._tokenUri = value.tokenUri;
      this._type = value.type;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // auth_provider_x509_cert_url - computed: false, optional: true, required: false
  private _authProviderX509CertUrl?: string; 
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }
  public set authProviderX509CertUrl(value: string) {
    this._authProviderX509CertUrl = value;
  }
  public resetAuthProviderX509CertUrl() {
    this._authProviderX509CertUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderX509CertUrlInput() {
    return this._authProviderX509CertUrl;
  }

  // auth_uri - computed: false, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_email - computed: false, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_x509_cert_url - computed: false, optional: true, required: false
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  public resetClientX509CertUrl() {
    this._clientX509CertUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // token_uri - computed: false, optional: true, required: false
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  public resetTokenUri() {
    this._tokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElbSourceDefaultDateFormats {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#format ElbSource#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#locator ElbSource#locator}
  */
  readonly locator?: string;
}

export function elbSourceDefaultDateFormatsToTerraform(struct?: ElbSourceDefaultDateFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    locator: cdktf.stringToTerraform(struct!.locator),
  }
}

export class ElbSourceDefaultDateFormatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbSourceDefaultDateFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._locator !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourceDefaultDateFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._locator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._locator = value.locator;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // locator - computed: false, optional: true, required: false
  private _locator?: string; 
  public get locator() {
    return this.getStringAttribute('locator');
  }
  public set locator(value: string) {
    this._locator = value;
  }
  public resetLocator() {
    this._locator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator;
  }
}

export class ElbSourceDefaultDateFormatsList extends cdktf.ComplexList {
  public internalValue? : ElbSourceDefaultDateFormats[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbSourceDefaultDateFormatsOutputReference {
    return new ElbSourceDefaultDateFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbSourceFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#filter_type ElbSource#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#mask ElbSource#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#name ElbSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#regexp ElbSource#regexp}
  */
  readonly regexp: string;
}

export function elbSourceFiltersToTerraform(struct?: ElbSourceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    mask: cdktf.stringToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}

export class ElbSourceFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbSourceFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourceFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._mask = undefined;
      this._name = undefined;
      this._regexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._mask = value.mask;
      this._name = value.name;
      this._regexp = value.regexp;
    }
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }
}

export class ElbSourceFiltersList extends cdktf.ComplexList {
  public internalValue? : ElbSourceFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbSourceFiltersOutputReference {
    return new ElbSourceFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbSourcePathSnsTopicOrSubscriptionArn {
}

export function elbSourcePathSnsTopicOrSubscriptionArnToTerraform(struct?: ElbSourcePathSnsTopicOrSubscriptionArn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ElbSourcePathSnsTopicOrSubscriptionArnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbSourcePathSnsTopicOrSubscriptionArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourcePathSnsTopicOrSubscriptionArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // is_success - computed: true, optional: false, required: false
  public get isSuccess() {
    return this.getBooleanAttribute('is_success');
  }
}

export class ElbSourcePathSnsTopicOrSubscriptionArnList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbSourcePathSnsTopicOrSubscriptionArnOutputReference {
    return new ElbSourcePathSnsTopicOrSubscriptionArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbSourcePathCustomServices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#prefixes ElbSource#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#service_name ElbSource#service_name}
  */
  readonly serviceName?: string;
}

export function elbSourcePathCustomServicesToTerraform(struct?: ElbSourcePathCustomServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class ElbSourcePathCustomServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbSourcePathCustomServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourcePathCustomServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes = value.prefixes;
      this._serviceName = value.serviceName;
    }
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class ElbSourcePathCustomServicesList extends cdktf.ComplexList {
  public internalValue? : ElbSourcePathCustomServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbSourcePathCustomServicesOutputReference {
    return new ElbSourcePathCustomServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbSourcePathTagFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#namespace ElbSource#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#tags ElbSource#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#type ElbSource#type}
  */
  readonly type?: string;
}

export function elbSourcePathTagFiltersToTerraform(struct?: ElbSourcePathTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ElbSourcePathTagFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbSourcePathTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourcePathTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._tags = value.tags;
      this._type = value.type;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElbSourcePathTagFiltersList extends cdktf.ComplexList {
  public internalValue? : ElbSourcePathTagFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbSourcePathTagFiltersOutputReference {
    return new ElbSourcePathTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbSourcePath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#bucket_name ElbSource#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#limit_to_namespaces ElbSource#limit_to_namespaces}
  */
  readonly limitToNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#limit_to_regions ElbSource#limit_to_regions}
  */
  readonly limitToRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#limit_to_services ElbSource#limit_to_services}
  */
  readonly limitToServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#path_expression ElbSource#path_expression}
  */
  readonly pathExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#type ElbSource#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#use_versioned_api ElbSource#use_versioned_api}
  */
  readonly useVersionedApi?: boolean | cdktf.IResolvable;
  /**
  * custom_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#custom_services ElbSource#custom_services}
  */
  readonly customServices?: ElbSourcePathCustomServices[] | cdktf.IResolvable;
  /**
  * tag_filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source#tag_filters ElbSource#tag_filters}
  */
  readonly tagFilters?: ElbSourcePathTagFilters[] | cdktf.IResolvable;
}

export function elbSourcePathToTerraform(struct?: ElbSourcePathOutputReference | ElbSourcePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    limit_to_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.limitToNamespaces),
    limit_to_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.limitToRegions),
    limit_to_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.limitToServices),
    path_expression: cdktf.stringToTerraform(struct!.pathExpression),
    type: cdktf.stringToTerraform(struct!.type),
    use_versioned_api: cdktf.booleanToTerraform(struct!.useVersionedApi),
    custom_services: cdktf.listMapper(elbSourcePathCustomServicesToTerraform, true)(struct!.customServices),
    tag_filters: cdktf.listMapper(elbSourcePathTagFiltersToTerraform, true)(struct!.tagFilters),
  }
}

export class ElbSourcePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElbSourcePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._limitToNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitToNamespaces = this._limitToNamespaces;
    }
    if (this._limitToRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitToRegions = this._limitToRegions;
    }
    if (this._limitToServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitToServices = this._limitToServices;
    }
    if (this._pathExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExpression = this._pathExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useVersionedApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVersionedApi = this._useVersionedApi;
    }
    if (this._customServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customServices = this._customServices?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbSourcePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._limitToNamespaces = undefined;
      this._limitToRegions = undefined;
      this._limitToServices = undefined;
      this._pathExpression = undefined;
      this._type = undefined;
      this._useVersionedApi = undefined;
      this._customServices.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._limitToNamespaces = value.limitToNamespaces;
      this._limitToRegions = value.limitToRegions;
      this._limitToServices = value.limitToServices;
      this._pathExpression = value.pathExpression;
      this._type = value.type;
      this._useVersionedApi = value.useVersionedApi;
      this._customServices.internalValue = value.customServices;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // limit_to_namespaces - computed: false, optional: true, required: false
  private _limitToNamespaces?: string[]; 
  public get limitToNamespaces() {
    return this.getListAttribute('limit_to_namespaces');
  }
  public set limitToNamespaces(value: string[]) {
    this._limitToNamespaces = value;
  }
  public resetLimitToNamespaces() {
    this._limitToNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitToNamespacesInput() {
    return this._limitToNamespaces;
  }

  // limit_to_regions - computed: false, optional: true, required: false
  private _limitToRegions?: string[]; 
  public get limitToRegions() {
    return this.getListAttribute('limit_to_regions');
  }
  public set limitToRegions(value: string[]) {
    this._limitToRegions = value;
  }
  public resetLimitToRegions() {
    this._limitToRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitToRegionsInput() {
    return this._limitToRegions;
  }

  // limit_to_services - computed: false, optional: true, required: false
  private _limitToServices?: string[]; 
  public get limitToServices() {
    return this.getListAttribute('limit_to_services');
  }
  public set limitToServices(value: string[]) {
    this._limitToServices = value;
  }
  public resetLimitToServices() {
    this._limitToServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitToServicesInput() {
    return this._limitToServices;
  }

  // path_expression - computed: false, optional: true, required: false
  private _pathExpression?: string; 
  public get pathExpression() {
    return this.getStringAttribute('path_expression');
  }
  public set pathExpression(value: string) {
    this._pathExpression = value;
  }
  public resetPathExpression() {
    this._pathExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExpressionInput() {
    return this._pathExpression;
  }

  // sns_topic_or_subscription_arn - computed: true, optional: false, required: false
  private _snsTopicOrSubscriptionArn = new ElbSourcePathSnsTopicOrSubscriptionArnList(this, "sns_topic_or_subscription_arn", false);
  public get snsTopicOrSubscriptionArn() {
    return this._snsTopicOrSubscriptionArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_versioned_api - computed: false, optional: true, required: false
  private _useVersionedApi?: boolean | cdktf.IResolvable; 
  public get useVersionedApi() {
    return this.getBooleanAttribute('use_versioned_api');
  }
  public set useVersionedApi(value: boolean | cdktf.IResolvable) {
    this._useVersionedApi = value;
  }
  public resetUseVersionedApi() {
    this._useVersionedApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVersionedApiInput() {
    return this._useVersionedApi;
  }

  // custom_services - computed: false, optional: true, required: false
  private _customServices = new ElbSourcePathCustomServicesList(this, "custom_services", false);
  public get customServices() {
    return this._customServices;
  }
  public putCustomServices(value: ElbSourcePathCustomServices[] | cdktf.IResolvable) {
    this._customServices.internalValue = value;
  }
  public resetCustomServices() {
    this._customServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServicesInput() {
    return this._customServices.internalValue;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new ElbSourcePathTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: ElbSourcePathTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source sumologic_elb_source}
*/
export class ElbSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_elb_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/elb_source sumologic_elb_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ElbSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_elb_source',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '2.19.1',
        providerVersionConstraint: '~> 2.19.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticDateParsing = config.automaticDateParsing;
    this._category = config.category;
    this._collectorId = config.collectorId;
    this._contentType = config.contentType;
    this._cutoffRelativeTime = config.cutoffRelativeTime;
    this._cutoffTimestamp = config.cutoffTimestamp;
    this._description = config.description;
    this._fields = config.fields;
    this._forceTimezone = config.forceTimezone;
    this._hostName = config.hostName;
    this._id = config.id;
    this._manualPrefixRegexp = config.manualPrefixRegexp;
    this._multilineProcessingEnabled = config.multilineProcessingEnabled;
    this._name = config.name;
    this._paused = config.paused;
    this._scanInterval = config.scanInterval;
    this._timezone = config.timezone;
    this._useAutolineMatching = config.useAutolineMatching;
    this._authentication.internalValue = config.authentication;
    this._defaultDateFormats.internalValue = config.defaultDateFormats;
    this._filters.internalValue = config.filters;
    this._path.internalValue = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_date_parsing - computed: false, optional: true, required: false
  private _automaticDateParsing?: boolean | cdktf.IResolvable; 
  public get automaticDateParsing() {
    return this.getBooleanAttribute('automatic_date_parsing');
  }
  public set automaticDateParsing(value: boolean | cdktf.IResolvable) {
    this._automaticDateParsing = value;
  }
  public resetAutomaticDateParsing() {
    this._automaticDateParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDateParsingInput() {
    return this._automaticDateParsing;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // collector_id - computed: false, optional: false, required: true
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // cutoff_relative_time - computed: false, optional: true, required: false
  private _cutoffRelativeTime?: string; 
  public get cutoffRelativeTime() {
    return this.getStringAttribute('cutoff_relative_time');
  }
  public set cutoffRelativeTime(value: string) {
    this._cutoffRelativeTime = value;
  }
  public resetCutoffRelativeTime() {
    this._cutoffRelativeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffRelativeTimeInput() {
    return this._cutoffRelativeTime;
  }

  // cutoff_timestamp - computed: false, optional: true, required: false
  private _cutoffTimestamp?: number; 
  public get cutoffTimestamp() {
    return this.getNumberAttribute('cutoff_timestamp');
  }
  public set cutoffTimestamp(value: number) {
    this._cutoffTimestamp = value;
  }
  public resetCutoffTimestamp() {
    this._cutoffTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffTimestampInput() {
    return this._cutoffTimestamp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // force_timezone - computed: false, optional: true, required: false
  private _forceTimezone?: boolean | cdktf.IResolvable; 
  public get forceTimezone() {
    return this.getBooleanAttribute('force_timezone');
  }
  public set forceTimezone(value: boolean | cdktf.IResolvable) {
    this._forceTimezone = value;
  }
  public resetForceTimezone() {
    this._forceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTimezoneInput() {
    return this._forceTimezone;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // manual_prefix_regexp - computed: false, optional: true, required: false
  private _manualPrefixRegexp?: string; 
  public get manualPrefixRegexp() {
    return this.getStringAttribute('manual_prefix_regexp');
  }
  public set manualPrefixRegexp(value: string) {
    this._manualPrefixRegexp = value;
  }
  public resetManualPrefixRegexp() {
    this._manualPrefixRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualPrefixRegexpInput() {
    return this._manualPrefixRegexp;
  }

  // multiline_processing_enabled - computed: false, optional: true, required: false
  private _multilineProcessingEnabled?: boolean | cdktf.IResolvable; 
  public get multilineProcessingEnabled() {
    return this.getBooleanAttribute('multiline_processing_enabled');
  }
  public set multilineProcessingEnabled(value: boolean | cdktf.IResolvable) {
    this._multilineProcessingEnabled = value;
  }
  public resetMultilineProcessingEnabled() {
    this._multilineProcessingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineProcessingEnabledInput() {
    return this._multilineProcessingEnabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // paused - computed: false, optional: false, required: true
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // scan_interval - computed: false, optional: false, required: true
  private _scanInterval?: number; 
  public get scanInterval() {
    return this.getNumberAttribute('scan_interval');
  }
  public set scanInterval(value: number) {
    this._scanInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_autoline_matching - computed: false, optional: true, required: false
  private _useAutolineMatching?: boolean | cdktf.IResolvable; 
  public get useAutolineMatching() {
    return this.getBooleanAttribute('use_autoline_matching');
  }
  public set useAutolineMatching(value: boolean | cdktf.IResolvable) {
    this._useAutolineMatching = value;
  }
  public resetUseAutolineMatching() {
    this._useAutolineMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAutolineMatchingInput() {
    return this._useAutolineMatching;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new ElbSourceAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ElbSourceAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // default_date_formats - computed: false, optional: true, required: false
  private _defaultDateFormats = new ElbSourceDefaultDateFormatsList(this, "default_date_formats", false);
  public get defaultDateFormats() {
    return this._defaultDateFormats;
  }
  public putDefaultDateFormats(value: ElbSourceDefaultDateFormats[] | cdktf.IResolvable) {
    this._defaultDateFormats.internalValue = value;
  }
  public resetDefaultDateFormats() {
    this._defaultDateFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDateFormatsInput() {
    return this._defaultDateFormats.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ElbSourceFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ElbSourceFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ElbSourcePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ElbSourcePath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_date_parsing: cdktf.booleanToTerraform(this._automaticDateParsing),
      category: cdktf.stringToTerraform(this._category),
      collector_id: cdktf.numberToTerraform(this._collectorId),
      content_type: cdktf.stringToTerraform(this._contentType),
      cutoff_relative_time: cdktf.stringToTerraform(this._cutoffRelativeTime),
      cutoff_timestamp: cdktf.numberToTerraform(this._cutoffTimestamp),
      description: cdktf.stringToTerraform(this._description),
      fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._fields),
      force_timezone: cdktf.booleanToTerraform(this._forceTimezone),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      manual_prefix_regexp: cdktf.stringToTerraform(this._manualPrefixRegexp),
      multiline_processing_enabled: cdktf.booleanToTerraform(this._multilineProcessingEnabled),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      scan_interval: cdktf.numberToTerraform(this._scanInterval),
      timezone: cdktf.stringToTerraform(this._timezone),
      use_autoline_matching: cdktf.booleanToTerraform(this._useAutolineMatching),
      authentication: elbSourceAuthenticationToTerraform(this._authentication.internalValue),
      default_date_formats: cdktf.listMapper(elbSourceDefaultDateFormatsToTerraform, true)(this._defaultDateFormats.internalValue),
      filters: cdktf.listMapper(elbSourceFiltersToTerraform, true)(this._filters.internalValue),
      path: elbSourcePathToTerraform(this._path.internalValue),
    };
  }
}
