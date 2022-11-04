// https://www.terraform.io/docs/providers/sumologic/r/collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#category Collector#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#description Collector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#fields Collector#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector#timezone Collector#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/collector sumologic_collector}
*/
export class Collector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_collector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/collector sumologic_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectorConfig
  */
  public constructor(scope: Construct, id: string, config: CollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_collector',
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
    this._category = config.category;
    this._description = config.description;
    this._fields = config.fields;
    this._id = config.id;
    this._name = config.name;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }
}
