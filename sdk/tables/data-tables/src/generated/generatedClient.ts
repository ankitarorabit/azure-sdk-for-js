/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Table, Service } from "./operations";
import { GeneratedClientContext } from "./generatedClientContext";
import { GeneratedClientOptionalParams } from "./models";

/** @hidden */
export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param url The URL of the service account or table that is the target of the desired operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: GeneratedClientOptionalParams) {
    super(url, options);
    this.table = new Table(this);
    this.service = new Service(this);
  }

  table: Table;
  service: Service;
}
