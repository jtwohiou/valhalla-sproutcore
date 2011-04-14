// ==========================================================================
// Project:   Valhalla.DeedDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Valhalla */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require('models/deed');
Valhalla.DEEDS_QUERY = SC.Query.local(Valhalla.Deed, {
  //orderBy: 'performed_at,speaker'
});

Valhalla.DeedDataSource = SC.DataSource.extend(


/** @scope Valhalla.DeedDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

fetch: function(store, query) {
 
  if (query === Valhalla.DEEDS_QUERY) {
    SC.Request.getUrl('/deeds').header({'Accept': 'application/json'}).json()
      .notify(this, 'didFetchDeeds', store, query)
      .send();
    return YES;
  }
 
  return NO;
},
 
didFetchDeeds: function(response, store, query) {
  if (SC.ok(response)) {
    store.loadRecords(Valhalla.Deed, Valhalla.DeedJSONProxy.normalize_deed_data(response.get('body')));
    store.dataSourceDidFetchQuery(query);
 
  } else store.dataSourceDidErrorQuery(query, response);
},

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
