// https://www.terraform.io/docs/providers/sumologic/r/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#alert_name Monitor#alert_name}
  */
  readonly alertName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#content_type Monitor#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#created_at Monitor#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#created_by Monitor#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#description Monitor#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#evaluation_delay Monitor#evaluation_delay}
  */
  readonly evaluationDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#group_notifications Monitor#group_notifications}
  */
  readonly groupNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#is_disabled Monitor#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#is_locked Monitor#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#is_mutable Monitor#is_mutable}
  */
  readonly isMutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#is_system Monitor#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#modified_at Monitor#modified_at}
  */
  readonly modifiedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#modified_by Monitor#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#monitor_type Monitor#monitor_type}
  */
  readonly monitorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#notification_group_fields Monitor#notification_group_fields}
  */
  readonly notificationGroupFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#parent_id Monitor#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#playbook Monitor#playbook}
  */
  readonly playbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#post_request_map Monitor#post_request_map}
  */
  readonly postRequestMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#slo_id Monitor#slo_id}
  */
  readonly sloId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#status Monitor#status}
  */
  readonly status?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#type Monitor#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#version Monitor#version}
  */
  readonly version?: number;
  /**
  * notifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#notifications Monitor#notifications}
  */
  readonly notifications?: MonitorNotifications[] | cdktf.IResolvable;
  /**
  * obj_permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#obj_permission Monitor#obj_permission}
  */
  readonly objPermission?: MonitorObjPermission[] | cdktf.IResolvable;
  /**
  * queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#queries Monitor#queries}
  */
  readonly queries?: MonitorQueries[] | cdktf.IResolvable;
  /**
  * trigger_conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#trigger_conditions Monitor#trigger_conditions}
  */
  readonly triggerConditions?: MonitorTriggerConditions;
  /**
  * triggers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#triggers Monitor#triggers}
  */
  readonly triggers?: MonitorTriggers[] | cdktf.IResolvable;
}
export interface MonitorNotificationsNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#action_type Monitor#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#connection_id Monitor#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#connection_type Monitor#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#message_body Monitor#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#payload_override Monitor#payload_override}
  */
  readonly payloadOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#recipients Monitor#recipients}
  */
  readonly recipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#subject Monitor#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_zone Monitor#time_zone}
  */
  readonly timeZone?: string;
}

export function monitorNotificationsNotificationToTerraform(struct?: MonitorNotificationsNotificationOutputReference | MonitorNotificationsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    payload_override: cdktf.stringToTerraform(struct!.payloadOverride),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject: cdktf.stringToTerraform(struct!.subject),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export class MonitorNotificationsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorNotificationsNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._payloadOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadOverride = this._payloadOverride;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotificationsNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._connectionId = undefined;
      this._connectionType = undefined;
      this._messageBody = undefined;
      this._payloadOverride = undefined;
      this._recipients = undefined;
      this._subject = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._connectionId = value.connectionId;
      this._connectionType = value.connectionType;
      this._messageBody = value.messageBody;
      this._payloadOverride = value.payloadOverride;
      this._recipients = value.recipients;
      this._subject = value.subject;
      this._timeZone = value.timeZone;
    }
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // payload_override - computed: false, optional: true, required: false
  private _payloadOverride?: string; 
  public get payloadOverride() {
    return this.getStringAttribute('payload_override');
  }
  public set payloadOverride(value: string) {
    this._payloadOverride = value;
  }
  public resetPayloadOverride() {
    this._payloadOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadOverrideInput() {
    return this._payloadOverride;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface MonitorNotifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#run_for_trigger_types Monitor#run_for_trigger_types}
  */
  readonly runForTriggerTypes: string[];
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#notification Monitor#notification}
  */
  readonly notification: MonitorNotificationsNotification;
}

export function monitorNotificationsToTerraform(struct?: MonitorNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_for_trigger_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runForTriggerTypes),
    notification: monitorNotificationsNotificationToTerraform(struct!.notification),
  }
}

export class MonitorNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runForTriggerTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.runForTriggerTypes = this._runForTriggerTypes;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runForTriggerTypes = undefined;
      this._notification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runForTriggerTypes = value.runForTriggerTypes;
      this._notification.internalValue = value.notification;
    }
  }

  // run_for_trigger_types - computed: false, optional: false, required: true
  private _runForTriggerTypes?: string[]; 
  public get runForTriggerTypes() {
    return this.getListAttribute('run_for_trigger_types');
  }
  public set runForTriggerTypes(value: string[]) {
    this._runForTriggerTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runForTriggerTypesInput() {
    return this._runForTriggerTypes;
  }

  // notification - computed: false, optional: false, required: true
  private _notification = new MonitorNotificationsNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: MonitorNotificationsNotification) {
    this._notification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}

export class MonitorNotificationsList extends cdktf.ComplexList {
  public internalValue? : MonitorNotifications[] | cdktf.IResolvable

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
  public get(index: number): MonitorNotificationsOutputReference {
    return new MonitorNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorObjPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#permissions Monitor#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#subject_id Monitor#subject_id}
  */
  readonly subjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#subject_type Monitor#subject_type}
  */
  readonly subjectType: string;
}

export function monitorObjPermissionToTerraform(struct?: MonitorObjPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}

export class MonitorObjPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorObjPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorObjPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._subjectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._subjectId = value.subjectId;
      this._subjectType = value.subjectType;
    }
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class MonitorObjPermissionList extends cdktf.ComplexList {
  public internalValue? : MonitorObjPermission[] | cdktf.IResolvable

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
  public get(index: number): MonitorObjPermissionOutputReference {
    return new MonitorObjPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#query Monitor#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#row_id Monitor#row_id}
  */
  readonly rowId: string;
}

export function monitorQueriesToTerraform(struct?: MonitorQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    row_id: cdktf.stringToTerraform(struct!.rowId),
  }
}

export class MonitorQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowId = this._rowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._rowId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._rowId = value.rowId;
    }
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
}

