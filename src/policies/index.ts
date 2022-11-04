// https://www.terraform.io/docs/providers/sumologic/r/policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#audit Policies#audit}
  */
  readonly audit: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#data_access_level Policies#data_access_level}
  */
  readonly dataAccessLevel: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#id Policies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#max_user_session_timeout Policies#max_user_session_timeout}
  */
  readonly maxUserSessionTimeout: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#search_audit Policies#search_audit}
  */
  readonly searchAudit: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#share_dashboards_outside_organization Policies#share_dashboards_outside_organization}
  */
  readonly shareDashboardsOutsideOrganization: boolean | cdktf.IResolvable;
  /**
  * user_concurrent_sessions_limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#user_concurrent_sessions_limit Policies#user_concurrent_sessions_limit}
  */
  readonly userConcurrentSessionsLimit: PoliciesUserConcurrentSessionsLimit;
}
export interface PoliciesUserConcurrentSessionsLimit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#enabled Policies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/policies#max_concurrent_sessions Policies#max_concurrent_sessions}
  */
  readonly maxConcurrentSessions?: number;
}

export function policiesUserConcurrentSessionsLimitToTerraform(struct?: PoliciesUserConcurrentSessionsLimitOutputReference | PoliciesUserConcurrentSessionsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_sessions: cdktf.numberToTerraform(struct!.maxConcurrentSessions),
  }
}

export class PoliciesUserConcurrentSessionsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PoliciesUserConcurrentSessionsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentSessions = this._maxConcurrentSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoliciesUserConcurrentSessionsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxConcurrentSessions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxConcurrentSessions = value.maxConcurrentSessions;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_concurrent_sessions - computed: false, optional: true, required: false
  private _maxConcurrentSessions?: number; 
  public get maxConcurrentSessions() {
    return this.getNumberAttribute('max_concurrent_sessions');
  }
  public set maxConcurrentSessions(value: number) {
    this._maxConcurrentSessions = value;
  }
  public resetMaxConcurrentSessions() {
    this._maxConcurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentSessionsInput() {
    return this._maxConcurrentSessions;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/policies sumologic_policies}
*/
export class Policies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_policies";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/policies sumologic_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: PoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_policies',
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
    this._audit = config.audit;
    this._dataAccessLevel = config.dataAccessLevel;
    this._id = config.id;
    this._maxUserSessionTimeout = config.maxUserSessionTimeout;
    this._searchAudit = config.searchAudit;
    this._shareDashboardsOutsideOrganization = config.shareDashboardsOutsideOrganization;
    this._userConcurrentSessionsLimit.internalValue = config.userConcurrentSessionsLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit - computed: false, optional: false, required: true
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // data_access_level - computed: false, optional: false, required: true
  private _dataAccessLevel?: boolean | cdktf.IResolvable; 
  public get dataAccessLevel() {
    return this.getBooleanAttribute('data_access_level');
  }
  public set dataAccessLevel(value: boolean | cdktf.IResolvable) {
    this._dataAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessLevelInput() {
    return this._dataAccessLevel;
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

  // max_user_session_timeout - computed: false, optional: false, required: true
  private _maxUserSessionTimeout?: string; 
  public get maxUserSessionTimeout() {
    return this.getStringAttribute('max_user_session_timeout');
  }
  public set maxUserSessionTimeout(value: string) {
    this._maxUserSessionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserSessionTimeoutInput() {
    return this._maxUserSessionTimeout;
  }

  // search_audit - computed: false, optional: false, required: true
  private _searchAudit?: boolean | cdktf.IResolvable; 
  public get searchAudit() {
    return this.getBooleanAttribute('search_audit');
  }
  public set searchAudit(value: boolean | cdktf.IResolvable) {
    this._searchAudit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAuditInput() {
    return this._searchAudit;
  }

  // share_dashboards_outside_organization - computed: false, optional: false, required: true
  private _shareDashboardsOutsideOrganization?: boolean | cdktf.IResolvable; 
  public get shareDashboardsOutsideOrganization() {
    return this.getBooleanAttribute('share_dashboards_outside_organization');
  }
  public set shareDashboardsOutsideOrganization(value: boolean | cdktf.IResolvable) {
    this._shareDashboardsOutsideOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDashboardsOutsideOrganizationInput() {
    return this._shareDashboardsOutsideOrganization;
  }

  // user_concurrent_sessions_limit - computed: false, optional: false, required: true
  private _userConcurrentSessionsLimit = new PoliciesUserConcurrentSessionsLimitOutputReference(this, "user_concurrent_sessions_limit");
  public get userConcurrentSessionsLimit() {
    return this._userConcurrentSessionsLimit;
  }
  public putUserConcurrentSessionsLimit(value: PoliciesUserConcurrentSessionsLimit) {
    this._userConcurrentSessionsLimit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userConcurrentSessionsLimitInput() {
    return this._userConcurrentSessionsLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit: cdktf.booleanToTerraform(this._audit),
      data_access_level: cdktf.booleanToTerraform(this._dataAccessLevel),
      id: cdktf.stringToTerraform(this._id),
      max_user_session_timeout: cdktf.stringToTerraform(this._maxUserSessionTimeout),
      search_audit: cdktf.booleanToTerraform(this._searchAudit),
      share_dashboards_outside_organization: cdktf.booleanToTerraform(this._shareDashboardsOutsideOrganization),
      user_concurrent_sessions_limit: policiesUserConcurrentSessionsLimitToTerraform(this._userConcurrentSessionsLimit.internalValue),
    };
  }
}
