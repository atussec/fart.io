/**
 * @fileoverview Classes to produce farts satisfying various user-defined properties.
 * @version 0.0.14
 * @license GNU Lesser General Public License, version 2.1
 * @author toiletjs (https://twitter.com/toiletjs)
 * 
 * TODO(toiletjs): Use React. See #4 (v2).
 */

class AbstractBaseFart {
  /**
   * Initializes farts.
   * @param {boolean=} opt_isWet Whether the fart is wet. (Optional)
   * @param {boolean=} opt_isSilentButDeadly Whether the fart is silent but deadly. (Optional)
   */
  constructor(opt_isWet, opt_isSilentButDeadly) {
    this.isWet = Boolean(opt_isWet);
    this.isSilentButDeadly = Boolean(opt_isSilentButDeadly);
  }
  
  /**
   * Farts.
   */
  fart() {}
}

class Fart extends AbstractBaseFart {
  /**
   * Farts.
   */
  fart() {
    if (this.isSilentButDeadly) {
      while(true);
    }
    if (this.isWet) {
      console.log('pfffffpfpfpffffff?');
    } else {
      console.log('poooOOOot.');
    }
  }
}

class Shart extends AbstractBaseFart {
  /**
   * Sharts.
   */
  fart() {
    // Note that this.isWet is not checked here as all sharts are considered wet.
    console.log('%c plfffffpfffpllffff', 'color: brown;');
  }
}
