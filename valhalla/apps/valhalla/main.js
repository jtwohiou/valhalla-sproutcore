// ==========================================================================
// Project:   Valhalla
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Valhalla */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//



Valhalla.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Valhalla.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Valhalla.contactsController.set('content',Valhalla.contacts);
  //var deeds = Valhalla.store.find(Valhalla.Deed);
  //Valhalla.deedController.set('content', deeds);
  var deeds = Valhalla.store.find(Valhalla.DEEDS_QUERY);
  Valhalla.deedsController.set('content', deeds);
} ;

function main() { Valhalla.main(); }



Valhalla.DeedJSONProxy = SC.Object.create({
          normalize_deed_data: function(data) {
               result = new Array();
               if (data.length == undefined)
               {
                    array_name = 'data.deed';
                    eval(array_name).guid = eval(array_name).id;
                    result.push(eval(array_name));
               }
               else
               {
                    for(var i=0; i<data.length; i++) {
                         array_name = 'data[i]';
                         eval(array_name).guid = eval(array_name).id;
                         result.push(eval(array_name));
                    }
               }
               return result;
          } 
}) ;


 

