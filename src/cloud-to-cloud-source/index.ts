// https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudToCloudSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source#collector_id CloudToCloudSource#collector_id}
  */
  readonly collectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source#config CloudToCloudSource#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source#id CloudToCloudSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source#schema_ref CloudToCloudSource#schema_ref}
  */
  readonly schemaRef: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source sumologic_cloud_to_cloud_source}
*/
export class CloudToCloudSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cloud_to_cloud_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cloud_to_cloud_source sumologic_cloud_to_cloud_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudToCloudSourceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudToCloudSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cloud_to_cloud_source',
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
    this._collectorId = config.collectorId;
    this._config = config.config;
    this._id = config.id;
    this._schemaRef = config.schemaRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // schema_ref - computed: false, optional: false, required: true
  private _schemaRef?: { [key: string]: string }; 
  public get schemaRef() {
    return this.getStringMapAttribute('schema_ref');
  }
  public set schemaRef(value: { [key: string]: string }) {
    this._schemaRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRefInput() {
    return this._schemaRef;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_id: cdktf.numberToTerraform(this._collectorId),
      config: cdktf.stringToTerraform(this._config),
      id: cdktf.stringToTerraform(this._id),
      schema_ref: cdktf.hashMapper(cdktf.stringToTerraform)(this._schemaRef),
    };
  }
}