export class MonitorQueriesList extends cdktf.ComplexList {
  public internalValue? : MonitorQueries[] | cdktf.IResolvable

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
  public get(index: number): MonitorQueriesOutputReference {
    return new MonitorQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTriggerConditionsLogsMissingDataCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
}

export function monitorTriggerConditionsLogsMissingDataConditionToTerraform(struct?: MonitorTriggerConditionsLogsMissingDataConditionOutputReference | MonitorTriggerConditionsLogsMissingDataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_range: cdktf.stringToTerraform(struct!.timeRange),
  }
}

export class MonitorTriggerConditionsLogsMissingDataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsMissingDataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsMissingDataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeRange = value.timeRange;
    }
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }
}
export interface MonitorTriggerConditionsLogsOutlierConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#consecutive Monitor#consecutive}
  */
  readonly consecutive?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#window Monitor#window}
  */
  readonly window?: number;
}

export function monitorTriggerConditionsLogsOutlierConditionCriticalToTerraform(struct?: MonitorTriggerConditionsLogsOutlierConditionCriticalOutputReference | MonitorTriggerConditionsLogsOutlierConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    window: cdktf.numberToTerraform(struct!.window),
  }
}

export class MonitorTriggerConditionsLogsOutlierConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsOutlierConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsOutlierConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consecutive = undefined;
      this._threshold = undefined;
      this._window = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consecutive = value.consecutive;
      this._threshold = value.threshold;
      this._window = value.window;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
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

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface MonitorTriggerConditionsLogsOutlierConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#consecutive Monitor#consecutive}
  */
  readonly consecutive?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#window Monitor#window}
  */
  readonly window?: number;
}

export function monitorTriggerConditionsLogsOutlierConditionWarningToTerraform(struct?: MonitorTriggerConditionsLogsOutlierConditionWarningOutputReference | MonitorTriggerConditionsLogsOutlierConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    window: cdktf.numberToTerraform(struct!.window),
  }
}

export class MonitorTriggerConditionsLogsOutlierConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsOutlierConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsOutlierConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consecutive = undefined;
      this._threshold = undefined;
      this._window = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consecutive = value.consecutive;
      this._threshold = value.threshold;
      this._window = value.window;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
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

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface MonitorTriggerConditionsLogsOutlierCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#direction Monitor#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#field Monitor#field}
  */
  readonly field?: string;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsLogsOutlierConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsLogsOutlierConditionWarning;
}

export function monitorTriggerConditionsLogsOutlierConditionToTerraform(struct?: MonitorTriggerConditionsLogsOutlierConditionOutputReference | MonitorTriggerConditionsLogsOutlierCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field: cdktf.stringToTerraform(struct!.field),
    critical: monitorTriggerConditionsLogsOutlierConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsLogsOutlierConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsLogsOutlierConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsOutlierCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsOutlierCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._field = undefined;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._field = value.field;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsLogsOutlierConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsLogsOutlierConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsLogsOutlierConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsLogsOutlierConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionCriticalAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsLogsStaticConditionCriticalAlertToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionCriticalAlertOutputReference | MonitorTriggerConditionsLogsStaticConditionCriticalAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionCriticalAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionCriticalAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionCriticalAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionCriticalResolution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution_window Monitor#resolution_window}
  */
  readonly resolutionWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsLogsStaticConditionCriticalResolutionToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionCriticalResolutionOutputReference | MonitorTriggerConditionsLogsStaticConditionCriticalResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution_window: cdktf.stringToTerraform(struct!.resolutionWindow),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionCriticalResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionCriticalResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolutionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionWindow = this._resolutionWindow;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionCriticalResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolutionWindow = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolutionWindow = value.resolutionWindow;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // resolution_window - computed: false, optional: true, required: false
  private _resolutionWindow?: string; 
  public get resolutionWindow() {
    return this.getStringAttribute('resolution_window');
  }
  public set resolutionWindow(value: string) {
    this._resolutionWindow = value;
  }
  public resetResolutionWindow() {
    this._resolutionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionWindowInput() {
    return this._resolutionWindow;
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#alert Monitor#alert}
  */
  readonly alert: MonitorTriggerConditionsLogsStaticConditionCriticalAlert;
  /**
  * resolution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution Monitor#resolution}
  */
  readonly resolution: MonitorTriggerConditionsLogsStaticConditionCriticalResolution;
}

export function monitorTriggerConditionsLogsStaticConditionCriticalToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionCriticalOutputReference | MonitorTriggerConditionsLogsStaticConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    alert: monitorTriggerConditionsLogsStaticConditionCriticalAlertToTerraform(struct!.alert),
    resolution: monitorTriggerConditionsLogsStaticConditionCriticalResolutionToTerraform(struct!.resolution),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._resolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeRange = undefined;
      this._alert.internalValue = undefined;
      this._resolution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeRange = value.timeRange;
      this._alert.internalValue = value.alert;
      this._resolution.internalValue = value.resolution;
    }
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new MonitorTriggerConditionsLogsStaticConditionCriticalAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: MonitorTriggerConditionsLogsStaticConditionCriticalAlert) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution = new MonitorTriggerConditionsLogsStaticConditionCriticalResolutionOutputReference(this, "resolution");
  public get resolution() {
    return this._resolution;
  }
  public putResolution(value: MonitorTriggerConditionsLogsStaticConditionCriticalResolution) {
    this._resolution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution.internalValue;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionWarningAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsLogsStaticConditionWarningAlertToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionWarningAlertOutputReference | MonitorTriggerConditionsLogsStaticConditionWarningAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionWarningAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionWarningAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionWarningAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionWarningResolution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution_window Monitor#resolution_window}
  */
  readonly resolutionWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsLogsStaticConditionWarningResolutionToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionWarningResolutionOutputReference | MonitorTriggerConditionsLogsStaticConditionWarningResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution_window: cdktf.stringToTerraform(struct!.resolutionWindow),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionWarningResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionWarningResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolutionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionWindow = this._resolutionWindow;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionWarningResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolutionWindow = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolutionWindow = value.resolutionWindow;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // resolution_window - computed: false, optional: true, required: false
  private _resolutionWindow?: string; 
  public get resolutionWindow() {
    return this.getStringAttribute('resolution_window');
  }
  public set resolutionWindow(value: string) {
    this._resolutionWindow = value;
  }
  public resetResolutionWindow() {
    this._resolutionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionWindowInput() {
    return this._resolutionWindow;
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsLogsStaticConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#alert Monitor#alert}
  */
  readonly alert: MonitorTriggerConditionsLogsStaticConditionWarningAlert;
  /**
  * resolution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution Monitor#resolution}
  */
  readonly resolution: MonitorTriggerConditionsLogsStaticConditionWarningResolution;
}

export function monitorTriggerConditionsLogsStaticConditionWarningToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionWarningOutputReference | MonitorTriggerConditionsLogsStaticConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    alert: monitorTriggerConditionsLogsStaticConditionWarningAlertToTerraform(struct!.alert),
    resolution: monitorTriggerConditionsLogsStaticConditionWarningResolutionToTerraform(struct!.resolution),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._resolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeRange = undefined;
      this._alert.internalValue = undefined;
      this._resolution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeRange = value.timeRange;
      this._alert.internalValue = value.alert;
      this._resolution.internalValue = value.resolution;
    }
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new MonitorTriggerConditionsLogsStaticConditionWarningAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: MonitorTriggerConditionsLogsStaticConditionWarningAlert) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution = new MonitorTriggerConditionsLogsStaticConditionWarningResolutionOutputReference(this, "resolution");
  public get resolution() {
    return this._resolution;
  }
  public putResolution(value: MonitorTriggerConditionsLogsStaticConditionWarningResolution) {
    this._resolution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution.internalValue;
  }
}
export interface MonitorTriggerConditionsLogsStaticCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#field Monitor#field}
  */
  readonly field?: string;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsLogsStaticConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsLogsStaticConditionWarning;
}

