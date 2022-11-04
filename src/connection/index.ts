// https://www.terraform.io/docs/providers/sumologic/r/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#connection_subtype Connection#connection_subtype}
  */
  readonly connectionSubtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#custom_headers Connection#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#default_payload Connection#default_payload}
  */
  readonly defaultPayload: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#description Connection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#headers Connection#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#type Connection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#url Connection#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/connection#webhook_type Connection#webhook_type}
  */
  readonly webhookType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/connection sumologic_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/connection sumologic_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_connection',
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
    this._connectionSubtype = config.connectionSubtype;
    this._customHeaders = config.customHeaders;
    this._defaultPayload = config.defaultPayload;
    this._description = config.description;
    this._headers = config.headers;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._url = config.url;
    this._webhookType = config.webhookType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_subtype - computed: false, optional: true, required: false
  private _connectionSubtype?: string; 
  public get connectionSubtype() {
    return this.getStringAttribute('connection_subtype');
  }
  public set connectionSubtype(value: string) {
    this._connectionSubtype = value;
  }
  public resetConnectionSubtype() {
    this._connectionSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSubtypeInput() {
    return this._connectionSubtype;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // default_payload - computed: false, optional: false, required: true
  private _defaultPayload?: string; 
  public get defaultPayload() {
    return this.getStringAttribute('default_payload');
  }
  public set defaultPayload(value: string) {
    this._defaultPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPayloadInput() {
    return this._defaultPayload;
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

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_subtype: cdktf.stringToTerraform(this._connectionSubtype),
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      default_payload: cdktf.stringToTerraform(this._defaultPayload),
      description: cdktf.stringToTerraform(this._description),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      webhook_type: cdktf.stringToTerraform(this._webhookType),
    };
  }
}
