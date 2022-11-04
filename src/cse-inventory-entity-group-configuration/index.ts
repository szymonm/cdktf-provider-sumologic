// https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseInventoryEntityGroupConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#criticality CseInventoryEntityGroupConfiguration#criticality}
  */
  readonly criticality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#description CseInventoryEntityGroupConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#group CseInventoryEntityGroupConfiguration#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#id CseInventoryEntityGroupConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#inventory_source CseInventoryEntityGroupConfiguration#inventory_source}
  */
  readonly inventorySource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#inventory_type CseInventoryEntityGroupConfiguration#inventory_type}
  */
  readonly inventoryType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#name CseInventoryEntityGroupConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#suppressed CseInventoryEntityGroupConfiguration#suppressed}
  */
  readonly suppressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration#tags CseInventoryEntityGroupConfiguration#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration sumologic_cse_inventory_entity_group_configuration}
*/
export class CseInventoryEntityGroupConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_inventory_entity_group_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cse_inventory_entity_group_configuration sumologic_cse_inventory_entity_group_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseInventoryEntityGroupConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CseInventoryEntityGroupConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_inventory_entity_group_configuration',
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
    this._criticality = config.criticality;
    this._description = config.description;
    this._group = config.group;
    this._id = config.id;
    this._inventorySource = config.inventorySource;
    this._inventoryType = config.inventoryType;
    this._name = config.name;
    this._suppressed = config.suppressed;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // criticality - computed: false, optional: true, required: false
  private _criticality?: string; 
  public get criticality() {
    return this.getStringAttribute('criticality');
  }
  public set criticality(value: string) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // inventory_source - computed: false, optional: false, required: true
  private _inventorySource?: string; 
  public get inventorySource() {
    return this.getStringAttribute('inventory_source');
  }
  public set inventorySource(value: string) {
    this._inventorySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventorySourceInput() {
    return this._inventorySource;
  }

  // inventory_type - computed: false, optional: false, required: true
  private _inventoryType?: string; 
  public get inventoryType() {
    return this.getStringAttribute('inventory_type');
  }
  public set inventoryType(value: string) {
    this._inventoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryTypeInput() {
    return this._inventoryType;
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

  // suppressed - computed: false, optional: true, required: false
  private _suppressed?: boolean | cdktf.IResolvable; 
  public get suppressed() {
    return this.getBooleanAttribute('suppressed');
  }
  public set suppressed(value: boolean | cdktf.IResolvable) {
    this._suppressed = value;
  }
  public resetSuppressed() {
    this._suppressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedInput() {
    return this._suppressed;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      criticality: cdktf.stringToTerraform(this._criticality),
      description: cdktf.stringToTerraform(this._description),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      inventory_source: cdktf.stringToTerraform(this._inventorySource),
      inventory_type: cdktf.stringToTerraform(this._inventoryType),
      name: cdktf.stringToTerraform(this._name),
      suppressed: cdktf.booleanToTerraform(this._suppressed),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