export function monitorTriggerConditionsLogsStaticConditionToTerraform(struct?: MonitorTriggerConditionsLogsStaticConditionOutputReference | MonitorTriggerConditionsLogsStaticCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    critical: monitorTriggerConditionsLogsStaticConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsLogsStaticConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsLogsStaticConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsLogsStaticCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsLogsStaticCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
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

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsLogsStaticConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsLogsStaticConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsLogsStaticConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsLogsStaticConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditionsMetricsMissingDataCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#trigger_source Monitor#trigger_source}
  */
  readonly triggerSource: string;
}

export function monitorTriggerConditionsMetricsMissingDataConditionToTerraform(struct?: MonitorTriggerConditionsMetricsMissingDataConditionOutputReference | MonitorTriggerConditionsMetricsMissingDataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    trigger_source: cdktf.stringToTerraform(struct!.triggerSource),
  }
}

export class MonitorTriggerConditionsMetricsMissingDataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsMissingDataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._triggerSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSource = this._triggerSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsMissingDataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeRange = undefined;
      this._triggerSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeRange = value.timeRange;
      this._triggerSource = value.triggerSource;
    }
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }
}
export interface MonitorTriggerConditionsMetricsOutlierConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#baseline_window Monitor#baseline_window}
  */
  readonly baselineWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
}

export function monitorTriggerConditionsMetricsOutlierConditionCriticalToTerraform(struct?: MonitorTriggerConditionsMetricsOutlierConditionCriticalOutputReference | MonitorTriggerConditionsMetricsOutlierConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_window: cdktf.stringToTerraform(struct!.baselineWindow),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export class MonitorTriggerConditionsMetricsOutlierConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsOutlierConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineWindow = this._baselineWindow;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsOutlierConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineWindow = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineWindow = value.baselineWindow;
      this._threshold = value.threshold;
    }
  }

  // baseline_window - computed: false, optional: true, required: false
  private _baselineWindow?: string; 
  public get baselineWindow() {
    return this.getStringAttribute('baseline_window');
  }
  public set baselineWindow(value: string) {
    this._baselineWindow = value;
  }
  public resetBaselineWindow() {
    this._baselineWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineWindowInput() {
    return this._baselineWindow;
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
}
export interface MonitorTriggerConditionsMetricsOutlierConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#baseline_window Monitor#baseline_window}
  */
  readonly baselineWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
}

export function monitorTriggerConditionsMetricsOutlierConditionWarningToTerraform(struct?: MonitorTriggerConditionsMetricsOutlierConditionWarningOutputReference | MonitorTriggerConditionsMetricsOutlierConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_window: cdktf.stringToTerraform(struct!.baselineWindow),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export class MonitorTriggerConditionsMetricsOutlierConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsOutlierConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineWindow = this._baselineWindow;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsOutlierConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineWindow = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineWindow = value.baselineWindow;
      this._threshold = value.threshold;
    }
  }

  // baseline_window - computed: false, optional: true, required: false
  private _baselineWindow?: string; 
  public get baselineWindow() {
    return this.getStringAttribute('baseline_window');
  }
  public set baselineWindow(value: string) {
    this._baselineWindow = value;
  }
  public resetBaselineWindow() {
    this._baselineWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineWindowInput() {
    return this._baselineWindow;
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
}
export interface MonitorTriggerConditionsMetricsOutlierCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#direction Monitor#direction}
  */
  readonly direction?: string;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsMetricsOutlierConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsMetricsOutlierConditionWarning;
}

