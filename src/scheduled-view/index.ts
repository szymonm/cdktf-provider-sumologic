// https://www.terraform.io/docs/providers/sumologic/r/scheduled_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#data_forwarding_id ScheduledView#data_forwarding_id}
  */
  readonly dataForwardingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#id ScheduledView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#index_name ScheduledView#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#parsing_mode ScheduledView#parsing_mode}
  */
  readonly parsingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#query ScheduledView#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#reduce_retention_period_immediately ScheduledView#reduce_retention_period_immediately}
  */
  readonly reduceRetentionPeriodImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#retention_period ScheduledView#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view#start_time ScheduledView#start_time}
  */
  readonly startTime: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view sumologic_scheduled_view}
*/
export class ScheduledView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_scheduled_view";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/scheduled_view sumologic_scheduled_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledViewConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledViewConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_scheduled_view',
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
    this._dataForwardingId = config.dataForwardingId;
    this._id = config.id;
    this._indexName = config.indexName;
    this._parsingMode = config.parsingMode;
    this._query = config.query;
    this._reduceRetentionPeriodImmediately = config.reduceRetentionPeriodImmediately;
    this._retentionPeriod = config.retentionPeriod;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_forwarding_id - computed: false, optional: true, required: false
  private _dataForwardingId?: string; 
  public get dataForwardingId() {
    return this.getStringAttribute('data_forwarding_id');
  }
  public set dataForwardingId(value: string) {
    this._dataForwardingId = value;
  }
  public resetDataForwardingId() {
    this._dataForwardingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataForwardingIdInput() {
    return this._dataForwardingId;
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

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // parsing_mode - computed: false, optional: true, required: false
  private _parsingMode?: string; 
  public get parsingMode() {
    return this.getStringAttribute('parsing_mode');
  }
  public set parsingMode(value: string) {
    this._parsingMode = value;
  }
  public resetParsingMode() {
    this._parsingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModeInput() {
    return this._parsingMode;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // reduce_retention_period_immediately - computed: false, optional: true, required: false
  private _reduceRetentionPeriodImmediately?: boolean | cdktf.IResolvable; 
  public get reduceRetentionPeriodImmediately() {
    return this.getBooleanAttribute('reduce_retention_period_immediately');
  }
  public set reduceRetentionPeriodImmediately(value: boolean | cdktf.IResolvable) {
    this._reduceRetentionPeriodImmediately = value;
  }
  public resetReduceRetentionPeriodImmediately() {
    this._reduceRetentionPeriodImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reduceRetentionPeriodImmediatelyInput() {
    return this._reduceRetentionPeriodImmediately;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_forwarding_id: cdktf.stringToTerraform(this._dataForwardingId),
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      parsing_mode: cdktf.stringToTerraform(this._parsingMode),
      query: cdktf.stringToTerraform(this._query),
      reduce_retention_period_immediately: cdktf.booleanToTerraform(this._reduceRetentionPeriodImmediately),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }
}
