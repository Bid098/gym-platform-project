
var cssId = 'generalcss';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link')
    {
        id = cssId,
        rel =  'stylesheet',
        type = 'text/css',
        href = 'css/general.css',
        media = 'all'
    };
    head.appendChild(link);
}

var cssId = 'tags.js';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link')
    {
        id = cssId,
        rel =  'stylesheet',
        type = 'script',
        href = 'js/framework/tag.js',
        media = 'all'
    };
    head.appendChild(link);
}

/*
let head = "";
let link = "";
let cssId = "CustomTags-SmartList-Prime-SmartList-MultiSelect-js";
if (!document.getElementById(cssId))
{
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('script');
    link.id = cssId;
    link.type = 'text/javascript',
    link.src = '../../../../../../../../../../../../../../../../../../../../../../../../../../../../../../CustomTags/SmartList/Prime-SmartList-MultiSelect.js'
    head.appendChild(link);
}
*/