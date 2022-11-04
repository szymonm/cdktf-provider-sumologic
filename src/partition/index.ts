// https://www.terraform.io/docs/providers/sumologic/r/partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#analytics_tier Partition#analytics_tier}
  */
  readonly analyticsTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#id Partition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#is_compliant Partition#is_compliant}
  */
  readonly isCompliant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#name Partition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#reduce_retention_period_immediately Partition#reduce_retention_period_immediately}
  */
  readonly reduceRetentionPeriodImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#retention_period Partition#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/partition#routing_expression Partition#routing_expression}
  */
  readonly routingExpression?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/partition sumologic_partition}
*/
export class Partition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_partition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/partition sumologic_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_partition',
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
    this._analyticsTier = config.analyticsTier;
    this._id = config.id;
    this._isCompliant = config.isCompliant;
    this._name = config.name;
    this._reduceRetentionPeriodImmediately = config.reduceRetentionPeriodImmediately;
    this._retentionPeriod = config.retentionPeriod;
    this._routingExpression = config.routingExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_tier - computed: false, optional: true, required: false
  private _analyticsTier?: string; 
  public get analyticsTier() {
    return this.getStringAttribute('analytics_tier');
  }
  public set analyticsTier(value: string) {
    this._analyticsTier = value;
  }
  public resetAnalyticsTier() {
    this._analyticsTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsTierInput() {
    return this._analyticsTier;
  }

  // data_forwarding_id - computed: true, optional: false, required: false
  public get dataForwardingId() {
    return this.getStringAttribute('data_forwarding_id');
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

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_compliant - computed: false, optional: true, required: false
  private _isCompliant?: boolean | cdktf.IResolvable; 
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }
  public set isCompliant(value: boolean | cdktf.IResolvable) {
    this._isCompliant = value;
  }
  public resetIsCompliant() {
    this._isCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompliantInput() {
    return this._isCompliant;
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

  // routing_expression - computed: false, optional: true, required: false
  private _routingExpression?: string; 
  public get routingExpression() {
    return this.getStringAttribute('routing_expression');
  }
  public set routingExpression(value: string) {
    this._routingExpression = value;
  }
  public resetRoutingExpression() {
    this._routingExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingExpressionInput() {
    return this._routingExpression;
  }

  // total_bytes - computed: true, optional: false, required: false
  public get totalBytes() {
    return this.getNumberAttribute('total_bytes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_tier: cdktf.stringToTerraform(this._analyticsTier),
      id: cdktf.stringToTerraform(this._id),
      is_compliant: cdktf.booleanToTerraform(this._isCompliant),
      name: cdktf.stringToTerraform(this._name),
      reduce_retention_period_immediately: cdktf.booleanToTerraform(this._reduceRetentionPeriodImmediately),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      routing_expression: cdktf.stringToTerraform(this._routingExpression),
    };
  }
}