export function monitorTriggerConditionsMetricsOutlierConditionToTerraform(struct?: MonitorTriggerConditionsMetricsOutlierConditionOutputReference | MonitorTriggerConditionsMetricsOutlierCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    critical: monitorTriggerConditionsMetricsOutlierConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsMetricsOutlierConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsMetricsOutlierConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsOutlierCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsOutlierCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsMetricsOutlierConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsMetricsOutlierConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsMetricsOutlierConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsMetricsOutlierConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionCriticalAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsMetricsStaticConditionCriticalAlertToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionCriticalAlertOutputReference | MonitorTriggerConditionsMetricsStaticConditionCriticalAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionCriticalAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionCriticalAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionCriticalAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionCriticalResolution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#occurrence_type Monitor#occurrence_type}
  */
  readonly occurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsMetricsStaticConditionCriticalResolutionToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionCriticalResolutionOutputReference | MonitorTriggerConditionsMetricsStaticConditionCriticalResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionCriticalResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionCriticalResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionCriticalResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._occurrenceType = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._occurrenceType = value.occurrenceType;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // occurrence_type - computed: false, optional: true, required: false
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  public resetOccurrenceType() {
    this._occurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#occurrence_type Monitor#occurrence_type}
  */
  readonly occurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#alert Monitor#alert}
  */
  readonly alert: MonitorTriggerConditionsMetricsStaticConditionCriticalAlert;
  /**
  * resolution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution Monitor#resolution}
  */
  readonly resolution: MonitorTriggerConditionsMetricsStaticConditionCriticalResolution;
}

export function monitorTriggerConditionsMetricsStaticConditionCriticalToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionCriticalOutputReference | MonitorTriggerConditionsMetricsStaticConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    alert: monitorTriggerConditionsMetricsStaticConditionCriticalAlertToTerraform(struct!.alert),
    resolution: monitorTriggerConditionsMetricsStaticConditionCriticalResolutionToTerraform(struct!.resolution),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._resolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._occurrenceType = undefined;
      this._timeRange = undefined;
      this._alert.internalValue = undefined;
      this._resolution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._occurrenceType = value.occurrenceType;
      this._timeRange = value.timeRange;
      this._alert.internalValue = value.alert;
      this._resolution.internalValue = value.resolution;
    }
  }

  // occurrence_type - computed: false, optional: false, required: true
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new MonitorTriggerConditionsMetricsStaticConditionCriticalAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: MonitorTriggerConditionsMetricsStaticConditionCriticalAlert) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution = new MonitorTriggerConditionsMetricsStaticConditionCriticalResolutionOutputReference(this, "resolution");
  public get resolution() {
    return this._resolution;
  }
  public putResolution(value: MonitorTriggerConditionsMetricsStaticConditionCriticalResolution) {
    this._resolution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution.internalValue;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionWarningAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsMetricsStaticConditionWarningAlertToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionWarningAlertOutputReference | MonitorTriggerConditionsMetricsStaticConditionWarningAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionWarningAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionWarningAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionWarningAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionWarningResolution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#occurrence_type Monitor#occurrence_type}
  */
  readonly occurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
}

export function monitorTriggerConditionsMetricsStaticConditionWarningResolutionToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionWarningResolutionOutputReference | MonitorTriggerConditionsMetricsStaticConditionWarningResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionWarningResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionWarningResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionWarningResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._occurrenceType = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._occurrenceType = value.occurrenceType;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // occurrence_type - computed: false, optional: true, required: false
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  public resetOccurrenceType() {
    this._occurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface MonitorTriggerConditionsMetricsStaticConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#occurrence_type Monitor#occurrence_type}
  */
  readonly occurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#alert Monitor#alert}
  */
  readonly alert: MonitorTriggerConditionsMetricsStaticConditionWarningAlert;
  /**
  * resolution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution Monitor#resolution}
  */
  readonly resolution: MonitorTriggerConditionsMetricsStaticConditionWarningResolution;
}

export function monitorTriggerConditionsMetricsStaticConditionWarningToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionWarningOutputReference | MonitorTriggerConditionsMetricsStaticConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    alert: monitorTriggerConditionsMetricsStaticConditionWarningAlertToTerraform(struct!.alert),
    resolution: monitorTriggerConditionsMetricsStaticConditionWarningResolutionToTerraform(struct!.resolution),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._resolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._occurrenceType = undefined;
      this._timeRange = undefined;
      this._alert.internalValue = undefined;
      this._resolution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._occurrenceType = value.occurrenceType;
      this._timeRange = value.timeRange;
      this._alert.internalValue = value.alert;
      this._resolution.internalValue = value.resolution;
    }
  }

  // occurrence_type - computed: false, optional: false, required: true
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // alert - computed: false, optional: false, required: true
  private _alert = new MonitorTriggerConditionsMetricsStaticConditionWarningAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: MonitorTriggerConditionsMetricsStaticConditionWarningAlert) {
    this._alert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution = new MonitorTriggerConditionsMetricsStaticConditionWarningResolutionOutputReference(this, "resolution");
  public get resolution() {
    return this._resolution;
  }
  public putResolution(value: MonitorTriggerConditionsMetricsStaticConditionWarningResolution) {
    this._resolution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution.internalValue;
  }
}
export interface MonitorTriggerConditionsMetricsStaticCondition {
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsMetricsStaticConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsMetricsStaticConditionWarning;
}

export function monitorTriggerConditionsMetricsStaticConditionToTerraform(struct?: MonitorTriggerConditionsMetricsStaticConditionOutputReference | MonitorTriggerConditionsMetricsStaticCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: monitorTriggerConditionsMetricsStaticConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsMetricsStaticConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsMetricsStaticConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsMetricsStaticCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsMetricsStaticCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsMetricsStaticConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsMetricsStaticConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsMetricsStaticConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsMetricsStaticConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditionsSloBurnRateConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#burn_rate_threshold Monitor#burn_rate_threshold}
  */
  readonly burnRateThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
}

