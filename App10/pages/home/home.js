(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            //WinJS.Utilities.query("a").listen("click", linkClickEventHandler, false); 
        
        }
        });

            //function linkClickEventHandler(eventInfo) {
            //    eventInfo.preventDefault();
            //    var link = eventInfo.target;
            //    WinJS.Navigation.navigate(link.href);
            //}

            

            $(document).ready(function () {
                $('#homebutton').hide();
                $('#homebutton').delay(1000).fadeIn('slow');
                $('#heading').hide();
                $('#heading').slideDown('slow');
                 $('#maincontainer').hide();
                $('#maincontainer').slideDown('slow');
              $('.catpics').hide();
               $('#descontainer').hide();
                $('#footbar').hide();
                $('.catpics').delay('150').fadeIn('slow');
                $('#descontainer').delay('350').fadeIn('slow');
                $('#footbar').show('slow').slideDown('slow');
                //$('.catpics').hover(function () { $('#pic1').attr('src', '\catpics\catbikes.png') });
                
                

                var descriparray = new Array(
                "Description: This category includes cars which are listed in no particular order and are selected on the basis of speed,design,performance,luxury,cost & type.<br /><br />Related categories: Bikes, Jets",
                "Description: This category includes bikes which are listed in no particular order and are selected on the basis of speed,design,performance,luxury,cost & type.<br /><br />Related categories: Cars, Jets",
                "Description: This category includes jets which are listed in no particular order and are selected on the basis of speed,design,performance,luxury,cost,capabilities & type.<br /><br />Related categories: Cars, Bikes, Weapons",
                "Description: This category includes games which are listed in no particular order and are selected on the basis of storyline,garphics,gameplay,controls,complexity & type.<br /><br />Related categories: ",
                "Description: This category includes movies which are listed in no particular order and are selected on the basis of genre,acting,directing,soundtracks,budget,storyline,graphics.<br /><br />Related categories: ",
                "Description: This category includes resorts which are listed in no particular order and are selected on the basis of location,luxury,budget & beauty.<br /><br />Related categories: Places, Beaches ",
                "Description: This category includes beaches which are listed in no particular order and are selected on the basis of location,beauty,facilities & uniqueness.<br /><br />Related categories: Resorts, Places",
                "Description: This category includes deadliest creatures which are listed in no particular order and are selected on the basis of uniqueness,strength,venomous,poisonous & degree of danger they possess.<br /><br />Related categories: Strange Creatures",
                "Description: This category includes strange creatures which are listed in no particular order and are selected on the basis of uniqueness,rarity & strangeness.<br /><br />Related categories: Deadliest Creatures",
                "Description: This category includes places which are listed in no particular order and are selected on the basis of location,landscape,facilities,uniqueness,luxury,budget & beauty.<br /><br />Related categories: Beaches, Resorts, Landscapes",
                "Description: This category includes landscapes which are listed in no particular order and are selected on the basis of beauty & location.<br /><br />Related categories: Beaches, Places, Resorts",
                "Description: This category includes weapons which are listed in no particular order and are selected on the basis of power,design,performance,cost,capabilities & type.<br /><br />Related categories: Jets"
                 );

                $('.catpics').on({
                    
                    'hover': function () { 
                        var sr = $(this).attr('src');
                        var dr = $(this).attr('alt');
                        $('#pic1').attr('src', sr);
                        $('#info').html(dr);
                        
                       
                        
                    }
                });

                $('.catpics').on({

                    'click': function () {
                        $('#maincontainer').hide('fast');
                        $('#descontainer').hide('fast');
                        var clickcat = $(this).attr('id');
                        //$('.container').fadeIn('slow');
                        //$('.container').show();
                        $('.container').css('visibility', 'visible');
                        
                        //$('#test2').html("hello");
                        //$('#test2').html(clickcat);
                        var captarray = [];
                        switch (clickcat){
                            case 'catcars':
                                var pikarray = [];
                                var captarray = [];
                                var count = 1;
                                $('.cars img').each(function (i, e) {
                                    //pikarray.push($(e).attr('src'));
                                    pikarray.push($(e).attr('src'));
                                    captarray.push($(e).attr('alt'));
                                    //$('#test2').html(pikarray[i]);
                                   // $('#slides').append(pikarray[i]);
                                    
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    $(pos).attr('alt', captarray[i]);
                                    $('#pikcaption').html(captarray[0]);
                                    //$(pos).css('max-width', '100%');
                                    //$(pos).css('max-height', '100%');
                                    //$(pos).height(528);
                                    count++;
                                    var ind = 0;
                                    $('#slides .slidesjs-next').on({

                                        'click': function () { ind++; if (ind > captarray.length-1) { ind = 0; } $('#pikcaption').hide().fadeIn('fast').html(captarray[ind]); }
                                    });
                                    $('#slides .slidesjs-previous').on({

                                        'click': function () { ind--; if (ind < 0) { ind = captarray.length + ind; } $('#pikcaption').html(captarray[ind]); }
                                    });
                                    

                                    //$('#slides img').each(function () {
                                    //    var maxWidth = 940; // Max width for the image
                                    //    var maxHeight = 528;    // Max height for the image
                                    //    var ratio = 0;  // Used for aspect ratio
                                    //    var width = $(this).width();    // Current image width
                                    //    var height = $(this).height();  // Current image height

                                    //    // Check if the current width is larger than the max
                                    //    if (width > maxWidth) {
                                    //        ratio = maxWidth / width;   // get ratio for scaling image
                                    //        $(this).css("width", maxWidth); // Set new width
                                    //        $(this).css("height", height * ratio);  // Scale height based on ratio
                                    //        height = height * ratio;    // Reset height to match scaled image
                                    //        width = width * ratio;    // Reset width to match scaled image
                                    //    }

                                    //    // Check if current height is larger than max
                                    //    if (height > maxHeight) {
                                    //        ratio = maxHeight / height; // get ratio for scaling image
                                    //        $(this).css("height", maxHeight);   // Set new height
                                    //        $(this).css("width", width * ratio);    // Scale width based on ratio
                                    //        width = width * ratio;    // Reset width to match scaled image
                                    //    }
                                    //});

                                    
                                   

                                });

                                
                                break;
                            case 'catbikes':
                                var pikarray = [];
                                var captarray = [];
                                var count = 1;
                                $('.bikes img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    captarray.push($(e).attr('alt'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    $(pos).attr('alt', captarray[i]);
                                    $('#pikcaption').html(captarray[0]);
                                    count++;

                                    var ind = 0;
                                    $('#slides .slidesjs-next').on({

                                        'click': function () { ind++; if (ind > captarray.length-1) { ind = 0; } $('#pikcaption').hide().fadeIn('fast').html(captarray[ind]); }
                                    });
                                    $('#slides .slidesjs-previous').on({

                                        'click': function () { ind--; if (ind < 0) { ind = captarray.length + ind; } $('#pikcaption').html(captarray[ind]); }
                                    });

                                });
                                break;

                            case 'catjets':
                                var pikarray = [];
                                var count = 1;
                                $('.jets img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    captarray.push($(e).attr('alt'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    $(pos).attr('alt', captarray[i]);
                                    $('#pikcaption').html(captarray[0]);
                                    count++;

                                    var ind = 0;
                                    $('#slides .slidesjs-next').on({

                                        'click': function () { ind++; if (ind > captarray.length - 1) { ind = 0; } $('#pikcaption').hide().fadeIn('fast').html(captarray[ind]); }
                                    });
                                    $('#slides .slidesjs-previous').on({

                                        'click': function () { ind--; if (ind < 0) { ind = captarray.length + ind; } $('#pikcaption').html(captarray[ind]); }
                                    });

                                });
                                break;
                            case 'catgames':
                                var pikarray = [];
                                var count = 1;
                                $('.games img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    captarray.push($(e).attr('alt'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    $(pos).attr('alt', captarray[i]);
                                    $('#pikcaption').html(captarray[0]);
                                    count++;

                                    var ind = 0;
                                    $('#slides .slidesjs-next').on({

                                        'click': function () { ind++; if (ind > captarray.length - 1) { ind = 0; } $('#pikcaption').hide().fadeIn('fast').html(captarray[ind]); }
                                    });
                                    $('#slides .slidesjs-previous').on({

                                        'click': function () { ind--; if (ind < 0) { ind = captarray.length + ind; } $('#pikcaption').html(captarray[ind]); }
                                    });
                                });
                                break;
                            case 'catmovies':
                                var pikarray = [];
                                var count = 1;
                                $('.movies img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catresorts':
                                var pikarray = [];
                                var count = 1;
                                $('.resorts img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catbeaches':
                                var pikarray = [];
                                var count = 1;
                                $('.beaches img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catdeadliestcreatures':
                                var pikarray = [];
                                var count = 1;
                                $('.deadliestcreatures img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catstrangecreatures':
                                var pikarray = [];
                                var count = 1;
                                $('.strangecreatures img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catplaces':
                                var pikarray = [];
                                var count = 1;
                                $('.places img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catlandscapes':
                                var pikarray = [];
                                var count = 1;
                                $('.landscapes img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;
                            case 'catweapons':
                                var pikarray = [];
                                var count = 1;
                                $('.weapons img').each(function (i, e) {
                                    pikarray.push($(e).attr('src'));
                                    var pos = '#pos' + count;
                                    $(pos).attr('src', pikarray[i]);
                                    count++;
                                });
                                break;

                            default:

                        }


                    }
                });

                


            });
       
             
})();
