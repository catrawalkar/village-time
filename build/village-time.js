(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.vt = {}));
}(this, function (exports) { 'use strict';

    var json = [
    	{
    		name: "Mudsingi",
    		variations: {
    			name: [
    				"Mudshingi",
    				"Gadmudshingi"
    			]
    		}
    	},
    	{
    		name: "Khupire"
    	},
    	{
    		name: "Shahuwadi"
    	},
    	{
    		name: "Khutalwadi"
    	},
    	{
    		name: "Gorambe"
    	},
    	{
    		name: "Kenavade",
    		variations: {
    			name: [
    				"Kenawde"
    			]
    		}
    	},
    	{
    		name: "Ekondi"
    	},
    	{
    		name: "Chandgad"
    	},
    	{
    		name: "Tudiye"
    	},
    	{
    		name: "Kodali"
    	},
    	{
    		name: "Sonyachi shiroli"
    	},
    	{
    		name: "Olavan"
    	},
    	{
    		name: "Hebbal Jaldyal",
    		variations: {
    			name: [
    				"Hebbal-Jaldyal"
    			]
    		}
    	},
    	{
    		name: "Inchanal",
    		variations: {
    			name: [
    				"Inchnal"
    			]
    		}
    	}
    ];

    function getInfo(village){

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

    exports.getInfo = getInfo;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
