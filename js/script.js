

      document.getElementById('EstForm').addEventListener 
                            ('submit', estimateTotal);
         function estimateTotal(event) {
        event.preventDefault();
//    ***** INITIALISING THE VARIABLES******
var artSize = document.getElementById('art_size').value, 
      artQty = parseInt(document.getElementById('art_qty').value, 10),
      sepSize = document.getElementById('sep_size').value, 
      // sepColors = document.getElementById('sep_colors').value, 
      sepCost = parseFloat(document.getElementById('sep_cost').value, 10), 
      plateCost= parseFloat(document.getElementById('plate_cost').value, 10), 
      paperType = document.getElementById('paper_type').value, 
      paperCost = parseFloat(document.getElementById('paper_cost').value, 10), 
      printerType = document.getElementById('printer_type').value, 
      printCost = parseFloat(document.getElementById('print_cost').value, 10);
// *********VALIDATING********
if( artSize === "") {

      alert ('please select the art size');
      document.getElementById('art_size').focus();
     }
if( artQty <=0 || isNaN (artQty)) {

      alert ('Please enter a valid art quantity');
         document.getElementById('art_qty').focus();
     }

if( sepSize === "") {

      alert ('please select the size of the separation');
      document.getElementById('sep_size').focus();
     }
// if( sepColors === "") {
//       alert ('please select number of colours');
//       document.getElementById('sepColors').focus();
//      }
if( sepCost <=0 || isNaN (sepCost)) {

      alert ('Please enter a valid separation cost');
       document.getElementById('sep_cost').focus();
     }

if( plateCost <=0 || isNaN (plateCost)) {

      alert ('Please enter a valid cost of plate');
       document.getElementById('plate_cost').focus();
     }
if( paperType === "") {

      alert ('please select the paper type');
       document.getElementById('paper_type').focus();
     }
if( paperCost <=0 || isNaN (paperCost)) {

      alert ('Please enter a valid unit cost of paper');
       document.getElementById('paper_cost').focus();
     }
if( printerType === "") {

      alert ('please select the printer type');
       document.getElementById('printer_type').focus();
     }

if( printCost <=0 || isNaN (printCost)) {

      alert ('Please enter a valid cost of impression');
       document.getElementById('print_cost').focus();
     }  
 //****** tcsp = Total Cost of Separation and Plate*****
     var tcsp = sepCost + plateCost; 
     var npc = 0;   // npc = Number of Papers or Cards
      // When Artwork size is A5 and printed on Nigeria Size

    if ((artSize === "a5") && (paperType === "nig_size") ) {
      npc = artQty / 16;  // npc = Number of Papers or Cards
    }
        // When Artwork size is A5 and printed on 30X40

    if ((artSize === "a5") && (paperType === "30X40") ) {

      npc = artQty / 20;
  
    }
 // When Artwork size is A4 and printed on Nigeria Size

 if ((artSize === "a4") && (paperType === "nig_size") ) {

      npc = artQty / 8;
    }
        // When Artwork size is A4 and printed on 30X40
 if ((artSize === "a4") && (paperType === "30X40") ) {
      npc = artQty / 10;
  
    }
 // When Artwork size is A3 and printed on Nigeria Size
 if ((artSize === "a3") && (paperType === "nig_size") ) {
      npc = artQty / 4; 
    }
    // When Artwork size is A3 and printed on 30X40
if ((artSize === "a3") && (paperType === "30X40") ) {
      npc = artQty / 5;
    }
    // When Artwork size is A2 and printed on Nigeria Size
if ((artSize === "a2") && (paperType === "nig_size") ) {
      npc = artQty / 2; 
    }
     // When Artwork size is A2 and printed on 30X40
if ((artSize === "a2") && (paperType === "30X40") ) {
     npc = artQty / 2;
    }
      // *******tcpc =Total Cost of Paper or Card****
var tcpc = npc * paperCost;
    // *********CI =Total Cost of Impression *******
    var impressionQty;  // INITIALISING IMPRESSION QTY VARIABLE
    //......WHEN SEPARATION SIZE IS A2 AND THE PAPER TYPE IS NIGERIA SIZE***
   if ((sepSize === "a2") && (paperType === "nig_size") ) {
       impressionQty = npc * 2;
       }  
    //......WHEN SEPARATION SIZE IS A2 AND THE PAPER TYPE IS 30 X 40 ***
if ((sepSize === "a2") && (paperType === "30X40") ) {
       impressionQty = npc * 2;
       }  
    //......WHEN SEPARATION SIZE IS A3 AND THE PAPER TYPE IS NIGERIA SIZE***
if ((sepSize === "a3") && (paperType === "nig_size") ) {
     impressionQty = npc * 4;
       }  
    //......WHEN SEPARATION SIZE IS A3 AND THE PAPER TYPE IS 30 X 40 ****
if ((sepSize === "a3") && (paperType === "30X40") ) {
       impressionQty = npc * 5;
       }  
    //......WHEN SEPARATION SIZE IS A4 AND THE PAPER TYPE IS NIGERIA SIZE****
if ((sepSize === "a4") && (paperType === "nig_size") ) {
       impressionQty = npc * 8;
       }  
    //......WHEN SEPARATION SIZE IS A4 AND THE PAPER TYPE IS 30 X 40 ****
if ((sepSize === "a4") && (paperType === "30X40") ) {
       impressionQty = npc * 10;
       }  
    //......WHEN SEPARATION SIZE IS A5 AND THE PAPER TYPE IS NIGERIA SIZE***
if ((sepSize === "a5") && (paperType === "nig_size") ) {
       impressionQty = npc * 16;
       }  
    //......WHEN SEPARATION SIZE IS A5 AND THE PAPER TYPE IS 30 X 40 ****
if ((sepSize === "a5") && (paperType === "30X40") ) {
       impressionQty = npc * 20;
       }  
          var fromQty = 1001,    // lower limit for impression range 0 - 1000, 1001 - 2000 etc
        toQty = 1000,      // upper limit for impression range 0 - 1000, 1001 - 2000 etc
        variableQty = 10000,  // counter for looping to calculate any possible qty!
        printInitialCost = printCost,
        totalPrintCost,
        impressionQty;
        for (var i = 0; i < variableQty; i++) {
          if (impressionQty >= (i * fromQty) && impressionQty<= ((i + 1) * toQty)) {
              totalPrintCost = ((i + 1) * printInitialCost);
   };
          };

var grandTotal = tcsp + tcpc + totalPrintCost
     document.getElementById('txt-estimate').value = 'GHc ' + grandTotal;
         document.getElementById('results').innerHTML = "Sep & Plate: GHc " + tcsp + "</br>" ;
          document.getElementById('results').innerHTML += "Paper/card: GHc " + tcpc + "</br>";
          document.getElementById('results').innerHTML += "Impression: GHc " + tcsp + "</br>";
         document.getElementById('results').innerHTML += "Grand Total: GHc " + grandTotal;
           }
