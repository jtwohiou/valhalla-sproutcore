// ==========================================================================
// Project:   Valhalla - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Valhalla */


// This page describes the main user interface for your application.  
Valhalla.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
 mainPane: SC.MainPane.design({
    childViews: 'middleView topView bottomView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'labelView searchView buttonView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      searchView: SC.TextFieldView.design({
        layout: { width: 200, height: 22, right: 150, centerY: 0 },
     }),
	

	buttonView: SC.ButtonView.design({
		layout: { centerY: 0, height: 24, right: 12, width: 100 },
        	title:  "Search"	
	}),

      labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Deeds'
      }),
      

    }),
    
    middleView: SC.TableView.design({
      layout: { top: 36, bottom: 32, left: 0, right: 0 },
      backgroundColor: 'white',
      
      columns: [
	  SC.TableColumn.create({
	    key: 'id',
	    label: 'id',
	    width: 50
	}),
	  SC.TableColumn.create({
	    key:   'performed_at',
	    label: 'Date',
	    width: 150
	  }),

	  SC.TableColumn.create({
	    key:   'speaker',
	    label: 'Speaker',
	    width: 150,
	    minWidth: 150
	  }),
	  SC.TableColumn.create({
	    key:   'text',
	    label: 'Deed',
	    width: 600,
	    minWidth: 150
	  })
	],
      
        contentBinding:   'Valhalla.deedsController.arrangedObjects', 
    	selectionBinding: 'Valhalla.deedsController.selection',
    	sortedColumnBinding: 'Valhalla.deedsController.sortedColumn',
	canReorderContent: YES,
    	selectOnMouseDown: YES,
    	exampleView: SC.TableRowView,
    	recordType: Valhalla.Deed


    }),
    
    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      anchorLocation: SC.ANCHOR_BOTTOM
    })
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('valhalla');