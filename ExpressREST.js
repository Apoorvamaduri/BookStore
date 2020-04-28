var express = require("express");
var expapp=express();
var fsref=require('fs')
var movieslist=[{Title:'Ala Vaikuntapuramlo',YearOfRelease:2020},
{Title:'unbeatables',YearOfRelease:2019},
{Title:'Deva',YearOfRelease:2019}
];

function getMovies(request,response){
    response.json(movieslist);


}
function display(request,response){
    console.log("Displaying Movies.....")
    fsref.readFile('movies.html',function(err,data){
        if(err){
            console.error("Unable to open file...")
        }else{
            var filedata=data.toString();
            response.send(filedata)
        }
    })
}

function getMovie(request,response){
    var movieyear=request.params.year;
    for(i=0;i<movieslist.length;i++){
        var movie=movieslist[i];
        if(movie.YearOfRelease=="2020"){
            var str='<html><body><b>Movie Title</b>&nbsp;'+movie.Title+'</b>';
            str+='<br><br>Year</b>&nbsp;'+movie.YearOfRelease+'</b><br>';

        }
        str+='</body<</html>';
    }
    response.send(str);

}

expapp.get('/getMovies',getMovies)
expapp.get('/display',display)
expapp.get('/getMovie/:year',getMovie)
expapp.listen(8081,function(){
    console.log("Server running on port umber 8081");
})