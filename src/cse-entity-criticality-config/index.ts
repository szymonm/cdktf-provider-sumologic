// https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseEntityCriticalityConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config#id CseEntityCriticalityConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config#name CseEntityCriticalityConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config#severity_expression CseEntityCriticalityConfig#severity_expression}
  */
  readonly severityExpression: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config sumologic_cse_entity_criticality_config}
*/
export class CseEntityCriticalityConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_entity_criticality_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cse_entity_criticality_config sumologic_cse_entity_criticality_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseEntityCriticalityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CseEntityCriticalityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_entity_criticality_config',
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
    this._id = config.id;
    this._name = config.name;
    this._severityExpression = config.severityExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // severity_expression - computed: false, optional: false, required: true
  private _severityExpression?: string; 
  public get severityExpression() {
    return this.getStringAttribute('severity_expression');
  }
  public set severityExpression(value: string) {
    this._severityExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityExpressionInput() {
    return this._severityExpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      severity_expression: cdktf.stringToTerraform(this._severityExpression),
    };
  }
}
