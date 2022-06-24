/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object representing a spacer between two rows.
 */


/**
 * Object representing a spacer between two rows.
 * @class
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.SpacerRow');

/* eslint-disable-next-line no-unused-vars */
import {ConstantProvider} from '../common/constants.js';

import {InRowSpacer} from './in_row_spacer.js';
import {Row} from './row.js';
import {Types} from './types.js';


/**
 * An object containing information about a spacer between two rows.
 * @struct
 * @alias Blockly.blockRendering.SpacerRow
 */
export class SpacerRow extends Row {
  followsStatement = false;

  precedesStatement = false;

  override widthWithConnectedBlocks = 0;
  override elements: InRowSpacer[];

  /**
   * @param constants The rendering constants provider.
   * @param height The height of the spacer.
   * @param width The width of the spacer.
   */
  constructor(
      constants: ConstantProvider, public override height: number,
      public override width: number) {
    super(constants);
    this.type |= Types.SPACER | Types.BETWEEN_ROW_SPACER;

    this.elements = [new InRowSpacer(this.constants, width)];
  }

  override measure() {}
}
// NOP.  Width and height were set at creation.