export function monitorTriggerConditionsSloBurnRateConditionCriticalToTerraform(struct?: MonitorTriggerConditionsSloBurnRateConditionCriticalOutputReference | MonitorTriggerConditionsSloBurnRateConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate_threshold: cdktf.numberToTerraform(struct!.burnRateThreshold),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
  }
}

export class MonitorTriggerConditionsSloBurnRateConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloBurnRateConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burnRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateThreshold = this._burnRateThreshold;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloBurnRateConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burnRateThreshold = undefined;
      this._timeRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burnRateThreshold = value.burnRateThreshold;
      this._timeRange = value.timeRange;
    }
  }

  // burn_rate_threshold - computed: false, optional: false, required: true
  private _burnRateThreshold?: number; 
  public get burnRateThreshold() {
    return this.getNumberAttribute('burn_rate_threshold');
  }
  public set burnRateThreshold(value: number) {
    this._burnRateThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateThresholdInput() {
    return this._burnRateThreshold;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }
}
export interface MonitorTriggerConditionsSloBurnRateConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#burn_rate_threshold Monitor#burn_rate_threshold}
  */
  readonly burnRateThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange: string;
}

export function monitorTriggerConditionsSloBurnRateConditionWarningToTerraform(struct?: MonitorTriggerConditionsSloBurnRateConditionWarningOutputReference | MonitorTriggerConditionsSloBurnRateConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burn_rate_threshold: cdktf.numberToTerraform(struct!.burnRateThreshold),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
  }
}

export class MonitorTriggerConditionsSloBurnRateConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloBurnRateConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burnRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateThreshold = this._burnRateThreshold;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloBurnRateConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burnRateThreshold = undefined;
      this._timeRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burnRateThreshold = value.burnRateThreshold;
      this._timeRange = value.timeRange;
    }
  }

  // burn_rate_threshold - computed: false, optional: false, required: true
  private _burnRateThreshold?: number; 
  public get burnRateThreshold() {
    return this.getNumberAttribute('burn_rate_threshold');
  }
  public set burnRateThreshold(value: number) {
    this._burnRateThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateThresholdInput() {
    return this._burnRateThreshold;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }
}
export interface MonitorTriggerConditionsSloBurnRateCondition {
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsSloBurnRateConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsSloBurnRateConditionWarning;
}

export function monitorTriggerConditionsSloBurnRateConditionToTerraform(struct?: MonitorTriggerConditionsSloBurnRateConditionOutputReference | MonitorTriggerConditionsSloBurnRateCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: monitorTriggerConditionsSloBurnRateConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsSloBurnRateConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsSloBurnRateConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloBurnRateCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloBurnRateCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsSloBurnRateConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsSloBurnRateConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsSloBurnRateConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsSloBurnRateConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditionsSloSliConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#sli_threshold Monitor#sli_threshold}
  */
  readonly sliThreshold: number;
}

export function monitorTriggerConditionsSloSliConditionCriticalToTerraform(struct?: MonitorTriggerConditionsSloSliConditionCriticalOutputReference | MonitorTriggerConditionsSloSliConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_threshold: cdktf.numberToTerraform(struct!.sliThreshold),
  }
}

export class MonitorTriggerConditionsSloSliConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloSliConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliThreshold = this._sliThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloSliConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sliThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sliThreshold = value.sliThreshold;
    }
  }

  // sli_threshold - computed: false, optional: false, required: true
  private _sliThreshold?: number; 
  public get sliThreshold() {
    return this.getNumberAttribute('sli_threshold');
  }
  public set sliThreshold(value: number) {
    this._sliThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliThresholdInput() {
    return this._sliThreshold;
  }
}
export interface MonitorTriggerConditionsSloSliConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#sli_threshold Monitor#sli_threshold}
  */
  readonly sliThreshold: number;
}

export function monitorTriggerConditionsSloSliConditionWarningToTerraform(struct?: MonitorTriggerConditionsSloSliConditionWarningOutputReference | MonitorTriggerConditionsSloSliConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_threshold: cdktf.numberToTerraform(struct!.sliThreshold),
  }
}

export class MonitorTriggerConditionsSloSliConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloSliConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliThreshold = this._sliThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloSliConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sliThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sliThreshold = value.sliThreshold;
    }
  }

  // sli_threshold - computed: false, optional: false, required: true
  private _sliThreshold?: number; 
  public get sliThreshold() {
    return this.getNumberAttribute('sli_threshold');
  }
  public set sliThreshold(value: number) {
    this._sliThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliThresholdInput() {
    return this._sliThreshold;
  }
}
export interface MonitorTriggerConditionsSloSliCondition {
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#critical Monitor#critical}
  */
  readonly critical?: MonitorTriggerConditionsSloSliConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#warning Monitor#warning}
  */
  readonly warning?: MonitorTriggerConditionsSloSliConditionWarning;
}

export function monitorTriggerConditionsSloSliConditionToTerraform(struct?: MonitorTriggerConditionsSloSliConditionOutputReference | MonitorTriggerConditionsSloSliCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: monitorTriggerConditionsSloSliConditionCriticalToTerraform(struct!.critical),
    warning: monitorTriggerConditionsSloSliConditionWarningToTerraform(struct!.warning),
  }
}

export class MonitorTriggerConditionsSloSliConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditionsSloSliCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditionsSloSliCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical.internalValue = value.critical;
      this._warning.internalValue = value.warning;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical = new MonitorTriggerConditionsSloSliConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: MonitorTriggerConditionsSloSliConditionCritical) {
    this._critical.internalValue = value;
  }
  public resetCritical() {
    this._critical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new MonitorTriggerConditionsSloSliConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: MonitorTriggerConditionsSloSliConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface MonitorTriggerConditions {
  /**
  * logs_missing_data_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#logs_missing_data_condition Monitor#logs_missing_data_condition}
  */
  readonly logsMissingDataCondition?: MonitorTriggerConditionsLogsMissingDataCondition;
  /**
  * logs_outlier_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#logs_outlier_condition Monitor#logs_outlier_condition}
  */
  readonly logsOutlierCondition?: MonitorTriggerConditionsLogsOutlierCondition;
  /**
  * logs_static_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#logs_static_condition Monitor#logs_static_condition}
  */
  readonly logsStaticCondition?: MonitorTriggerConditionsLogsStaticCondition;
  /**
  * metrics_missing_data_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#metrics_missing_data_condition Monitor#metrics_missing_data_condition}
  */
  readonly metricsMissingDataCondition?: MonitorTriggerConditionsMetricsMissingDataCondition;
  /**
  * metrics_outlier_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#metrics_outlier_condition Monitor#metrics_outlier_condition}
  */
  readonly metricsOutlierCondition?: MonitorTriggerConditionsMetricsOutlierCondition;
  /**
  * metrics_static_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#metrics_static_condition Monitor#metrics_static_condition}
  */
  readonly metricsStaticCondition?: MonitorTriggerConditionsMetricsStaticCondition;
  /**
  * slo_burn_rate_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#slo_burn_rate_condition Monitor#slo_burn_rate_condition}
  */
  readonly sloBurnRateCondition?: MonitorTriggerConditionsSloBurnRateCondition;
  /**
  * slo_sli_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#slo_sli_condition Monitor#slo_sli_condition}
  */
  readonly sloSliCondition?: MonitorTriggerConditionsSloSliCondition;
}

export function monitorTriggerConditionsToTerraform(struct?: MonitorTriggerConditionsOutputReference | MonitorTriggerConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs_missing_data_condition: monitorTriggerConditionsLogsMissingDataConditionToTerraform(struct!.logsMissingDataCondition),
    logs_outlier_condition: monitorTriggerConditionsLogsOutlierConditionToTerraform(struct!.logsOutlierCondition),
    logs_static_condition: monitorTriggerConditionsLogsStaticConditionToTerraform(struct!.logsStaticCondition),
    metrics_missing_data_condition: monitorTriggerConditionsMetricsMissingDataConditionToTerraform(struct!.metricsMissingDataCondition),
    metrics_outlier_condition: monitorTriggerConditionsMetricsOutlierConditionToTerraform(struct!.metricsOutlierCondition),
    metrics_static_condition: monitorTriggerConditionsMetricsStaticConditionToTerraform(struct!.metricsStaticCondition),
    slo_burn_rate_condition: monitorTriggerConditionsSloBurnRateConditionToTerraform(struct!.sloBurnRateCondition),
    slo_sli_condition: monitorTriggerConditionsSloSliConditionToTerraform(struct!.sloSliCondition),
  }
}

