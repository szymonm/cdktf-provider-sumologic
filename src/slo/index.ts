// https://www.terraform.io/docs/providers/sumologic/r/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#application Slo#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#created_at Slo#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#created_by Slo#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#id Slo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#is_locked Slo#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#is_mutable Slo#is_mutable}
  */
  readonly isMutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#is_system Slo#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#modified_at Slo#modified_at}
  */
  readonly modifiedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#modified_by Slo#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#parent_id Slo#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#post_request_map Slo#post_request_map}
  */
  readonly postRequestMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#service Slo#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#signal_type Slo#signal_type}
  */
  readonly signalType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#version Slo#version}
  */
  readonly version?: number;
  /**
  * compliance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#compliance Slo#compliance}
  */
  readonly compliance: SloCompliance[] | cdktf.IResolvable;
  /**
  * indicator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#indicator Slo#indicator}
  */
  readonly indicator: SloIndicator;
}
export interface SloCompliance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#compliance_type Slo#compliance_type}
  */
  readonly complianceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#size Slo#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#start_from Slo#start_from}
  */
  readonly startFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#target Slo#target}
  */
  readonly target: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#timezone Slo#timezone}
  */
  readonly timezone: string;
}

export function sloComplianceToTerraform(struct?: SloCompliance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_type: cdktf.stringToTerraform(struct!.complianceType),
    size: cdktf.stringToTerraform(struct!.size),
    start_from: cdktf.stringToTerraform(struct!.startFrom),
    target: cdktf.numberToTerraform(struct!.target),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export class SloComplianceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloCompliance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceType = this._complianceType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._startFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.startFrom = this._startFrom;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloCompliance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complianceType = undefined;
      this._size = undefined;
      this._startFrom = undefined;
      this._target = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complianceType = value.complianceType;
      this._size = value.size;
      this._startFrom = value.startFrom;
      this._target = value.target;
      this._timezone = value.timezone;
    }
  }

  // compliance_type - computed: false, optional: false, required: true
  private _complianceType?: string; 
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }
  public set complianceType(value: string) {
    this._complianceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceTypeInput() {
    return this._complianceType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // start_from - computed: false, optional: true, required: false
  private _startFrom?: string; 
  public get startFrom() {
    return this.getStringAttribute('start_from');
  }
  public set startFrom(value: string) {
    this._startFrom = value;
  }
  public resetStartFrom() {
    this._startFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startFromInput() {
    return this._startFrom;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class SloComplianceList extends cdktf.ComplexList {
  public internalValue? : SloCompliance[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloComplianceOutputReference {
    return new SloComplianceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicatorRequestBasedEvaluationQueriesQueryGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#field Slo#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#row_id Slo#row_id}
  */
  readonly rowId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#use_row_count Slo#use_row_count}
  */
  readonly useRowCount: boolean | cdktf.IResolvable;
}

export function sloIndicatorRequestBasedEvaluationQueriesQueryGroupToTerraform(struct?: SloIndicatorRequestBasedEvaluationQueriesQueryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    query: cdktf.stringToTerraform(struct!.query),
    row_id: cdktf.stringToTerraform(struct!.rowId),
    use_row_count: cdktf.booleanToTerraform(struct!.useRowCount),
  }
}

export class SloIndicatorRequestBasedEvaluationQueriesQueryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloIndicatorRequestBasedEvaluationQueriesQueryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowId = this._rowId;
    }
    if (this._useRowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRowCount = this._useRowCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorRequestBasedEvaluationQueriesQueryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._query = undefined;
      this._rowId = undefined;
      this._useRowCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._query = value.query;
      this._rowId = value.rowId;
      this._useRowCount = value.useRowCount;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // row_id - computed: false, optional: false, required: true
  private _rowId?: string; 
  public get rowId() {
    return this.getStringAttribute('row_id');
  }
  public set rowId(value: string) {
    this._rowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIdInput() {
    return this._rowId;
  }

  // use_row_count - computed: false, optional: false, required: true
  private _useRowCount?: boolean | cdktf.IResolvable; 
  public get useRowCount() {
    return this.getBooleanAttribute('use_row_count');
  }
  public set useRowCount(value: boolean | cdktf.IResolvable) {
    this._useRowCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useRowCountInput() {
    return this._useRowCount;
  }
}

export class SloIndicatorRequestBasedEvaluationQueriesQueryGroupList extends cdktf.ComplexList {
  public internalValue? : SloIndicatorRequestBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloIndicatorRequestBasedEvaluationQueriesQueryGroupOutputReference {
    return new SloIndicatorRequestBasedEvaluationQueriesQueryGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicatorRequestBasedEvaluationQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_group_type Slo#query_group_type}
  */
  readonly queryGroupType: string;
  /**
  * query_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_group Slo#query_group}
  */
  readonly queryGroup: SloIndicatorRequestBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable;
}

export function sloIndicatorRequestBasedEvaluationQueriesToTerraform(struct?: SloIndicatorRequestBasedEvaluationQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_group_type: cdktf.stringToTerraform(struct!.queryGroupType),
    query_group: cdktf.listMapper(sloIndicatorRequestBasedEvaluationQueriesQueryGroupToTerraform, true)(struct!.queryGroup),
  }
}

export class SloIndicatorRequestBasedEvaluationQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloIndicatorRequestBasedEvaluationQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGroupType = this._queryGroupType;
    }
    if (this._queryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGroup = this._queryGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorRequestBasedEvaluationQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryGroupType = undefined;
      this._queryGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryGroupType = value.queryGroupType;
      this._queryGroup.internalValue = value.queryGroup;
    }
  }

  // query_group_type - computed: false, optional: false, required: true
  private _queryGroupType?: string; 
  public get queryGroupType() {
    return this.getStringAttribute('query_group_type');
  }
  public set queryGroupType(value: string) {
    this._queryGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGroupTypeInput() {
    return this._queryGroupType;
  }

  // query_group - computed: false, optional: false, required: true
  private _queryGroup = new SloIndicatorRequestBasedEvaluationQueriesQueryGroupList(this, "query_group", false);
  public get queryGroup() {
    return this._queryGroup;
  }
  public putQueryGroup(value: SloIndicatorRequestBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable) {
    this._queryGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGroupInput() {
    return this._queryGroup.internalValue;
  }
}

export class SloIndicatorRequestBasedEvaluationQueriesList extends cdktf.ComplexList {
  public internalValue? : SloIndicatorRequestBasedEvaluationQueries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloIndicatorRequestBasedEvaluationQueriesOutputReference {
    return new SloIndicatorRequestBasedEvaluationQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicatorRequestBasedEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#op Slo#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#threshold Slo#threshold}
  */
  readonly threshold?: number;
  /**
  * queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#queries Slo#queries}
  */
  readonly queries: SloIndicatorRequestBasedEvaluationQueries[] | cdktf.IResolvable;
}

export function sloIndicatorRequestBasedEvaluationToTerraform(struct?: SloIndicatorRequestBasedEvaluationOutputReference | SloIndicatorRequestBasedEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    queries: cdktf.listMapper(sloIndicatorRequestBasedEvaluationQueriesToTerraform, true)(struct!.queries),
  }
}

export class SloIndicatorRequestBasedEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloIndicatorRequestBasedEvaluation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorRequestBasedEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._op = undefined;
      this._queryType = undefined;
      this._threshold = undefined;
      this._queries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._op = value.op;
      this._queryType = value.queryType;
      this._threshold = value.threshold;
      this._queries.internalValue = value.queries;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
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

  // queries - computed: false, optional: false, required: true
  private _queries = new SloIndicatorRequestBasedEvaluationQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SloIndicatorRequestBasedEvaluationQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface SloIndicatorWindowBasedEvaluationQueriesQueryGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#field Slo#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#row_id Slo#row_id}
  */
  readonly rowId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#use_row_count Slo#use_row_count}
  */
  readonly useRowCount: boolean | cdktf.IResolvable;
}

export function sloIndicatorWindowBasedEvaluationQueriesQueryGroupToTerraform(struct?: SloIndicatorWindowBasedEvaluationQueriesQueryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    query: cdktf.stringToTerraform(struct!.query),
    row_id: cdktf.stringToTerraform(struct!.rowId),
    use_row_count: cdktf.booleanToTerraform(struct!.useRowCount),
  }
}

export class SloIndicatorWindowBasedEvaluationQueriesQueryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloIndicatorWindowBasedEvaluationQueriesQueryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowId = this._rowId;
    }
    if (this._useRowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRowCount = this._useRowCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorWindowBasedEvaluationQueriesQueryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._query = undefined;
      this._rowId = undefined;
      this._useRowCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._query = value.query;
      this._rowId = value.rowId;
      this._useRowCount = value.useRowCount;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // row_id - computed: false, optional: false, required: true
  private _rowId?: string; 
  public get rowId() {
    return this.getStringAttribute('row_id');
  }
  public set rowId(value: string) {
    this._rowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIdInput() {
    return this._rowId;
  }

  // use_row_count - computed: false, optional: false, required: true
  private _useRowCount?: boolean | cdktf.IResolvable; 
  public get useRowCount() {
    return this.getBooleanAttribute('use_row_count');
  }
  public set useRowCount(value: boolean | cdktf.IResolvable) {
    this._useRowCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useRowCountInput() {
    return this._useRowCount;
  }
}

export class SloIndicatorWindowBasedEvaluationQueriesQueryGroupList extends cdktf.ComplexList {
  public internalValue? : SloIndicatorWindowBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloIndicatorWindowBasedEvaluationQueriesQueryGroupOutputReference {
    return new SloIndicatorWindowBasedEvaluationQueriesQueryGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicatorWindowBasedEvaluationQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_group_type Slo#query_group_type}
  */
  readonly queryGroupType: string;
  /**
  * query_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_group Slo#query_group}
  */
  readonly queryGroup: SloIndicatorWindowBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable;
}

export function sloIndicatorWindowBasedEvaluationQueriesToTerraform(struct?: SloIndicatorWindowBasedEvaluationQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_group_type: cdktf.stringToTerraform(struct!.queryGroupType),
    query_group: cdktf.listMapper(sloIndicatorWindowBasedEvaluationQueriesQueryGroupToTerraform, true)(struct!.queryGroup),
  }
}

export class SloIndicatorWindowBasedEvaluationQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SloIndicatorWindowBasedEvaluationQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGroupType = this._queryGroupType;
    }
    if (this._queryGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryGroup = this._queryGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorWindowBasedEvaluationQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryGroupType = undefined;
      this._queryGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryGroupType = value.queryGroupType;
      this._queryGroup.internalValue = value.queryGroup;
    }
  }

  // query_group_type - computed: false, optional: false, required: true
  private _queryGroupType?: string; 
  public get queryGroupType() {
    return this.getStringAttribute('query_group_type');
  }
  public set queryGroupType(value: string) {
    this._queryGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGroupTypeInput() {
    return this._queryGroupType;
  }

  // query_group - computed: false, optional: false, required: true
  private _queryGroup = new SloIndicatorWindowBasedEvaluationQueriesQueryGroupList(this, "query_group", false);
  public get queryGroup() {
    return this._queryGroup;
  }
  public putQueryGroup(value: SloIndicatorWindowBasedEvaluationQueriesQueryGroup[] | cdktf.IResolvable) {
    this._queryGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryGroupInput() {
    return this._queryGroup.internalValue;
  }
}

export class SloIndicatorWindowBasedEvaluationQueriesList extends cdktf.ComplexList {
  public internalValue? : SloIndicatorWindowBasedEvaluationQueries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SloIndicatorWindowBasedEvaluationQueriesOutputReference {
    return new SloIndicatorWindowBasedEvaluationQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicatorWindowBasedEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#op Slo#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#size Slo#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#threshold Slo#threshold}
  */
  readonly threshold: number;
  /**
  * queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#queries Slo#queries}
  */
  readonly queries: SloIndicatorWindowBasedEvaluationQueries[] | cdktf.IResolvable;
}

export function sloIndicatorWindowBasedEvaluationToTerraform(struct?: SloIndicatorWindowBasedEvaluationOutputReference | SloIndicatorWindowBasedEvaluation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    op: cdktf.stringToTerraform(struct!.op),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    size: cdktf.stringToTerraform(struct!.size),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    queries: cdktf.listMapper(sloIndicatorWindowBasedEvaluationQueriesToTerraform, true)(struct!.queries),
  }
}

export class SloIndicatorWindowBasedEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloIndicatorWindowBasedEvaluation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicatorWindowBasedEvaluation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._op = undefined;
      this._queryType = undefined;
      this._size = undefined;
      this._threshold = undefined;
      this._queries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._op = value.op;
      this._queryType = value.queryType;
      this._size = value.size;
      this._threshold = value.threshold;
      this._queries.internalValue = value.queries;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // queries - computed: false, optional: false, required: true
  private _queries = new SloIndicatorWindowBasedEvaluationQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: SloIndicatorWindowBasedEvaluationQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}
export interface SloIndicator {
  /**
  * request_based_evaluation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#request_based_evaluation Slo#request_based_evaluation}
  */
  readonly requestBasedEvaluation?: SloIndicatorRequestBasedEvaluation;
  /**
  * window_based_evaluation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/slo#window_based_evaluation Slo#window_based_evaluation}
  */
  readonly windowBasedEvaluation?: SloIndicatorWindowBasedEvaluation;
}

export function sloIndicatorToTerraform(struct?: SloIndicatorOutputReference | SloIndicator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_based_evaluation: sloIndicatorRequestBasedEvaluationToTerraform(struct!.requestBasedEvaluation),
    window_based_evaluation: sloIndicatorWindowBasedEvaluationToTerraform(struct!.windowBasedEvaluation),
  }
}

export class SloIndicatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SloIndicator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestBasedEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBasedEvaluation = this._requestBasedEvaluation?.internalValue;
    }
    if (this._windowBasedEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBasedEvaluation = this._windowBasedEvaluation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestBasedEvaluation.internalValue = undefined;
      this._windowBasedEvaluation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestBasedEvaluation.internalValue = value.requestBasedEvaluation;
      this._windowBasedEvaluation.internalValue = value.windowBasedEvaluation;
    }
  }

  // request_based_evaluation - computed: false, optional: true, required: false
  private _requestBasedEvaluation = new SloIndicatorRequestBasedEvaluationOutputReference(this, "request_based_evaluation");
  public get requestBasedEvaluation() {
    return this._requestBasedEvaluation;
  }
  public putRequestBasedEvaluation(value: SloIndicatorRequestBasedEvaluation) {
    this._requestBasedEvaluation.internalValue = value;
  }
  public resetRequestBasedEvaluation() {
    this._requestBasedEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedEvaluationInput() {
    return this._requestBasedEvaluation.internalValue;
  }

  // window_based_evaluation - computed: false, optional: true, required: false
  private _windowBasedEvaluation = new SloIndicatorWindowBasedEvaluationOutputReference(this, "window_based_evaluation");
  public get windowBasedEvaluation() {
    return this._windowBasedEvaluation;
  }
  public putWindowBasedEvaluation(value: SloIndicatorWindowBasedEvaluation) {
    this._windowBasedEvaluation.internalValue = value;
  }
  public resetWindowBasedEvaluation() {
    this._windowBasedEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBasedEvaluationInput() {
    return this._windowBasedEvaluation.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/slo sumologic_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_slo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/slo sumologic_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_slo',
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
    this._application = config.application;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._id = config.id;
    this._isLocked = config.isLocked;
    this._isMutable = config.isMutable;
    this._isSystem = config.isSystem;
    this._modifiedAt = config.modifiedAt;
    this._modifiedBy = config.modifiedBy;
    this._name = config.name;
    this._parentId = config.parentId;
    this._postRequestMap = config.postRequestMap;
    this._service = config.service;
    this._signalType = config.signalType;
    this._version = config.version;
    this._compliance.internalValue = config.compliance;
    this._indicator.internalValue = config.indicator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: true, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_mutable - computed: true, optional: true, required: false
  private _isMutable?: boolean | cdktf.IResolvable; 
  public get isMutable() {
    return this.getBooleanAttribute('is_mutable');
  }
  public set isMutable(value: boolean | cdktf.IResolvable) {
    this._isMutable = value;
  }
  public resetIsMutable() {
    this._isMutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMutableInput() {
    return this._isMutable;
  }

  // is_system - computed: true, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // modified_at - computed: true, optional: true, required: false
  private _modifiedAt?: string; 
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }
  public set modifiedAt(value: string) {
    this._modifiedAt = value;
  }
  public resetModifiedAt() {
    this._modifiedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedAtInput() {
    return this._modifiedAt;
  }

  // modified_by - computed: true, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // post_request_map - computed: false, optional: true, required: false
  private _postRequestMap?: { [key: string]: string }; 
  public get postRequestMap() {
    return this.getStringMapAttribute('post_request_map');
  }
  public set postRequestMap(value: { [key: string]: string }) {
    this._postRequestMap = value;
  }
  public resetPostRequestMap() {
    this._postRequestMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestMapInput() {
    return this._postRequestMap;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signal_type - computed: false, optional: false, required: true
  private _signalType?: string; 
  public get signalType() {
    return this.getStringAttribute('signal_type');
  }
  public set signalType(value: string) {
    this._signalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTypeInput() {
    return this._signalType;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // compliance - computed: false, optional: false, required: true
  private _compliance = new SloComplianceList(this, "compliance", false);
  public get compliance() {
    return this._compliance;
  }
  public putCompliance(value: SloCompliance[] | cdktf.IResolvable) {
    this._compliance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceInput() {
    return this._compliance.internalValue;
  }

  // indicator - computed: false, optional: false, required: true
  private _indicator = new SloIndicatorOutputReference(this, "indicator");
  public get indicator() {
    return this._indicator;
  }
  public putIndicator(value: SloIndicator) {
    this._indicator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorInput() {
    return this._indicator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      is_mutable: cdktf.booleanToTerraform(this._isMutable),
      is_system: cdktf.booleanToTerraform(this._isSystem),
      modified_at: cdktf.stringToTerraform(this._modifiedAt),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      post_request_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._postRequestMap),
      service: cdktf.stringToTerraform(this._service),
      signal_type: cdktf.stringToTerraform(this._signalType),
      version: cdktf.numberToTerraform(this._version),
      compliance: cdktf.listMapper(sloComplianceToTerraform, true)(this._compliance.internalValue),
      indicator: sloIndicatorToTerraform(this._indicator.internalValue),
    };
  }
}
