// ==========================================================================
// Project:   Valhalla.deedsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Valhalla */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Valhalla.deedsController = SC.ArrayController.create(
/** @scope Valhalla.deedsController.prototype */ {

  // TODO: Add your own code here.

sortStateDidChange: function() {
  var column = this.get('sortedColumn');
  if( column == null || column.get('sortState') == null ) { return; }

  sort = column.get('sortState') == SC.SORT_ASCENDING ? 'ASC' : 'DESC';
  var query = SC.Query.local(Valhalla.Deeds, { orderBy: column.get('key')+' '+sort });
  this.set('content', Valhalla.store.find(query));
}.observes('*sortedColumn.sortState'),


}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('valhalla');