export class MonitorTriggerConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTriggerConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logsMissingDataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsMissingDataCondition = this._logsMissingDataCondition?.internalValue;
    }
    if (this._logsOutlierCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsOutlierCondition = this._logsOutlierCondition?.internalValue;
    }
    if (this._logsStaticCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsStaticCondition = this._logsStaticCondition?.internalValue;
    }
    if (this._metricsMissingDataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsMissingDataCondition = this._metricsMissingDataCondition?.internalValue;
    }
    if (this._metricsOutlierCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsOutlierCondition = this._metricsOutlierCondition?.internalValue;
    }
    if (this._metricsStaticCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsStaticCondition = this._metricsStaticCondition?.internalValue;
    }
    if (this._sloBurnRateCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloBurnRateCondition = this._sloBurnRateCondition?.internalValue;
    }
    if (this._sloSliCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloSliCondition = this._sloSliCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggerConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logsMissingDataCondition.internalValue = undefined;
      this._logsOutlierCondition.internalValue = undefined;
      this._logsStaticCondition.internalValue = undefined;
      this._metricsMissingDataCondition.internalValue = undefined;
      this._metricsOutlierCondition.internalValue = undefined;
      this._metricsStaticCondition.internalValue = undefined;
      this._sloBurnRateCondition.internalValue = undefined;
      this._sloSliCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logsMissingDataCondition.internalValue = value.logsMissingDataCondition;
      this._logsOutlierCondition.internalValue = value.logsOutlierCondition;
      this._logsStaticCondition.internalValue = value.logsStaticCondition;
      this._metricsMissingDataCondition.internalValue = value.metricsMissingDataCondition;
      this._metricsOutlierCondition.internalValue = value.metricsOutlierCondition;
      this._metricsStaticCondition.internalValue = value.metricsStaticCondition;
      this._sloBurnRateCondition.internalValue = value.sloBurnRateCondition;
      this._sloSliCondition.internalValue = value.sloSliCondition;
    }
  }

  // logs_missing_data_condition - computed: false, optional: true, required: false
  private _logsMissingDataCondition = new MonitorTriggerConditionsLogsMissingDataConditionOutputReference(this, "logs_missing_data_condition");
  public get logsMissingDataCondition() {
    return this._logsMissingDataCondition;
  }
  public putLogsMissingDataCondition(value: MonitorTriggerConditionsLogsMissingDataCondition) {
    this._logsMissingDataCondition.internalValue = value;
  }
  public resetLogsMissingDataCondition() {
    this._logsMissingDataCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsMissingDataConditionInput() {
    return this._logsMissingDataCondition.internalValue;
  }

  // logs_outlier_condition - computed: false, optional: true, required: false
  private _logsOutlierCondition = new MonitorTriggerConditionsLogsOutlierConditionOutputReference(this, "logs_outlier_condition");
  public get logsOutlierCondition() {
    return this._logsOutlierCondition;
  }
  public putLogsOutlierCondition(value: MonitorTriggerConditionsLogsOutlierCondition) {
    this._logsOutlierCondition.internalValue = value;
  }
  public resetLogsOutlierCondition() {
    this._logsOutlierCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsOutlierConditionInput() {
    return this._logsOutlierCondition.internalValue;
  }

  // logs_static_condition - computed: false, optional: true, required: false
  private _logsStaticCondition = new MonitorTriggerConditionsLogsStaticConditionOutputReference(this, "logs_static_condition");
  public get logsStaticCondition() {
    return this._logsStaticCondition;
  }
  public putLogsStaticCondition(value: MonitorTriggerConditionsLogsStaticCondition) {
    this._logsStaticCondition.internalValue = value;
  }
  public resetLogsStaticCondition() {
    this._logsStaticCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsStaticConditionInput() {
    return this._logsStaticCondition.internalValue;
  }

  // metrics_missing_data_condition - computed: false, optional: true, required: false
  private _metricsMissingDataCondition = new MonitorTriggerConditionsMetricsMissingDataConditionOutputReference(this, "metrics_missing_data_condition");
  public get metricsMissingDataCondition() {
    return this._metricsMissingDataCondition;
  }
  public putMetricsMissingDataCondition(value: MonitorTriggerConditionsMetricsMissingDataCondition) {
    this._metricsMissingDataCondition.internalValue = value;
  }
  public resetMetricsMissingDataCondition() {
    this._metricsMissingDataCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsMissingDataConditionInput() {
    return this._metricsMissingDataCondition.internalValue;
  }

  // metrics_outlier_condition - computed: false, optional: true, required: false
  private _metricsOutlierCondition = new MonitorTriggerConditionsMetricsOutlierConditionOutputReference(this, "metrics_outlier_condition");
  public get metricsOutlierCondition() {
    return this._metricsOutlierCondition;
  }
  public putMetricsOutlierCondition(value: MonitorTriggerConditionsMetricsOutlierCondition) {
    this._metricsOutlierCondition.internalValue = value;
  }
  public resetMetricsOutlierCondition() {
    this._metricsOutlierCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsOutlierConditionInput() {
    return this._metricsOutlierCondition.internalValue;
  }

  // metrics_static_condition - computed: false, optional: true, required: false
  private _metricsStaticCondition = new MonitorTriggerConditionsMetricsStaticConditionOutputReference(this, "metrics_static_condition");
  public get metricsStaticCondition() {
    return this._metricsStaticCondition;
  }
  public putMetricsStaticCondition(value: MonitorTriggerConditionsMetricsStaticCondition) {
    this._metricsStaticCondition.internalValue = value;
  }
  public resetMetricsStaticCondition() {
    this._metricsStaticCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsStaticConditionInput() {
    return this._metricsStaticCondition.internalValue;
  }

  // slo_burn_rate_condition - computed: false, optional: true, required: false
  private _sloBurnRateCondition = new MonitorTriggerConditionsSloBurnRateConditionOutputReference(this, "slo_burn_rate_condition");
  public get sloBurnRateCondition() {
    return this._sloBurnRateCondition;
  }
  public putSloBurnRateCondition(value: MonitorTriggerConditionsSloBurnRateCondition) {
    this._sloBurnRateCondition.internalValue = value;
  }
  public resetSloBurnRateCondition() {
    this._sloBurnRateCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBurnRateConditionInput() {
    return this._sloBurnRateCondition.internalValue;
  }

  // slo_sli_condition - computed: false, optional: true, required: false
  private _sloSliCondition = new MonitorTriggerConditionsSloSliConditionOutputReference(this, "slo_sli_condition");
  public get sloSliCondition() {
    return this._sloSliCondition;
  }
  public putSloSliCondition(value: MonitorTriggerConditionsSloSliCondition) {
    this._sloSliCondition.internalValue = value;
  }
  public resetSloSliCondition() {
    this._sloSliCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloSliConditionInput() {
    return this._sloSliCondition.internalValue;
  }
}
export interface MonitorTriggers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#detection_method Monitor#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#occurrence_type Monitor#occurrence_type}
  */
  readonly occurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#resolution_window Monitor#resolution_window}
  */
  readonly resolutionWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#threshold_type Monitor#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#time_range Monitor#time_range}
  */
  readonly timeRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#trigger_source Monitor#trigger_source}
  */
  readonly triggerSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/sumologic/r/monitor#trigger_type Monitor#trigger_type}
  */
  readonly triggerType?: string;
}

export function monitorTriggersToTerraform(struct?: MonitorTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_method: cdktf.stringToTerraform(struct!.detectionMethod),
    occurrence_type: cdktf.stringToTerraform(struct!.occurrenceType),
    resolution_window: cdktf.stringToTerraform(struct!.resolutionWindow),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    trigger_source: cdktf.stringToTerraform(struct!.triggerSource),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}

export class MonitorTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMethod = this._detectionMethod;
    }
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._resolutionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionWindow = this._resolutionWindow;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._triggerSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSource = this._triggerSource;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMethod = undefined;
      this._occurrenceType = undefined;
      this._resolutionWindow = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
      this._timeRange = undefined;
      this._triggerSource = undefined;
      this._triggerType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMethod = value.detectionMethod;
      this._occurrenceType = value.occurrenceType;
      this._resolutionWindow = value.resolutionWindow;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
      this._timeRange = value.timeRange;
      this._triggerSource = value.triggerSource;
      this._triggerType = value.triggerType;
    }
  }

  // detection_method - computed: false, optional: true, required: false
  private _detectionMethod?: string; 
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }
  public set detectionMethod(value: string) {
    this._detectionMethod = value;
  }
  public resetDetectionMethod() {
    this._detectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMethodInput() {
    return this._detectionMethod;
  }

  // occurrence_type - computed: false, optional: true, required: false
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  public resetOccurrenceType() {
    this._occurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
  }

  // resolution_window - computed: false, optional: true, required: false
  private _resolutionWindow?: string; 
  public get resolutionWindow() {
    return this.getStringAttribute('resolution_window');
  }
  public set resolutionWindow(value: string) {
    this._resolutionWindow = value;
  }
  public resetResolutionWindow() {
    this._resolutionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionWindowInput() {
    return this._resolutionWindow;
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

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // trigger_source - computed: false, optional: true, required: false
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  public resetTriggerSource() {
    this._triggerSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }
}

export class MonitorTriggersList extends cdktf.ComplexList {
  public internalValue? : MonitorTriggers[] | cdktf.IResolvable

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
  public get(index: number): MonitorTriggersOutputReference {
    return new MonitorTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/sumologic/r/monitor sumologic_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/sumologic/r/monitor sumologic_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_monitor',
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
    this._alertName = config.alertName;
    this._contentType = config.contentType;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._evaluationDelay = config.evaluationDelay;
    this._groupNotifications = config.groupNotifications;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._isLocked = config.isLocked;
    this._isMutable = config.isMutable;
    this._isSystem = config.isSystem;
    this._modifiedAt = config.modifiedAt;
    this._modifiedBy = config.modifiedBy;
    this._monitorType = config.monitorType;
    this._name = config.name;
    this._notificationGroupFields = config.notificationGroupFields;
    this._parentId = config.parentId;
    this._playbook = config.playbook;
    this._postRequestMap = config.postRequestMap;
    this._sloId = config.sloId;
    this._status = config.status;
    this._type = config.type;
    this._version = config.version;
    this._notifications.internalValue = config.notifications;
    this._objPermission.internalValue = config.objPermission;
    this._queries.internalValue = config.queries;
    this._triggerConditions.internalValue = config.triggerConditions;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_name - computed: false, optional: true, required: false
  private _alertName?: string; 
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  public resetAlertName() {
    this._alertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // evaluation_delay - computed: true, optional: true, required: false
  private _evaluationDelay?: string; 
  public get evaluationDelay() {
    return this.getStringAttribute('evaluation_delay');
  }
  public set evaluationDelay(value: string) {
    this._evaluationDelay = value;
  }
  public resetEvaluationDelay() {
    this._evaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDelayInput() {
    return this._evaluationDelay;
  }

  // group_notifications - computed: false, optional: true, required: false
  private _groupNotifications?: boolean | cdktf.IResolvable; 
  public get groupNotifications() {
    return this.getBooleanAttribute('group_notifications');
  }
  public set groupNotifications(value: boolean | cdktf.IResolvable) {
    this._groupNotifications = value;
  }
  public resetGroupNotifications() {
    this._groupNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNotificationsInput() {
    return this._groupNotifications;
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

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // is_locked - computed: true, optional: true, required: false
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

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
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

  // notification_group_fields - computed: false, optional: true, required: false
  private _notificationGroupFields?: string[]; 
  public get notificationGroupFields() {
    return this.getListAttribute('notification_group_fields');
  }
  public set notificationGroupFields(value: string[]) {
    this._notificationGroupFields = value;
  }
  public resetNotificationGroupFields() {
    this._notificationGroupFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupFieldsInput() {
    return this._notificationGroupFields;
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

  // playbook - computed: false, optional: true, required: false
  private _playbook?: string; 
  public get playbook() {
    return this.getStringAttribute('playbook');
  }
  public set playbook(value: string) {
    this._playbook = value;
  }
  public resetPlaybook() {
    this._playbook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookInput() {
    return this._playbook;
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

  // slo_id - computed: false, optional: true, required: false
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  public resetSloId() {
    this._sloId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // notifications - computed: false, optional: true, required: false
  private _notifications = new MonitorNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: MonitorNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // obj_permission - computed: false, optional: true, required: false
  private _objPermission = new MonitorObjPermissionList(this, "obj_permission", true);
  public get objPermission() {
    return this._objPermission;
  }
  public putObjPermission(value: MonitorObjPermission[] | cdktf.IResolvable) {
    this._objPermission.internalValue = value;
  }
  public resetObjPermission() {
    this._objPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objPermissionInput() {
    return this._objPermission.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new MonitorQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: MonitorQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }

  // trigger_conditions - computed: false, optional: true, required: false
  private _triggerConditions = new MonitorTriggerConditionsOutputReference(this, "trigger_conditions");
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: MonitorTriggerConditions) {
    this._triggerConditions.internalValue = value;
  }
  public resetTriggerConditions() {
    this._triggerConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new MonitorTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: MonitorTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_name: cdktf.stringToTerraform(this._alertName),
      content_type: cdktf.stringToTerraform(this._contentType),
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      evaluation_delay: cdktf.stringToTerraform(this._evaluationDelay),
      group_notifications: cdktf.booleanToTerraform(this._groupNotifications),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      is_mutable: cdktf.booleanToTerraform(this._isMutable),
      is_system: cdktf.booleanToTerraform(this._isSystem),
      modified_at: cdktf.stringToTerraform(this._modifiedAt),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      name: cdktf.stringToTerraform(this._name),
      notification_group_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationGroupFields),
      parent_id: cdktf.stringToTerraform(this._parentId),
      playbook: cdktf.stringToTerraform(this._playbook),
      post_request_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._postRequestMap),
      slo_id: cdktf.stringToTerraform(this._sloId),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.numberToTerraform(this._version),
      notifications: cdktf.listMapper(monitorNotificationsToTerraform, true)(this._notifications.internalValue),
      obj_permission: cdktf.listMapper(monitorObjPermissionToTerraform, true)(this._objPermission.internalValue),
      queries: cdktf.listMapper(monitorQueriesToTerraform, true)(this._queries.internalValue),
      trigger_conditions: monitorTriggerConditionsToTerraform(this._triggerConditions.internalValue),
      triggers: cdktf.listMapper(monitorTriggersToTerraform, true)(this._triggers.internalValue),
    };
  }
}
