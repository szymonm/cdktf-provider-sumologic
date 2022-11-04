// https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngestBudgetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#action IngestBudgetV2#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#audit_threshold IngestBudgetV2#audit_threshold}
  */
  readonly auditThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#capacity_bytes IngestBudgetV2#capacity_bytes}
  */
  readonly capacityBytes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#description IngestBudgetV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#id IngestBudgetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#name IngestBudgetV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#reset_time IngestBudgetV2#reset_time}
  */
  readonly resetTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#scope IngestBudgetV2#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2#timezone IngestBudgetV2#timezone}
  */
  readonly timezone: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2 sumologic_ingest_budget_v2}
*/
export class IngestBudgetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_ingest_budget_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/ingest_budget_v2 sumologic_ingest_budget_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngestBudgetV2Config
  */
  public constructor(scope: Construct, id: string, config: IngestBudgetV2Config) {
    super(scope, id, {
      terraformResourceType: 'sumologic_ingest_budget_v2',
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
    this._action = config.action;
    this._auditThreshold = config.auditThreshold;
    this._capacityBytes = config.capacityBytes;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._resetTime = config.resetTime;
    this._scope = config.scope;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // audit_threshold - computed: false, optional: true, required: false
  private _auditThreshold?: number; 
  public get auditThreshold() {
    return this.getNumberAttribute('audit_threshold');
  }
  public set auditThreshold(value: number) {
    this._auditThreshold = value;
  }
  public resetAuditThreshold() {
    this._auditThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditThresholdInput() {
    return this._auditThreshold;
  }

  // capacity_bytes - computed: false, optional: false, required: true
  private _capacityBytes?: number; 
  public get capacityBytes() {
    return this.getNumberAttribute('capacity_bytes');
  }
  public set capacityBytes(value: number) {
    this._capacityBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityBytesInput() {
    return this._capacityBytes;
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

  // reset_time - computed: false, optional: false, required: true
  private _resetTime?: string; 
  public get resetTime() {
    return this.getStringAttribute('reset_time');
  }
  public set resetTime(value: string) {
    this._resetTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      audit_threshold: cdktf.numberToTerraform(this._auditThreshold),
      capacity_bytes: cdktf.numberToTerraform(this._capacityBytes),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reset_time: cdktf.stringToTerraform(this._resetTime),
      scope: cdktf.stringToTerraform(this._scope),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }
}
