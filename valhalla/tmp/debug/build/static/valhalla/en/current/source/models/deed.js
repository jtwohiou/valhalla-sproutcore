// ==========================================================================
// Project:   Valhalla.Deed
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Valhalla */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Valhalla.Deed = SC.Record.extend(
/** @scope Valhalla.Deed.prototype */ {

  // TODO: Add your own code here.
  performed_at: SC.Record.attr(Date),
  speaker:  SC.Record.attr(String),
  text: SC.Record.attr(String),
  id: SC.Record.attr(String),
  guid: SC.Record.attr(Number)
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('valhalla');