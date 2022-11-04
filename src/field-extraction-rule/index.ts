// https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FieldExtractionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule#enabled FieldExtractionRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule#id FieldExtractionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule#name FieldExtractionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule#parse_expression FieldExtractionRule#parse_expression}
  */
  readonly parseExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule#scope FieldExtractionRule#scope}
  */
  readonly scope: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule sumologic_field_extraction_rule}
*/
export class FieldExtractionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_field_extraction_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/field_extraction_rule sumologic_field_extraction_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FieldExtractionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FieldExtractionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_field_extraction_rule',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._parseExpression = config.parseExpression;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parse_expression - computed: false, optional: false, required: true
  private _parseExpression?: string; 
  public get parseExpression() {
    return this.getStringAttribute('parse_expression');
  }
  public set parseExpression(value: string) {
    this._parseExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parseExpressionInput() {
    return this._parseExpression;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parse_expression: cdktf.stringToTerraform(this._parseExpression),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }
}
