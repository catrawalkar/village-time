import json from "./data/variations.json"

export default function getInfo(village){

    // type = type ? type : getType(village);

    var out = json.filter(function(d){
        
        return (d.name == village || d.name == village.toUpperCase()) || (d.variations && d.variations.name && (d.variations.name.indexOf(village) !== -1 || d.variations.name.indexOf(village.toUpperCase()) != -1));
    });

    if (out.length > 0){
        return out[0];
    } else {
        var obj = {};
        obj.name = village;
        obj.warning = "No match in library";
        return obj;
    }
}