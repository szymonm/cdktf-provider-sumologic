// https://www.terraform.io/docs/providers/sumologic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SumologicProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#access_id SumologicProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#access_key SumologicProvider#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#admin_mode SumologicProvider#admin_mode}
  */
  readonly adminMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#base_url SumologicProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#environment SumologicProvider#environment}
  */
  readonly environment?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic#alias SumologicProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic sumologic}
*/
export class SumologicProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic sumologic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SumologicProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SumologicProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '2.19.1',
        providerVersionConstraint: '~> 2.19.1'
      },
      terraformProviderSource: 'sumologic/sumologic'
    });
    this._accessId = config.accessId;
    this._accessKey = config.accessKey;
    this._adminMode = config.adminMode;
    this._baseUrl = config.baseUrl;
    this._environment = config.environment;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this._accessId;
  }
  public set accessId(value: string | undefined) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // admin_mode - computed: false, optional: true, required: false
  private _adminMode?: boolean | cdktf.IResolvable; 
  public get adminMode() {
    return this._adminMode;
  }
  public set adminMode(value: boolean | cdktf.IResolvable | undefined) {
    this._adminMode = value;
  }
  public resetAdminMode() {
    this._adminMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminModeInput() {
    return this._adminMode;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_id: cdktf.stringToTerraform(this._accessId),
      access_key: cdktf.stringToTerraform(this._accessKey),
      admin_mode: cdktf.booleanToTerraform(this._adminMode),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      environment: cdktf.stringToTerraform(this._environment),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
