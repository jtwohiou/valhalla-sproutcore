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
      childViews: 'labelView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
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
	    key:   'performed_at',
	    label: 'Date',
	    width: 100
	  }),

	  SC.TableColumn.create({
	    key:   'speaker',
	    label: 'Speaker',
	    width: 100,
	    minWidth: 100
	  }),
	  SC.TableColumn.create({
	    key:   'text',
	    label: 'Deed',
	    width: 300,
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
