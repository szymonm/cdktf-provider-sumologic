// https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseChainRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#description CseChainRule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#enabled CseChainRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#group_by_fields CseChainRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#id CseChainRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#is_prototype CseChainRule#is_prototype}
  */
  readonly isPrototype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#name CseChainRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#ordered CseChainRule#ordered}
  */
  readonly ordered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#severity CseChainRule#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#summary_expression CseChainRule#summary_expression}
  */
  readonly summaryExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#tags CseChainRule#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#window_size CseChainRule#window_size}
  */
  readonly windowSize: string;
  /**
  * entity_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#entity_selectors CseChainRule#entity_selectors}
  */
  readonly entitySelectors: CseChainRuleEntitySelectors[] | cdktf.IResolvable;
  /**
  * expressions_and_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#expressions_and_limits CseChainRule#expressions_and_limits}
  */
  readonly expressionsAndLimits: CseChainRuleExpressionsAndLimits[] | cdktf.IResolvable;
}
export interface CseChainRuleEntitySelectors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#entity_type CseChainRule#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#expression CseChainRule#expression}
  */
  readonly expression: string;
}

export function cseChainRuleEntitySelectorsToTerraform(struct?: CseChainRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class CseChainRuleEntitySelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseChainRuleEntitySelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseChainRuleEntitySelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._expression = value.expression;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class CseChainRuleEntitySelectorsList extends cdktf.ComplexList {
  public internalValue? : CseChainRuleEntitySelectors[] | cdktf.IResolvable

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
  public get(index: number): CseChainRuleEntitySelectorsOutputReference {
    return new CseChainRuleEntitySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseChainRuleExpressionsAndLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#expression CseChainRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule#limit CseChainRule#limit}
  */
  readonly limit: number;
}

export function cseChainRuleExpressionsAndLimitsToTerraform(struct?: CseChainRuleExpressionsAndLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}

export class CseChainRuleExpressionsAndLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseChainRuleExpressionsAndLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseChainRuleExpressionsAndLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._limit = value.limit;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class CseChainRuleExpressionsAndLimitsList extends cdktf.ComplexList {
  public internalValue? : CseChainRuleExpressionsAndLimits[] | cdktf.IResolvable

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
  public get(index: number): CseChainRuleExpressionsAndLimitsOutputReference {
    return new CseChainRuleExpressionsAndLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule sumologic_cse_chain_rule}
*/
export class CseChainRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_chain_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/cse_chain_rule sumologic_cse_chain_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseChainRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CseChainRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_chain_rule',
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
    this._enabled = config.enabled;
    this._groupByFields = config.groupByFields;
    this._id = config.id;
    this._isPrototype = config.isPrototype;
    this._name = config.name;
    this._ordered = config.ordered;
    this._severity = config.severity;
    this._summaryExpression = config.summaryExpression;
    this._tags = config.tags;
    this._windowSize = config.windowSize;
    this._entitySelectors.internalValue = config.entitySelectors;
    this._expressionsAndLimits.internalValue = config.expressionsAndLimits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
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

  // is_prototype - computed: false, optional: true, required: false
  private _isPrototype?: boolean | cdktf.IResolvable; 
  public get isPrototype() {
    return this.getBooleanAttribute('is_prototype');
  }
  public set isPrototype(value: boolean | cdktf.IResolvable) {
    this._isPrototype = value;
  }
  public resetIsPrototype() {
    this._isPrototype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrototypeInput() {
    return this._isPrototype;
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

  // ordered - computed: false, optional: true, required: false
  private _ordered?: boolean | cdktf.IResolvable; 
  public get ordered() {
    return this.getBooleanAttribute('ordered');
  }
  public set ordered(value: boolean | cdktf.IResolvable) {
    this._ordered = value;
  }
  public resetOrdered() {
    this._ordered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedInput() {
    return this._ordered;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // summary_expression - computed: false, optional: true, required: false
  private _summaryExpression?: string; 
  public get summaryExpression() {
    return this.getStringAttribute('summary_expression');
  }
  public set summaryExpression(value: string) {
    this._summaryExpression = value;
  }
  public resetSummaryExpression() {
    this._summaryExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryExpressionInput() {
    return this._summaryExpression;
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

  // window_size - computed: false, optional: false, required: true
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // entity_selectors - computed: false, optional: false, required: true
  private _entitySelectors = new CseChainRuleEntitySelectorsList(this, "entity_selectors", false);
  public get entitySelectors() {
    return this._entitySelectors;
  }
  public putEntitySelectors(value: CseChainRuleEntitySelectors[] | cdktf.IResolvable) {
    this._entitySelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorsInput() {
    return this._entitySelectors.internalValue;
  }

  // expressions_and_limits - computed: false, optional: false, required: true
  private _expressionsAndLimits = new CseChainRuleExpressionsAndLimitsList(this, "expressions_and_limits", false);
  public get expressionsAndLimits() {
    return this._expressionsAndLimits;
  }
  public putExpressionsAndLimits(value: CseChainRuleExpressionsAndLimits[] | cdktf.IResolvable) {
    this._expressionsAndLimits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsAndLimitsInput() {
    return this._expressionsAndLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupByFields),
      id: cdktf.stringToTerraform(this._id),
      is_prototype: cdktf.booleanToTerraform(this._isPrototype),
      name: cdktf.stringToTerraform(this._name),
      ordered: cdktf.booleanToTerraform(this._ordered),
      severity: cdktf.numberToTerraform(this._severity),
      summary_expression: cdktf.stringToTerraform(this._summaryExpression),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      window_size: cdktf.stringToTerraform(this._windowSize),
      entity_selectors: cdktf.listMapper(cseChainRuleEntitySelectorsToTerraform, true)(this._entitySelectors.internalValue),
      expressions_and_limits: cdktf.listMapper(cseChainRuleExpressionsAndLimitsToTerraform, true)(this._expressionsAndLimits.internalValue),
    };
  }
}
