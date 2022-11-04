// https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseInsightsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration#id CseInsightsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration#lookback_days CseInsightsConfiguration#lookback_days}
  */
  readonly lookbackDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration#threshold CseInsightsConfiguration#threshold}
  */
  readonly threshold?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration sumologic_cse_insights_configuration}
*/
export class CseInsightsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_insights_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cse_insights_configuration sumologic_cse_insights_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseInsightsConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CseInsightsConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_insights_configuration',
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
    this._lookbackDays = config.lookbackDays;
    this._threshold = config.threshold;
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

  // lookback_days - computed: false, optional: true, required: false
  private _lookbackDays?: number; 
  public get lookbackDays() {
    return this.getNumberAttribute('lookback_days');
  }
  public set lookbackDays(value: number) {
    this._lookbackDays = value;
  }
  public resetLookbackDays() {
    this._lookbackDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackDaysInput() {
    return this._lookbackDays;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lookback_days: cdktf.numberToTerraform(this._lookbackDays),
      threshold: cdktf.numberToTerraform(this._threshold),
    };
  }
}
