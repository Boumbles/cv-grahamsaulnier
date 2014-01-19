function position( company , city , job, dates, blob, link, list ){
    var output = '';

    output += '<div class="row" style="padding: 35px 0 4px 0;">';
    output += '<div class="span8"><h4 style="margin: 0">' + company;

    if( link.length > 0){
        output += '<a href="' + link + '" target="_BLANK">&nbsp;&nbsp;&nbsp;<span class="badge">  Website <i class="icon-arrow-right icon-white"></i></span></a>';
    }
    output += '</h4>';
    output += '</div>';
    output += '<div class="span4">';
    output += '<h4 class="pull-right hidden-phone" style="margin: 0">' + city + '</h4>';
    output += '</div>';
    output += '</div>';  // <!-- end row-->
    output += '<div class="row">';
    output += '<div class="span6">';
    output += '<span style="font-style:italic; font-size: 15px;">' + job + '</span>';
    output += '</div>';
    output += '<div class="span6">';
    output += '<span class="visible-phone label">' + dates + '</span>';
    output += '<span class="hidden-phone pull-right" style="font-style:italic; font-size: 15px;" >' + dates + '</span>';
    output += '</div>';
    output += '</div>';  // ends row

    if( blob.length > 0 ){
        output += '<div class="row" style="padding-top: 8px;">';
        output += '<div class="span12">';
        output += '<ul>';

        if( list == 1 ){
            for( var i = 0 ; i <= blob.length - 1 ; i++ ){
                output += '<li><span style="font-weight: bold">' + blob[i][0] + ': </span>';
                var liSize = blob[i][1].length - 1;

                for( var j = 0 ; j <= liSize ; j++ ){
                    if( j < liSize ){
                        output += blob[i][1][j] + ', ';
                    }
                    else{
                        output += blob[i][1][liSize];
                    }
                };
                output += '</li>';
            };
        }
        else{
            for( var i = 0 ; i <= blob.length - 1 ; i++ ){
                output += '<li><span style="font-weight: bold">' + blob[i] + '</span></li>';
            };
        }
    output += '</ul></div></div>'; // end row
    }

    document.write( output );
    document.close();
}

function skillShow( skill, percent ){
    var output = '';

    output += '<div class="row"><div class="span1"';
    output += '<p><h7 style="text-align: left" ">' + skill + '</h7></p>';
    output += '<p><span class="badge visible-phone" style="text-align: center">' + skill + '</span></p></div>';
    output += '<div class="span4"><div class="progress" style="margin: px 0 10px 0; height: 22px;">';
    output += '<div class="bar" style="width:' + percent +'%;"></div></div></div>';
    output += '<p><h7 style="text-alien: left">' + percent / 10 + '</h7></p>';
    output += '<div class="span1"></div></div>';

    document.write( output );
    document.close();
}

function extra( title, blob ){
    var output = '';

    output += '<div class="row" style="padding-top:30px"><div class="span3">';
    output += '<span class="pull-right hidden-phone"><strong>' + title + '</strong></span>';
    output += '<span class="visible-phone badge">' + title + '</span></div>';
    output += '<div class="span5">' + blob + '</div></div>';

    document.write( output );
    document.close();
}

function project( name, liveLink, code ){
    var output = '';

    output += '<li style="padding-top: 12px">';

    if( liveLink.length > 0 ){
        output += '<a href="' + liveLink + '" target="_BLANK" >' + name + '</a>';
    }
    else {
        output += name;
    }

    if( code.length > 0 ){
        output += '<a href="' + code + '" target="_BLANK"">&nbsp;&nbsp;&nbsp;<span class="badge badge-info">Code <i class="icon-arrow-right icon-white"></i></span></a>';
    }
    output += '</li>';

    document.write( output );
    document.close();
}