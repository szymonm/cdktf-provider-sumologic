// https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectorIngestBudgetAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment#collector_id CollectorIngestBudgetAssignment#collector_id}
  */
  readonly collectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment#id CollectorIngestBudgetAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment#ingest_budget_id CollectorIngestBudgetAssignment#ingest_budget_id}
  */
  readonly ingestBudgetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment sumologic_collector_ingest_budget_assignment}
*/
export class CollectorIngestBudgetAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_collector_ingest_budget_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/collector_ingest_budget_assignment sumologic_collector_ingest_budget_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectorIngestBudgetAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: CollectorIngestBudgetAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_collector_ingest_budget_assignment',
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
    this._id = config.id;
    this._ingestBudgetId = config.ingestBudgetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_id - computed: false, optional: false, required: true
  private _collectorId?: string; 
  public get collectorId() {
    return this.getStringAttribute('collector_id');
  }
  public set collectorId(value: string) {
    this._collectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
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

  // ingest_budget_id - computed: false, optional: false, required: true
  private _ingestBudgetId?: string; 
  public get ingestBudgetId() {
    return this.getStringAttribute('ingest_budget_id');
  }
  public set ingestBudgetId(value: string) {
    this._ingestBudgetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestBudgetIdInput() {
    return this._ingestBudgetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_id: cdktf.stringToTerraform(this._collectorId),
      id: cdktf.stringToTerraform(this._id),
      ingest_budget_id: cdktf.stringToTerraform(this._ingestBudgetId),
    };
  }
}
