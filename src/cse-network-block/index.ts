// https://www.terraform.io/docs/providers/sumologic/r/cse_network_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseNetworkBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block#address_block CseNetworkBlock#address_block}
  */
  readonly addressBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block#id CseNetworkBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block#internal CseNetworkBlock#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block#label CseNetworkBlock#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block#suppresses_signals CseNetworkBlock#suppresses_signals}
  */
  readonly suppressesSignals?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block sumologic_cse_network_block}
*/
export class CseNetworkBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_network_block";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cse_network_block sumologic_cse_network_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseNetworkBlockConfig
  */
  public constructor(scope: Construct, id: string, config: CseNetworkBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_network_block',
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
    this._addressBlock = config.addressBlock;
    this._id = config.id;
    this._internal = config.internal;
    this._label = config.label;
    this._suppressesSignals = config.suppressesSignals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_block - computed: false, optional: false, required: true
  private _addressBlock?: string; 
  public get addressBlock() {
    return this.getStringAttribute('address_block');
  }
  public set addressBlock(value: string) {
    this._addressBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBlockInput() {
    return this._addressBlock;
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

  // internal - computed: false, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // suppresses_signals - computed: false, optional: true, required: false
  private _suppressesSignals?: boolean | cdktf.IResolvable; 
  public get suppressesSignals() {
    return this.getBooleanAttribute('suppresses_signals');
  }
  public set suppressesSignals(value: boolean | cdktf.IResolvable) {
    this._suppressesSignals = value;
  }
  public resetSuppressesSignals() {
    this._suppressesSignals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressesSignalsInput() {
    return this._suppressesSignals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_block: cdktf.stringToTerraform(this._addressBlock),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.booleanToTerraform(this._internal),
      label: cdktf.stringToTerraform(this._label),
      suppresses_signals: cdktf.booleanToTerraform(this._suppressesSignals),
    };
  }
}
