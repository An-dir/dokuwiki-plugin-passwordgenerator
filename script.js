function addBtnActionPasswordgenerator($btn, props, edid) {
    // base code for passwordgenerator was from https://jpvalappil.wordpress.com/2010/07/02/javascript-password-generator/

    var removeSelection = JSINFO.plugin_passwordgenerator_removeSelection,
        generator1Length = JSINFO.plugin_passwordgenerator_generator1Length;
	function generatePassword(type, plen){
	// content of spl again in regex some lines below!
    var lwrAlph = JSINFO.plugin_passwordgenerator_charset1,
        uprAlph = JSINFO.plugin_passwordgenerator_charset2,
        nums = JSINFO.plugin_passwordgenerator_charset3,
        spl = JSINFO.plugin_passwordgenerator_charset4,
        passwd = [],
        maxLen = 2048,        
        defLen = 10,
        minLen = 1;     
 
 
 
    /*Parameter Manipulations */
    type = type || "all";
    type = isNaN(type)?type.toLowerCase():"all";    
    plen = plen || defLen;
    plen = (plen < 0?defLen:(plen <= maxLen? (plen < minLen?defLen:plen): maxLen));
     
    /*Choosing the password source characters*/
    src = type === "alpha"? [lwrAlph, uprAlph]:type === "alphanum"?[lwrAlph, uprAlph, nums]:[lwrAlph, uprAlph, nums, spl];
    /*Password construction*/      
    for (var i = 0; i < plen; i++) {
        var rnd = Math.floor(Math.random() * src.length),
            charBuild = src[rnd].split("");          
		/*force only one special char*/
		if (rnd === 3) {src = [lwrAlph, uprAlph, nums]};
			rnd = Math.floor(Math.random() * charBuild.length);
        passwd.push(charBuild[rnd]);
    }
    return passwd.join("");
    }
 
 
 
    $btn.click(function() {
        // your click handler
	var opts;
    var selection = DWgetSelection(jQuery('#'+edid)[0]);


    // is something selected?
        sample = selection.getText();


        if (removeSelection===1) {
			opts = {nosel: true};
		} else {
			opts = {nosel: false};
		};

	// Generate password with atleast one of this chars and replace selection only not matching this expression
	while (sample.search(/[!@#$%*()_=+,.:]/) < 0) {
		sample = generatePassword('all',generator1Length);
}
    pasteText(selection,sample,opts);
        return false;
    });
 
    return 'click';
}
 
// add a new toolbar button, but first check if there is a toolbar
if (typeof window.toolbar !== 'undefined') {
    window.toolbar[window.toolbar.length] = {
        type: "passwordgenerator",
        title: "PWD: Generate or replace password regarding complexity requirements",
		key: "g",
        icon: "../../plugins/passwordgenerator/toolbaricon_password.png"
    };
}
