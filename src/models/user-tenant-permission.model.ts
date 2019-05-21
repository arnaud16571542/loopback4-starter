import {model, property, belongsTo} from '@loopback/repository';

import {UserModifiableEntity} from './user-modifiable-entity.model';
import {UserTenant} from './user-tenant.model';
import {UserPermission} from 'loopback4-authorization';

@model({
  name: 'user_tenant_permissions',
})
export class UserTenantPermission extends UserModifiableEntity
  implements UserPermission<string> {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @belongsTo(
    () => UserTenant,
    {name: 'user_tenant_id'},
    {
      required: true,
    },
  )
  user_tenant_id: number;

  @property({
    type: 'string',
    required: true,
  })
  permission: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  allowed: boolean;

  constructor(data?: Partial<UserTenantPermission>) {
    super(data);
  }
}
