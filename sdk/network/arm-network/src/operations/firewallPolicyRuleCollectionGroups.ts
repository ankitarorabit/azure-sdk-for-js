/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/firewallPolicyRuleCollectionGroupsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a FirewallPolicyRuleCollectionGroups. */
export class FirewallPolicyRuleCollectionGroups {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a FirewallPolicyRuleCollectionGroups.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,firewallPolicyName,ruleCollectionGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallPolicyRuleCollectionGroupsGetResponse>
   */
  get(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallPolicyRuleCollectionGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param callback The callback
   */
  get(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroup>): void;
  get(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroup>, callback?: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroup>): Promise<Models.FirewallPolicyRuleCollectionGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        firewallPolicyName,
        ruleCollectionGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FirewallPolicyRuleCollectionGroupsGetResponse>;
  }

  /**
   * Creates or updates the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleCollectionGroup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, parameters: Models.FirewallPolicyRuleCollectionGroup, options?: msRest.RequestOptionsBase): Promise<Models.FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,firewallPolicyName,ruleCollectionGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse>;
  }

  /**
   * Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallPolicyRuleCollectionGroupsListResponse>
   */
  list(resourceGroupName: string, firewallPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallPolicyRuleCollectionGroupsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param callback The callback
   */
  list(resourceGroupName: string, firewallPolicyName: string, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, firewallPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): void;
  list(resourceGroupName: string, firewallPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>, callback?: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): Promise<Models.FirewallPolicyRuleCollectionGroupsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        firewallPolicyName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FirewallPolicyRuleCollectionGroupsListResponse>;
  }

  /**
   * Deletes the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        firewallPolicyName,
        ruleCollectionGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleCollectionGroup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, ruleCollectionGroupName: string, parameters: Models.FirewallPolicyRuleCollectionGroup, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        firewallPolicyName,
        ruleCollectionGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallPolicyRuleCollectionGroupsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallPolicyRuleCollectionGroupsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>, callback?: msRest.ServiceCallback<Models.FirewallPolicyRuleCollectionGroupListResult>): Promise<Models.FirewallPolicyRuleCollectionGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FirewallPolicyRuleCollectionGroupsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleCollectionGroups/{ruleCollectionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.firewallPolicyName,
    Parameters.ruleCollectionGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleCollectionGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleCollectionGroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.firewallPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleCollectionGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleCollectionGroups/{ruleCollectionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.firewallPolicyName,
    Parameters.ruleCollectionGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleCollectionGroups/{ruleCollectionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.firewallPolicyName,
    Parameters.ruleCollectionGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.FirewallPolicyRuleCollectionGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleCollectionGroup
    },
    201: {
      bodyMapper: Mappers.FirewallPolicyRuleCollectionGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleCollectionGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};