var margin = {top: 30, right: 50, bottom: 30, left: 50};
var innerWidth = 960 - margin.left - margin.right;
var innerHeight = 500 - margin.top - margin.bottom;

var g = d3.select("svg")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var word_frequency_list = 
[
{"text":"study","size":40},
{"text":"motion","size":15},
{"text":"forces","size":10},
{"text":"electricity","size":15},
{"text":"movement","size":10},
{"text":"relation","size":5},
{"text":"things","size":10},
{"text":"force","size":5}
];

var noun_list = 
[
{"text":"study","size":40},
{"text":"motion","size":15},
{"text":"forces","size":10},
{"text":"electricity","size":15},
{"text":"movement","size":10},
{"text":"relation","size":5},
{"text":"things","size":10},
{"text":"force","size":5}

];

/*var color = d3.scaleLinear()
        .domain([0,1,2,3,4,5,6,10,15,20,100])
        .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);
*/

var labels= ['All','Noun','Verb'];
var color = d3.scaleOrdinal(d3.schemeCategory20b); 


d3.layout.cloud().size([800, 300])
    .words(type_list)
    .rotate(0)
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();

function draw(words) {
  g.append("g")
    .attr("width", 850)
    .attr("height", 350)
    .attr("class", "wordcloud")
    .append("g")
    // without the transform, words words would get cutoff to the left and top, they would
    // appear outside of the SVG area
    .attr("transform", "translate(320,200)")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function(d) { return d.size + "px"; })
    .style("fill", function(d, i) { return color(i); })
    .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function(d) { return d.text; });
}

                                
