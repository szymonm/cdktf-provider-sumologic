// https://www.terraform.io/docs/providers/sumologic/r/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#domain Dashboard#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#folder_id Dashboard#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#refresh_interval Dashboard#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#theme Dashboard#theme}
  */
  readonly theme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * coloring_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#coloring_rule Dashboard#coloring_rule}
  */
  readonly coloringRule?: DashboardColoringRule[] | cdktf.IResolvable;
  /**
  * layout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#layout Dashboard#layout}
  */
  readonly layout?: DashboardLayout;
  /**
  * panel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#panel Dashboard#panel}
  */
  readonly panel?: DashboardPanel[] | cdktf.IResolvable;
  /**
  * time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#time_range Dashboard#time_range}
  */
  readonly timeRange: DashboardTimeRange;
  /**
  * topology_label_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#topology_label_map Dashboard#topology_label_map}
  */
  readonly topologyLabelMap?: DashboardTopologyLabelMap;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#variable Dashboard#variable}
  */
  readonly variable?: DashboardVariable[] | cdktf.IResolvable;
}
export interface DashboardColoringRuleColorThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#max Dashboard#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#min Dashboard#min}
  */
  readonly min?: number;
}

export function dashboardColoringRuleColorThresholdToTerraform(struct?: DashboardColoringRuleColorThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class DashboardColoringRuleColorThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardColoringRuleColorThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardColoringRuleColorThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class DashboardColoringRuleColorThresholdList extends cdktf.ComplexList {
  public internalValue? : DashboardColoringRuleColorThreshold[] | cdktf.IResolvable

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
  public get(index: number): DashboardColoringRuleColorThresholdOutputReference {
    return new DashboardColoringRuleColorThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardColoringRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#multiple_series_aggregate_function Dashboard#multiple_series_aggregate_function}
  */
  readonly multipleSeriesAggregateFunction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#scope Dashboard#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#single_series_aggregate_function Dashboard#single_series_aggregate_function}
  */
  readonly singleSeriesAggregateFunction: string;
  /**
  * color_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#color_threshold Dashboard#color_threshold}
  */
  readonly colorThreshold?: DashboardColoringRuleColorThreshold[] | cdktf.IResolvable;
}

export function dashboardColoringRuleToTerraform(struct?: DashboardColoringRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiple_series_aggregate_function: cdktf.stringToTerraform(struct!.multipleSeriesAggregateFunction),
    scope: cdktf.stringToTerraform(struct!.scope),
    single_series_aggregate_function: cdktf.stringToTerraform(struct!.singleSeriesAggregateFunction),
    color_threshold: cdktf.listMapper(dashboardColoringRuleColorThresholdToTerraform, true)(struct!.colorThreshold),
  }
}

export class DashboardColoringRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardColoringRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multipleSeriesAggregateFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleSeriesAggregateFunction = this._multipleSeriesAggregateFunction;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._singleSeriesAggregateFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSeriesAggregateFunction = this._singleSeriesAggregateFunction;
    }
    if (this._colorThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorThreshold = this._colorThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardColoringRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multipleSeriesAggregateFunction = undefined;
      this._scope = undefined;
      this._singleSeriesAggregateFunction = undefined;
      this._colorThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multipleSeriesAggregateFunction = value.multipleSeriesAggregateFunction;
      this._scope = value.scope;
      this._singleSeriesAggregateFunction = value.singleSeriesAggregateFunction;
      this._colorThreshold.internalValue = value.colorThreshold;
    }
  }

  // multiple_series_aggregate_function - computed: false, optional: false, required: true
  private _multipleSeriesAggregateFunction?: string; 
  public get multipleSeriesAggregateFunction() {
    return this.getStringAttribute('multiple_series_aggregate_function');
  }
  public set multipleSeriesAggregateFunction(value: string) {
    this._multipleSeriesAggregateFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleSeriesAggregateFunctionInput() {
    return this._multipleSeriesAggregateFunction;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // single_series_aggregate_function - computed: false, optional: false, required: true
  private _singleSeriesAggregateFunction?: string; 
  public get singleSeriesAggregateFunction() {
    return this.getStringAttribute('single_series_aggregate_function');
  }
  public set singleSeriesAggregateFunction(value: string) {
    this._singleSeriesAggregateFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSeriesAggregateFunctionInput() {
    return this._singleSeriesAggregateFunction;
  }

  // color_threshold - computed: false, optional: true, required: false
  private _colorThreshold = new DashboardColoringRuleColorThresholdList(this, "color_threshold", false);
  public get colorThreshold() {
    return this._colorThreshold;
  }
  public putColorThreshold(value: DashboardColoringRuleColorThreshold[] | cdktf.IResolvable) {
    this._colorThreshold.internalValue = value;
  }
  public resetColorThreshold() {
    this._colorThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorThresholdInput() {
    return this._colorThreshold.internalValue;
  }
}

export class DashboardColoringRuleList extends cdktf.ComplexList {
  public internalValue? : DashboardColoringRule[] | cdktf.IResolvable

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
  public get(index: number): DashboardColoringRuleOutputReference {
    return new DashboardColoringRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardLayoutGridLayoutStructure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#structure Dashboard#structure}
  */
  readonly structure: string;
}

export function dashboardLayoutGridLayoutStructureToTerraform(struct?: DashboardLayoutGridLayoutStructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    structure: cdktf.stringToTerraform(struct!.structure),
  }
}

export class DashboardLayoutGridLayoutStructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardLayoutGridLayoutStructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._structure !== undefined) {
      hasAnyValues = true;
      internalValueResult.structure = this._structure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLayoutGridLayoutStructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._structure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._structure = value.structure;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // structure - computed: false, optional: false, required: true
  private _structure?: string; 
  public get structure() {
    return this.getStringAttribute('structure');
  }
  public set structure(value: string) {
    this._structure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structureInput() {
    return this._structure;
  }
}

export class DashboardLayoutGridLayoutStructureList extends cdktf.ComplexList {
  public internalValue? : DashboardLayoutGridLayoutStructure[] | cdktf.IResolvable

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
  public get(index: number): DashboardLayoutGridLayoutStructureOutputReference {
    return new DashboardLayoutGridLayoutStructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardLayoutGrid {
  /**
  * layout_structure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#layout_structure Dashboard#layout_structure}
  */
  readonly layoutStructure: DashboardLayoutGridLayoutStructure[] | cdktf.IResolvable;
}

export function dashboardLayoutGridToTerraform(struct?: DashboardLayoutGridOutputReference | DashboardLayoutGrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layout_structure: cdktf.listMapper(dashboardLayoutGridLayoutStructureToTerraform, true)(struct!.layoutStructure),
  }
}

export class DashboardLayoutGridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardLayoutGrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layoutStructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutStructure = this._layoutStructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLayoutGrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layoutStructure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layoutStructure.internalValue = value.layoutStructure;
    }
  }

  // layout_structure - computed: false, optional: false, required: true
  private _layoutStructure = new DashboardLayoutGridLayoutStructureList(this, "layout_structure", false);
  public get layoutStructure() {
    return this._layoutStructure;
  }
  public putLayoutStructure(value: DashboardLayoutGridLayoutStructure[] | cdktf.IResolvable) {
    this._layoutStructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutStructureInput() {
    return this._layoutStructure.internalValue;
  }
}
export interface DashboardLayout {
  /**
  * grid block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#grid Dashboard#grid}
  */
  readonly grid?: DashboardLayoutGrid;
}

export function dashboardLayoutToTerraform(struct?: DashboardLayoutOutputReference | DashboardLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid: dashboardLayoutGridToTerraform(struct!.grid),
  }
}

export class DashboardLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grid = this._grid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grid.internalValue = value.grid;
    }
  }

  // grid - computed: false, optional: true, required: false
  private _grid = new DashboardLayoutGridOutputReference(this, "grid");
  public get grid() {
    return this._grid;
  }
  public putGrid(value: DashboardLayoutGrid) {
    this._grid.internalValue = value;
  }
  public resetGrid() {
    this._grid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridInput() {
    return this._grid.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelColoringRuleColorThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#max Dashboard#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#min Dashboard#min}
  */
  readonly min?: number;
}

export function dashboardPanelSumoSearchPanelColoringRuleColorThresholdToTerraform(struct?: DashboardPanelSumoSearchPanelColoringRuleColorThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class DashboardPanelSumoSearchPanelColoringRuleColorThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelSumoSearchPanelColoringRuleColorThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelColoringRuleColorThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class DashboardPanelSumoSearchPanelColoringRuleColorThresholdList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelSumoSearchPanelColoringRuleColorThreshold[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelSumoSearchPanelColoringRuleColorThresholdOutputReference {
    return new DashboardPanelSumoSearchPanelColoringRuleColorThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelSumoSearchPanelColoringRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#multiple_series_aggregate_function Dashboard#multiple_series_aggregate_function}
  */
  readonly multipleSeriesAggregateFunction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#scope Dashboard#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#single_series_aggregate_function Dashboard#single_series_aggregate_function}
  */
  readonly singleSeriesAggregateFunction: string;
  /**
  * color_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#color_threshold Dashboard#color_threshold}
  */
  readonly colorThreshold?: DashboardPanelSumoSearchPanelColoringRuleColorThreshold[] | cdktf.IResolvable;
}

export function dashboardPanelSumoSearchPanelColoringRuleToTerraform(struct?: DashboardPanelSumoSearchPanelColoringRuleOutputReference | DashboardPanelSumoSearchPanelColoringRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiple_series_aggregate_function: cdktf.stringToTerraform(struct!.multipleSeriesAggregateFunction),
    scope: cdktf.stringToTerraform(struct!.scope),
    single_series_aggregate_function: cdktf.stringToTerraform(struct!.singleSeriesAggregateFunction),
    color_threshold: cdktf.listMapper(dashboardPanelSumoSearchPanelColoringRuleColorThresholdToTerraform, true)(struct!.colorThreshold),
  }
}

export class DashboardPanelSumoSearchPanelColoringRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelColoringRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multipleSeriesAggregateFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleSeriesAggregateFunction = this._multipleSeriesAggregateFunction;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._singleSeriesAggregateFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSeriesAggregateFunction = this._singleSeriesAggregateFunction;
    }
    if (this._colorThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorThreshold = this._colorThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelColoringRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multipleSeriesAggregateFunction = undefined;
      this._scope = undefined;
      this._singleSeriesAggregateFunction = undefined;
      this._colorThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multipleSeriesAggregateFunction = value.multipleSeriesAggregateFunction;
      this._scope = value.scope;
      this._singleSeriesAggregateFunction = value.singleSeriesAggregateFunction;
      this._colorThreshold.internalValue = value.colorThreshold;
    }
  }

  // multiple_series_aggregate_function - computed: false, optional: false, required: true
  private _multipleSeriesAggregateFunction?: string; 
  public get multipleSeriesAggregateFunction() {
    return this.getStringAttribute('multiple_series_aggregate_function');
  }
  public set multipleSeriesAggregateFunction(value: string) {
    this._multipleSeriesAggregateFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleSeriesAggregateFunctionInput() {
    return this._multipleSeriesAggregateFunction;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // single_series_aggregate_function - computed: false, optional: false, required: true
  private _singleSeriesAggregateFunction?: string; 
  public get singleSeriesAggregateFunction() {
    return this.getStringAttribute('single_series_aggregate_function');
  }
  public set singleSeriesAggregateFunction(value: string) {
    this._singleSeriesAggregateFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSeriesAggregateFunctionInput() {
    return this._singleSeriesAggregateFunction;
  }

  // color_threshold - computed: false, optional: true, required: false
  private _colorThreshold = new DashboardPanelSumoSearchPanelColoringRuleColorThresholdList(this, "color_threshold", false);
  public get colorThreshold() {
    return this._colorThreshold;
  }
  public putColorThreshold(value: DashboardPanelSumoSearchPanelColoringRuleColorThreshold[] | cdktf.IResolvable) {
    this._colorThreshold.internalValue = value;
  }
  public resetColorThreshold() {
    this._colorThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorThresholdInput() {
    return this._colorThreshold.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelLinkedDashboard {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#include_time_range Dashboard#include_time_range}
  */
  readonly includeTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#include_variables Dashboard#include_variables}
  */
  readonly includeVariables?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_path Dashboard#relative_path}
  */
  readonly relativePath?: string;
}

export function dashboardPanelSumoSearchPanelLinkedDashboardToTerraform(struct?: DashboardPanelSumoSearchPanelLinkedDashboardOutputReference | DashboardPanelSumoSearchPanelLinkedDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include_time_range: cdktf.booleanToTerraform(struct!.includeTimeRange),
    include_variables: cdktf.booleanToTerraform(struct!.includeVariables),
    relative_path: cdktf.stringToTerraform(struct!.relativePath),
  }
}

export class DashboardPanelSumoSearchPanelLinkedDashboardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelLinkedDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTimeRange = this._includeTimeRange;
    }
    if (this._includeVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVariables = this._includeVariables;
    }
    if (this._relativePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePath = this._relativePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelLinkedDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._includeTimeRange = undefined;
      this._includeVariables = undefined;
      this._relativePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._includeTimeRange = value.includeTimeRange;
      this._includeVariables = value.includeVariables;
      this._relativePath = value.relativePath;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_time_range - computed: false, optional: true, required: false
  private _includeTimeRange?: boolean | cdktf.IResolvable; 
  public get includeTimeRange() {
    return this.getBooleanAttribute('include_time_range');
  }
  public set includeTimeRange(value: boolean | cdktf.IResolvable) {
    this._includeTimeRange = value;
  }
  public resetIncludeTimeRange() {
    this._includeTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTimeRangeInput() {
    return this._includeTimeRange;
  }

  // include_variables - computed: false, optional: true, required: false
  private _includeVariables?: boolean | cdktf.IResolvable; 
  public get includeVariables() {
    return this.getBooleanAttribute('include_variables');
  }
  public set includeVariables(value: boolean | cdktf.IResolvable) {
    this._includeVariables = value;
  }
  public resetIncludeVariables() {
    this._includeVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVariablesInput() {
    return this._includeVariables;
  }

  // relative_path - computed: false, optional: true, required: false
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  public resetRelativePath() {
    this._relativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }
}
export interface DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#negation Dashboard#negation}
  */
  readonly negation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterToTerraform(struct?: DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    negation: cdktf.booleanToTerraform(struct!.negation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._negation !== undefined) {
      hasAnyValues = true;
      internalValueResult.negation = this._negation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._negation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._negation = value.negation;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // negation - computed: false, optional: true, required: false
  private _negation?: boolean | cdktf.IResolvable; 
  public get negation() {
    return this.getBooleanAttribute('negation');
  }
  public set negation(value: boolean | cdktf.IResolvable) {
    this._negation = value;
  }
  public resetNegation() {
    this._negation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationInput() {
    return this._negation;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterOutputReference {
    return new DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterToTerraform(struct?: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterOutputReference {
    return new DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#operator_name Dashboard#operator_name}
  */
  readonly operatorName: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#parameter Dashboard#parameter}
  */
  readonly parameter: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter[] | cdktf.IResolvable;
}

export function dashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorToTerraform(struct?: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator_name: cdktf.stringToTerraform(struct!.operatorName),
    parameter: cdktf.listMapper(dashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterToTerraform, true)(struct!.parameter),
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorName = this._operatorName;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operatorName = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operatorName = value.operatorName;
      this._parameter.internalValue = value.parameter;
    }
  }

  // operator_name - computed: false, optional: false, required: true
  private _operatorName?: string; 
  public get operatorName() {
    return this.getStringAttribute('operator_name');
  }
  public set operatorName(value: string) {
    this._operatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNameInput() {
    return this._operatorName;
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter = new DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorOutputReference {
    return new DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelSumoSearchPanelQueryMetricsQueryData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#aggregation_type Dashboard#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#filter Dashboard#filter}
  */
  readonly filter: DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter[] | cdktf.IResolvable;
  /**
  * operator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#operator Dashboard#operator}
  */
  readonly operator?: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator[] | cdktf.IResolvable;
}

export function dashboardPanelSumoSearchPanelQueryMetricsQueryDataToTerraform(struct?: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOutputReference | DashboardPanelSumoSearchPanelQueryMetricsQueryData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    metric: cdktf.stringToTerraform(struct!.metric),
    filter: cdktf.listMapper(dashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterToTerraform, true)(struct!.filter),
    operator: cdktf.listMapper(dashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorToTerraform, true)(struct!.operator),
  }
}

export class DashboardPanelSumoSearchPanelQueryMetricsQueryDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelQueryMetricsQueryData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelQueryMetricsQueryData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._groupBy = undefined;
      this._metric = undefined;
      this._filter.internalValue = undefined;
      this._operator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._groupBy = value.groupBy;
      this._metric = value.metric;
      this._filter.internalValue = value.filter;
      this._operator.internalValue = value.operator;
    }
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperatorList(this, "operator", false);
  public get operator() {
    return this._operator;
  }
  public putOperator(value: DashboardPanelSumoSearchPanelQueryMetricsQueryDataOperator[] | cdktf.IResolvable) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#metrics_query_mode Dashboard#metrics_query_mode}
  */
  readonly metricsQueryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#query_key Dashboard#query_key}
  */
  readonly queryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#query_string Dashboard#query_string}
  */
  readonly queryString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#query_type Dashboard#query_type}
  */
  readonly queryType: string;
  /**
  * metrics_query_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#metrics_query_data Dashboard#metrics_query_data}
  */
  readonly metricsQueryData?: DashboardPanelSumoSearchPanelQueryMetricsQueryData;
}

export function dashboardPanelSumoSearchPanelQueryToTerraform(struct?: DashboardPanelSumoSearchPanelQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_query_mode: cdktf.stringToTerraform(struct!.metricsQueryMode),
    query_key: cdktf.stringToTerraform(struct!.queryKey),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    metrics_query_data: dashboardPanelSumoSearchPanelQueryMetricsQueryDataToTerraform(struct!.metricsQueryData),
  }
}

export class DashboardPanelSumoSearchPanelQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelSumoSearchPanelQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsQueryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsQueryMode = this._metricsQueryMode;
    }
    if (this._queryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKey = this._queryKey;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._metricsQueryData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsQueryData = this._metricsQueryData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsQueryMode = undefined;
      this._queryKey = undefined;
      this._queryString = undefined;
      this._queryType = undefined;
      this._metricsQueryData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsQueryMode = value.metricsQueryMode;
      this._queryKey = value.queryKey;
      this._queryString = value.queryString;
      this._queryType = value.queryType;
      this._metricsQueryData.internalValue = value.metricsQueryData;
    }
  }

  // metrics_query_mode - computed: false, optional: true, required: false
  private _metricsQueryMode?: string; 
  public get metricsQueryMode() {
    return this.getStringAttribute('metrics_query_mode');
  }
  public set metricsQueryMode(value: string) {
    this._metricsQueryMode = value;
  }
  public resetMetricsQueryMode() {
    this._metricsQueryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryModeInput() {
    return this._metricsQueryMode;
  }

  // query_key - computed: false, optional: false, required: true
  private _queryKey?: string; 
  public get queryKey() {
    return this.getStringAttribute('query_key');
  }
  public set queryKey(value: string) {
    this._queryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKeyInput() {
    return this._queryKey;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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

  // metrics_query_data - computed: false, optional: true, required: false
  private _metricsQueryData = new DashboardPanelSumoSearchPanelQueryMetricsQueryDataOutputReference(this, "metrics_query_data");
  public get metricsQueryData() {
    return this._metricsQueryData;
  }
  public putMetricsQueryData(value: DashboardPanelSumoSearchPanelQueryMetricsQueryData) {
    this._metricsQueryData.internalValue = value;
  }
  public resetMetricsQueryData() {
    this._metricsQueryData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryDataInput() {
    return this._metricsQueryData.internalValue;
  }
}

export class DashboardPanelSumoSearchPanelQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelSumoSearchPanelQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelSumoSearchPanelQueryOutputReference {
    return new DashboardPanelSumoSearchPanelQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_millis Dashboard#epoch_millis}
  */
  readonly epochMillis: number;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time Dashboard#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time Dashboard#relative_time}
  */
  readonly relativeTime: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_time_range Dashboard#epoch_time_range}
  */
  readonly epochTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time_range Dashboard#iso8601_time_range}
  */
  readonly iso8601TimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#literal_time_range Dashboard#literal_time_range}
  */
  readonly literalTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time_range Dashboard#relative_time_range}
  */
  readonly relativeTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_millis Dashboard#epoch_millis}
  */
  readonly epochMillis: number;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time Dashboard#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time Dashboard#relative_time}
  */
  readonly relativeTime: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_time_range Dashboard#epoch_time_range}
  */
  readonly epochTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time_range Dashboard#iso8601_time_range}
  */
  readonly iso8601TimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#literal_time_range Dashboard#literal_time_range}
  */
  readonly literalTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time_range Dashboard#relative_time_range}
  */
  readonly relativeTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange {
  /**
  * from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#from Dashboard#from}
  */
  readonly from: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#to Dashboard#to}
  */
  readonly to?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo;
}

export function dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardPanelSumoSearchPanelTimeRange {
  /**
  * begin_bounded_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#begin_bounded_time_range Dashboard#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#complete_literal_time_range Dashboard#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange;
}

export function dashboardPanelSumoSearchPanelTimeRangeToTerraform(struct?: DashboardPanelSumoSearchPanelTimeRangeOutputReference | DashboardPanelSumoSearchPanelTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: dashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: dashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}

export class DashboardPanelSumoSearchPanelTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanelTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginBoundedTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginBoundedTimeRange = this._beginBoundedTimeRange?.internalValue;
    }
    if (this._completeLiteralTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeLiteralTimeRange = this._completeLiteralTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanelTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginBoundedTimeRange.internalValue = undefined;
      this._completeLiteralTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginBoundedTimeRange.internalValue = value.beginBoundedTimeRange;
      this._completeLiteralTimeRange.internalValue = value.completeLiteralTimeRange;
    }
  }

  // begin_bounded_time_range - computed: false, optional: true, required: false
  private _beginBoundedTimeRange = new DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeBeginBoundedTimeRange) {
    this._beginBoundedTimeRange.internalValue = value;
  }
  public resetBeginBoundedTimeRange() {
    this._beginBoundedTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginBoundedTimeRangeInput() {
    return this._beginBoundedTimeRange.internalValue;
  }

  // complete_literal_time_range - computed: false, optional: true, required: false
  private _completeLiteralTimeRange = new DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: DashboardPanelSumoSearchPanelTimeRangeCompleteLiteralTimeRange) {
    this._completeLiteralTimeRange.internalValue = value;
  }
  public resetCompleteLiteralTimeRange() {
    this._completeLiteralTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLiteralTimeRangeInput() {
    return this._completeLiteralTimeRange.internalValue;
  }
}
export interface DashboardPanelSumoSearchPanel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#keep_visual_settings_consistent_with_parent Dashboard#keep_visual_settings_consistent_with_parent}
  */
  readonly keepVisualSettingsConsistentWithParent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#visual_settings Dashboard#visual_settings}
  */
  readonly visualSettings?: string;
  /**
  * coloring_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#coloring_rule Dashboard#coloring_rule}
  */
  readonly coloringRule?: DashboardPanelSumoSearchPanelColoringRule;
  /**
  * linked_dashboard block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#linked_dashboard Dashboard#linked_dashboard}
  */
  readonly linkedDashboard?: DashboardPanelSumoSearchPanelLinkedDashboard;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardPanelSumoSearchPanelQuery[] | cdktf.IResolvable;
  /**
  * time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#time_range Dashboard#time_range}
  */
  readonly timeRange?: DashboardPanelSumoSearchPanelTimeRange;
}

export function dashboardPanelSumoSearchPanelToTerraform(struct?: DashboardPanelSumoSearchPanelOutputReference | DashboardPanelSumoSearchPanel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    keep_visual_settings_consistent_with_parent: cdktf.booleanToTerraform(struct!.keepVisualSettingsConsistentWithParent),
    key: cdktf.stringToTerraform(struct!.key),
    title: cdktf.stringToTerraform(struct!.title),
    visual_settings: cdktf.stringToTerraform(struct!.visualSettings),
    coloring_rule: dashboardPanelSumoSearchPanelColoringRuleToTerraform(struct!.coloringRule),
    linked_dashboard: dashboardPanelSumoSearchPanelLinkedDashboardToTerraform(struct!.linkedDashboard),
    query: cdktf.listMapper(dashboardPanelSumoSearchPanelQueryToTerraform, true)(struct!.query),
    time_range: dashboardPanelSumoSearchPanelTimeRangeToTerraform(struct!.timeRange),
  }
}

export class DashboardPanelSumoSearchPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelSumoSearchPanel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._keepVisualSettingsConsistentWithParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepVisualSettingsConsistentWithParent = this._keepVisualSettingsConsistentWithParent;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visualSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualSettings = this._visualSettings;
    }
    if (this._coloringRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coloringRule = this._coloringRule?.internalValue;
    }
    if (this._linkedDashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedDashboard = this._linkedDashboard?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._timeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelSumoSearchPanel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._keepVisualSettingsConsistentWithParent = undefined;
      this._key = undefined;
      this._title = undefined;
      this._visualSettings = undefined;
      this._coloringRule.internalValue = undefined;
      this._linkedDashboard.internalValue = undefined;
      this._query.internalValue = undefined;
      this._timeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._keepVisualSettingsConsistentWithParent = value.keepVisualSettingsConsistentWithParent;
      this._key = value.key;
      this._title = value.title;
      this._visualSettings = value.visualSettings;
      this._coloringRule.internalValue = value.coloringRule;
      this._linkedDashboard.internalValue = value.linkedDashboard;
      this._query.internalValue = value.query;
      this._timeRange.internalValue = value.timeRange;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_visual_settings_consistent_with_parent - computed: false, optional: true, required: false
  private _keepVisualSettingsConsistentWithParent?: boolean | cdktf.IResolvable; 
  public get keepVisualSettingsConsistentWithParent() {
    return this.getBooleanAttribute('keep_visual_settings_consistent_with_parent');
  }
  public set keepVisualSettingsConsistentWithParent(value: boolean | cdktf.IResolvable) {
    this._keepVisualSettingsConsistentWithParent = value;
  }
  public resetKeepVisualSettingsConsistentWithParent() {
    this._keepVisualSettingsConsistentWithParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepVisualSettingsConsistentWithParentInput() {
    return this._keepVisualSettingsConsistentWithParent;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visual_settings - computed: false, optional: true, required: false
  private _visualSettings?: string; 
  public get visualSettings() {
    return this.getStringAttribute('visual_settings');
  }
  public set visualSettings(value: string) {
    this._visualSettings = value;
  }
  public resetVisualSettings() {
    this._visualSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualSettingsInput() {
    return this._visualSettings;
  }

  // coloring_rule - computed: false, optional: true, required: false
  private _coloringRule = new DashboardPanelSumoSearchPanelColoringRuleOutputReference(this, "coloring_rule");
  public get coloringRule() {
    return this._coloringRule;
  }
  public putColoringRule(value: DashboardPanelSumoSearchPanelColoringRule) {
    this._coloringRule.internalValue = value;
  }
  public resetColoringRule() {
    this._coloringRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloringRuleInput() {
    return this._coloringRule.internalValue;
  }

  // linked_dashboard - computed: false, optional: true, required: false
  private _linkedDashboard = new DashboardPanelSumoSearchPanelLinkedDashboardOutputReference(this, "linked_dashboard");
  public get linkedDashboard() {
    return this._linkedDashboard;
  }
  public putLinkedDashboard(value: DashboardPanelSumoSearchPanelLinkedDashboard) {
    this._linkedDashboard.internalValue = value;
  }
  public resetLinkedDashboard() {
    this._linkedDashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedDashboardInput() {
    return this._linkedDashboard.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DashboardPanelSumoSearchPanelQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardPanelSumoSearchPanelQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new DashboardPanelSumoSearchPanelTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: DashboardPanelSumoSearchPanelTimeRange) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }
}
export interface DashboardPanelTextPanel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#keep_visual_settings_consistent_with_parent Dashboard#keep_visual_settings_consistent_with_parent}
  */
  readonly keepVisualSettingsConsistentWithParent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#text Dashboard#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#visual_settings Dashboard#visual_settings}
  */
  readonly visualSettings?: string;
}

export function dashboardPanelTextPanelToTerraform(struct?: DashboardPanelTextPanelOutputReference | DashboardPanelTextPanel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_visual_settings_consistent_with_parent: cdktf.booleanToTerraform(struct!.keepVisualSettingsConsistentWithParent),
    key: cdktf.stringToTerraform(struct!.key),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
    visual_settings: cdktf.stringToTerraform(struct!.visualSettings),
  }
}

export class DashboardPanelTextPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelTextPanel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepVisualSettingsConsistentWithParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepVisualSettingsConsistentWithParent = this._keepVisualSettingsConsistentWithParent;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visualSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualSettings = this._visualSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelTextPanel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepVisualSettingsConsistentWithParent = undefined;
      this._key = undefined;
      this._text = undefined;
      this._title = undefined;
      this._visualSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepVisualSettingsConsistentWithParent = value.keepVisualSettingsConsistentWithParent;
      this._key = value.key;
      this._text = value.text;
      this._title = value.title;
      this._visualSettings = value.visualSettings;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_visual_settings_consistent_with_parent - computed: false, optional: true, required: false
  private _keepVisualSettingsConsistentWithParent?: boolean | cdktf.IResolvable; 
  public get keepVisualSettingsConsistentWithParent() {
    return this.getBooleanAttribute('keep_visual_settings_consistent_with_parent');
  }
  public set keepVisualSettingsConsistentWithParent(value: boolean | cdktf.IResolvable) {
    this._keepVisualSettingsConsistentWithParent = value;
  }
  public resetKeepVisualSettingsConsistentWithParent() {
    this._keepVisualSettingsConsistentWithParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepVisualSettingsConsistentWithParentInput() {
    return this._keepVisualSettingsConsistentWithParent;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visual_settings - computed: false, optional: true, required: false
  private _visualSettings?: string; 
  public get visualSettings() {
    return this.getStringAttribute('visual_settings');
  }
  public set visualSettings(value: string) {
    this._visualSettings = value;
  }
  public resetVisualSettings() {
    this._visualSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualSettingsInput() {
    return this._visualSettings;
  }
}
export interface DashboardPanel {
  /**
  * sumo_search_panel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#sumo_search_panel Dashboard#sumo_search_panel}
  */
  readonly sumoSearchPanel?: DashboardPanelSumoSearchPanel;
  /**
  * text_panel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#text_panel Dashboard#text_panel}
  */
  readonly textPanel?: DashboardPanelTextPanel;
}

export function dashboardPanelToTerraform(struct?: DashboardPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sumo_search_panel: dashboardPanelSumoSearchPanelToTerraform(struct!.sumoSearchPanel),
    text_panel: dashboardPanelTextPanelToTerraform(struct!.textPanel),
  }
}

export class DashboardPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sumoSearchPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoSearchPanel = this._sumoSearchPanel?.internalValue;
    }
    if (this._textPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPanel = this._textPanel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sumoSearchPanel.internalValue = undefined;
      this._textPanel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sumoSearchPanel.internalValue = value.sumoSearchPanel;
      this._textPanel.internalValue = value.textPanel;
    }
  }

  // sumo_search_panel - computed: false, optional: true, required: false
  private _sumoSearchPanel = new DashboardPanelSumoSearchPanelOutputReference(this, "sumo_search_panel");
  public get sumoSearchPanel() {
    return this._sumoSearchPanel;
  }
  public putSumoSearchPanel(value: DashboardPanelSumoSearchPanel) {
    this._sumoSearchPanel.internalValue = value;
  }
  public resetSumoSearchPanel() {
    this._sumoSearchPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoSearchPanelInput() {
    return this._sumoSearchPanel.internalValue;
  }

  // text_panel - computed: false, optional: true, required: false
  private _textPanel = new DashboardPanelTextPanelOutputReference(this, "text_panel");
  public get textPanel() {
    return this._textPanel;
  }
  public putTextPanel(value: DashboardPanelTextPanel) {
    this._textPanel.internalValue = value;
  }
  public resetTextPanel() {
    this._textPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textPanelInput() {
    return this._textPanel.internalValue;
  }
}

export class DashboardPanelList extends cdktf.ComplexList {
  public internalValue? : DashboardPanel[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelOutputReference {
    return new DashboardPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_millis Dashboard#epoch_millis}
  */
  readonly epochMillis: number;
}

export function dashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time Dashboard#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time Dashboard#relative_time}
  */
  readonly relativeTime: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_time_range Dashboard#epoch_time_range}
  */
  readonly epochTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time_range Dashboard#iso8601_time_range}
  */
  readonly iso8601TimeRange?: DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#literal_time_range Dashboard#literal_time_range}
  */
  readonly literalTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time_range Dashboard#relative_time_range}
  */
  readonly relativeTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function dashboardTimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeFromOutputReference | DashboardTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: dashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: dashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: dashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: dashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_millis Dashboard#epoch_millis}
  */
  readonly epochMillis: number;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time Dashboard#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time Dashboard#relative_time}
  */
  readonly relativeTime: string;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#epoch_time_range Dashboard#epoch_time_range}
  */
  readonly epochTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#iso8601_time_range Dashboard#iso8601_time_range}
  */
  readonly iso8601TimeRange?: DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#literal_time_range Dashboard#literal_time_range}
  */
  readonly literalTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#relative_time_range Dashboard#relative_time_range}
  */
  readonly relativeTimeRange?: DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeToOutputReference | DashboardTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: dashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: dashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: dashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: dashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRangeTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRangeTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: DashboardTimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface DashboardTimeRangeBeginBoundedTimeRange {
  /**
  * from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#from Dashboard#from}
  */
  readonly from: DashboardTimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#to Dashboard#to}
  */
  readonly to?: DashboardTimeRangeBeginBoundedTimeRangeTo;
}

export function dashboardTimeRangeBeginBoundedTimeRangeToTerraform(struct?: DashboardTimeRangeBeginBoundedTimeRangeOutputReference | DashboardTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dashboardTimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: dashboardTimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}

export class DashboardTimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeBeginBoundedTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeBeginBoundedTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new DashboardTimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DashboardTimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DashboardTimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: DashboardTimeRangeBeginBoundedTimeRangeTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}
export interface DashboardTimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#range_name Dashboard#range_name}
  */
  readonly rangeName: string;
}

export function dashboardTimeRangeCompleteLiteralTimeRangeToTerraform(struct?: DashboardTimeRangeCompleteLiteralTimeRangeOutputReference | DashboardTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class DashboardTimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRangeCompleteLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface DashboardTimeRange {
  /**
  * begin_bounded_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#begin_bounded_time_range Dashboard#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: DashboardTimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#complete_literal_time_range Dashboard#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: DashboardTimeRangeCompleteLiteralTimeRange;
}

export function dashboardTimeRangeToTerraform(struct?: DashboardTimeRangeOutputReference | DashboardTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: dashboardTimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: dashboardTimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}

export class DashboardTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginBoundedTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginBoundedTimeRange = this._beginBoundedTimeRange?.internalValue;
    }
    if (this._completeLiteralTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeLiteralTimeRange = this._completeLiteralTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginBoundedTimeRange.internalValue = undefined;
      this._completeLiteralTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginBoundedTimeRange.internalValue = value.beginBoundedTimeRange;
      this._completeLiteralTimeRange.internalValue = value.completeLiteralTimeRange;
    }
  }

  // begin_bounded_time_range - computed: false, optional: true, required: false
  private _beginBoundedTimeRange = new DashboardTimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: DashboardTimeRangeBeginBoundedTimeRange) {
    this._beginBoundedTimeRange.internalValue = value;
  }
  public resetBeginBoundedTimeRange() {
    this._beginBoundedTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginBoundedTimeRangeInput() {
    return this._beginBoundedTimeRange.internalValue;
  }

  // complete_literal_time_range - computed: false, optional: true, required: false
  private _completeLiteralTimeRange = new DashboardTimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: DashboardTimeRangeCompleteLiteralTimeRange) {
    this._completeLiteralTimeRange.internalValue = value;
  }
  public resetCompleteLiteralTimeRange() {
    this._completeLiteralTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLiteralTimeRangeInput() {
    return this._completeLiteralTimeRange.internalValue;
  }
}
export interface DashboardTopologyLabelMapData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#label Dashboard#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#values Dashboard#values}
  */
  readonly values: string[];
}

export function dashboardTopologyLabelMapDataToTerraform(struct?: DashboardTopologyLabelMapData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DashboardTopologyLabelMapDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTopologyLabelMapData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTopologyLabelMapData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._values = value.values;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardTopologyLabelMapDataList extends cdktf.ComplexList {
  public internalValue? : DashboardTopologyLabelMapData[] | cdktf.IResolvable

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
  public get(index: number): DashboardTopologyLabelMapDataOutputReference {
    return new DashboardTopologyLabelMapDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTopologyLabelMap {
  /**
  * data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#data Dashboard#data}
  */
  readonly data: DashboardTopologyLabelMapData[] | cdktf.IResolvable;
}

export function dashboardTopologyLabelMapToTerraform(struct?: DashboardTopologyLabelMapOutputReference | DashboardTopologyLabelMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dashboardTopologyLabelMapDataToTerraform, true)(struct!.data),
  }
}

export class DashboardTopologyLabelMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTopologyLabelMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTopologyLabelMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new DashboardTopologyLabelMapDataList(this, "data", true);
  public get data() {
    return this._data;
  }
  public putData(value: DashboardTopologyLabelMapData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface DashboardVariableSourceDefinitionCsvVariableSourceDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#values Dashboard#values}
  */
  readonly values: string;
}

export function dashboardVariableSourceDefinitionCsvVariableSourceDefinitionToTerraform(struct?: DashboardVariableSourceDefinitionCsvVariableSourceDefinitionOutputReference | DashboardVariableSourceDefinitionCsvVariableSourceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.stringToTerraform(struct!.values),
  }
}

export class DashboardVariableSourceDefinitionCsvVariableSourceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardVariableSourceDefinitionCsvVariableSourceDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariableSourceDefinitionCsvVariableSourceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#field Dashboard#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardVariableSourceDefinitionLogQueryVariableSourceDefinitionToTerraform(struct?: DashboardVariableSourceDefinitionLogQueryVariableSourceDefinitionOutputReference | DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardVariableSourceDefinitionLogQueryVariableSourceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._query = value.query;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
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
}
export interface DashboardVariableSourceDefinitionMetadataVariableSourceDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#filter Dashboard#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#key Dashboard#key}
  */
  readonly key: string;
}

export function dashboardVariableSourceDefinitionMetadataVariableSourceDefinitionToTerraform(struct?: DashboardVariableSourceDefinitionMetadataVariableSourceDefinitionOutputReference | DashboardVariableSourceDefinitionMetadataVariableSourceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DashboardVariableSourceDefinitionMetadataVariableSourceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardVariableSourceDefinitionMetadataVariableSourceDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariableSourceDefinitionMetadataVariableSourceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._key = value.key;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface DashboardVariableSourceDefinition {
  /**
  * csv_variable_source_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#csv_variable_source_definition Dashboard#csv_variable_source_definition}
  */
  readonly csvVariableSourceDefinition?: DashboardVariableSourceDefinitionCsvVariableSourceDefinition;
  /**
  * log_query_variable_source_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#log_query_variable_source_definition Dashboard#log_query_variable_source_definition}
  */
  readonly logQueryVariableSourceDefinition?: DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition;
  /**
  * metadata_variable_source_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#metadata_variable_source_definition Dashboard#metadata_variable_source_definition}
  */
  readonly metadataVariableSourceDefinition?: DashboardVariableSourceDefinitionMetadataVariableSourceDefinition;
}

export function dashboardVariableSourceDefinitionToTerraform(struct?: DashboardVariableSourceDefinitionOutputReference | DashboardVariableSourceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_variable_source_definition: dashboardVariableSourceDefinitionCsvVariableSourceDefinitionToTerraform(struct!.csvVariableSourceDefinition),
    log_query_variable_source_definition: dashboardVariableSourceDefinitionLogQueryVariableSourceDefinitionToTerraform(struct!.logQueryVariableSourceDefinition),
    metadata_variable_source_definition: dashboardVariableSourceDefinitionMetadataVariableSourceDefinitionToTerraform(struct!.metadataVariableSourceDefinition),
  }
}

export class DashboardVariableSourceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardVariableSourceDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvVariableSourceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvVariableSourceDefinition = this._csvVariableSourceDefinition?.internalValue;
    }
    if (this._logQueryVariableSourceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryVariableSourceDefinition = this._logQueryVariableSourceDefinition?.internalValue;
    }
    if (this._metadataVariableSourceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataVariableSourceDefinition = this._metadataVariableSourceDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariableSourceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvVariableSourceDefinition.internalValue = undefined;
      this._logQueryVariableSourceDefinition.internalValue = undefined;
      this._metadataVariableSourceDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvVariableSourceDefinition.internalValue = value.csvVariableSourceDefinition;
      this._logQueryVariableSourceDefinition.internalValue = value.logQueryVariableSourceDefinition;
      this._metadataVariableSourceDefinition.internalValue = value.metadataVariableSourceDefinition;
    }
  }

  // csv_variable_source_definition - computed: false, optional: true, required: false
  private _csvVariableSourceDefinition = new DashboardVariableSourceDefinitionCsvVariableSourceDefinitionOutputReference(this, "csv_variable_source_definition");
  public get csvVariableSourceDefinition() {
    return this._csvVariableSourceDefinition;
  }
  public putCsvVariableSourceDefinition(value: DashboardVariableSourceDefinitionCsvVariableSourceDefinition) {
    this._csvVariableSourceDefinition.internalValue = value;
  }
  public resetCsvVariableSourceDefinition() {
    this._csvVariableSourceDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvVariableSourceDefinitionInput() {
    return this._csvVariableSourceDefinition.internalValue;
  }

  // log_query_variable_source_definition - computed: false, optional: true, required: false
  private _logQueryVariableSourceDefinition = new DashboardVariableSourceDefinitionLogQueryVariableSourceDefinitionOutputReference(this, "log_query_variable_source_definition");
  public get logQueryVariableSourceDefinition() {
    return this._logQueryVariableSourceDefinition;
  }
  public putLogQueryVariableSourceDefinition(value: DashboardVariableSourceDefinitionLogQueryVariableSourceDefinition) {
    this._logQueryVariableSourceDefinition.internalValue = value;
  }
  public resetLogQueryVariableSourceDefinition() {
    this._logQueryVariableSourceDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryVariableSourceDefinitionInput() {
    return this._logQueryVariableSourceDefinition.internalValue;
  }

  // metadata_variable_source_definition - computed: false, optional: true, required: false
  private _metadataVariableSourceDefinition = new DashboardVariableSourceDefinitionMetadataVariableSourceDefinitionOutputReference(this, "metadata_variable_source_definition");
  public get metadataVariableSourceDefinition() {
    return this._metadataVariableSourceDefinition;
  }
  public putMetadataVariableSourceDefinition(value: DashboardVariableSourceDefinitionMetadataVariableSourceDefinition) {
    this._metadataVariableSourceDefinition.internalValue = value;
  }
  public resetMetadataVariableSourceDefinition() {
    this._metadataVariableSourceDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataVariableSourceDefinitionInput() {
    return this._metadataVariableSourceDefinition.internalValue;
  }
}
export interface DashboardVariable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#allow_multi_select Dashboard#allow_multi_select}
  */
  readonly allowMultiSelect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#default_value Dashboard#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#display_name Dashboard#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#hide_from_ui Dashboard#hide_from_ui}
  */
  readonly hideFromUi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#include_all_option Dashboard#include_all_option}
  */
  readonly includeAllOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * source_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard#source_definition Dashboard#source_definition}
  */
  readonly sourceDefinition: DashboardVariableSourceDefinition;
}

export function dashboardVariableToTerraform(struct?: DashboardVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_multi_select: cdktf.booleanToTerraform(struct!.allowMultiSelect),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    hide_from_ui: cdktf.booleanToTerraform(struct!.hideFromUi),
    include_all_option: cdktf.booleanToTerraform(struct!.includeAllOption),
    name: cdktf.stringToTerraform(struct!.name),
    source_definition: dashboardVariableSourceDefinitionToTerraform(struct!.sourceDefinition),
  }
}

export class DashboardVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMultiSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultiSelect = this._allowMultiSelect;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._hideFromUi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideFromUi = this._hideFromUi;
    }
    if (this._includeAllOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllOption = this._includeAllOption;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDefinition = this._sourceDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMultiSelect = undefined;
      this._defaultValue = undefined;
      this._displayName = undefined;
      this._hideFromUi = undefined;
      this._includeAllOption = undefined;
      this._name = undefined;
      this._sourceDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMultiSelect = value.allowMultiSelect;
      this._defaultValue = value.defaultValue;
      this._displayName = value.displayName;
      this._hideFromUi = value.hideFromUi;
      this._includeAllOption = value.includeAllOption;
      this._name = value.name;
      this._sourceDefinition.internalValue = value.sourceDefinition;
    }
  }

  // allow_multi_select - computed: false, optional: true, required: false
  private _allowMultiSelect?: boolean | cdktf.IResolvable; 
  public get allowMultiSelect() {
    return this.getBooleanAttribute('allow_multi_select');
  }
  public set allowMultiSelect(value: boolean | cdktf.IResolvable) {
    this._allowMultiSelect = value;
  }
  public resetAllowMultiSelect() {
    this._allowMultiSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultiSelectInput() {
    return this._allowMultiSelect;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // hide_from_ui - computed: false, optional: true, required: false
  private _hideFromUi?: boolean | cdktf.IResolvable; 
  public get hideFromUi() {
    return this.getBooleanAttribute('hide_from_ui');
  }
  public set hideFromUi(value: boolean | cdktf.IResolvable) {
    this._hideFromUi = value;
  }
  public resetHideFromUi() {
    this._hideFromUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromUiInput() {
    return this._hideFromUi;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_all_option - computed: false, optional: true, required: false
  private _includeAllOption?: boolean | cdktf.IResolvable; 
  public get includeAllOption() {
    return this.getBooleanAttribute('include_all_option');
  }
  public set includeAllOption(value: boolean | cdktf.IResolvable) {
    this._includeAllOption = value;
  }
  public resetIncludeAllOption() {
    this._includeAllOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllOptionInput() {
    return this._includeAllOption;
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

  // source_definition - computed: false, optional: false, required: true
  private _sourceDefinition = new DashboardVariableSourceDefinitionOutputReference(this, "source_definition");
  public get sourceDefinition() {
    return this._sourceDefinition;
  }
  public putSourceDefinition(value: DashboardVariableSourceDefinition) {
    this._sourceDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDefinitionInput() {
    return this._sourceDefinition.internalValue;
  }
}

export class DashboardVariableList extends cdktf.ComplexList {
  public internalValue? : DashboardVariable[] | cdktf.IResolvable

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
  public get(index: number): DashboardVariableOutputReference {
    return new DashboardVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard sumologic_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/dashboard sumologic_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_dashboard',
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
    this._description = config.description;
    this._domain = config.domain;
    this._folderId = config.folderId;
    this._id = config.id;
    this._refreshInterval = config.refreshInterval;
    this._theme = config.theme;
    this._title = config.title;
    this._coloringRule.internalValue = config.coloringRule;
    this._layout.internalValue = config.layout;
    this._panel.internalValue = config.panel;
    this._timeRange.internalValue = config.timeRange;
    this._topologyLabelMap.internalValue = config.topologyLabelMap;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // coloring_rule - computed: false, optional: true, required: false
  private _coloringRule = new DashboardColoringRuleList(this, "coloring_rule", false);
  public get coloringRule() {
    return this._coloringRule;
  }
  public putColoringRule(value: DashboardColoringRule[] | cdktf.IResolvable) {
    this._coloringRule.internalValue = value;
  }
  public resetColoringRule() {
    this._coloringRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloringRuleInput() {
    return this._coloringRule.internalValue;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new DashboardLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DashboardLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // panel - computed: false, optional: true, required: false
  private _panel = new DashboardPanelList(this, "panel", false);
  public get panel() {
    return this._panel;
  }
  public putPanel(value: DashboardPanel[] | cdktf.IResolvable) {
    this._panel.internalValue = value;
  }
  public resetPanel() {
    this._panel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelInput() {
    return this._panel.internalValue;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange = new DashboardTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: DashboardTimeRange) {
    this._timeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }

  // topology_label_map - computed: false, optional: true, required: false
  private _topologyLabelMap = new DashboardTopologyLabelMapOutputReference(this, "topology_label_map");
  public get topologyLabelMap() {
    return this._topologyLabelMap;
  }
  public putTopologyLabelMap(value: DashboardTopologyLabelMap) {
    this._topologyLabelMap.internalValue = value;
  }
  public resetTopologyLabelMap() {
    this._topologyLabelMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyLabelMapInput() {
    return this._topologyLabelMap.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new DashboardVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: DashboardVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      refresh_interval: cdktf.numberToTerraform(this._refreshInterval),
      theme: cdktf.stringToTerraform(this._theme),
      title: cdktf.stringToTerraform(this._title),
      coloring_rule: cdktf.listMapper(dashboardColoringRuleToTerraform, true)(this._coloringRule.internalValue),
      layout: dashboardLayoutToTerraform(this._layout.internalValue),
      panel: cdktf.listMapper(dashboardPanelToTerraform, true)(this._panel.internalValue),
      time_range: dashboardTimeRangeToTerraform(this._timeRange.internalValue),
      topology_label_map: dashboardTopologyLabelMapToTerraform(this._topologyLabelMap.internalValue),
      variable: cdktf.listMapper(dashboardVariableToTerraform, true)(this._variable.internalValue),
    };
  }
}
