{"filter":false,"title":"app.js","tooltip":"/js/app.js","undoManager":{"mark":46,"position":46,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["  $(\"#search\").keyup(function() {","    var search = $(this).val();","    console.log(search);","    $(\".demo-gallery img\").each(function() {","    console.log($(this).attr(\"alt\").search);","        var searchAttr = $(this).attr(\"alt\");","        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {","            $(this).show();","        } else {","            $(this).fadeOut();","        }","    });","});"],"id":1}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"remove","lines":["t"],"id":2}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"remove","lines":["l"],"id":3}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"remove","lines":["a"],"id":4}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["h"],"id":5}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["4"],"id":6}],[{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"remove","lines":["t"],"id":7}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"remove","lines":["l"],"id":8}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"remove","lines":["a"],"id":9}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["h"],"id":10}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["4"],"id":11}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"remove","lines":["4"],"id":12}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"remove","lines":["h"],"id":13}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["a"],"id":14}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["l"],"id":15}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":["t"],"id":16}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"remove","lines":["4"],"id":17}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"remove","lines":["h"],"id":18}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["a"],"id":19}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["l"],"id":20}],[{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["t"],"id":21}],[{"start":{"row":0,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":["$(\"#search\").keyup(function() {","    var search = $(this).val();","    console.log(search);","    $(\".demo-gallery img\").each(function() {","    console.log($(this).attr(\"alt\").search);","        var searchAttr = $(this).attr(\"alt\");","        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {","            $(this).show();","        } else {","            $(this).fadeOut();","        }","    });","});"],"id":76}],[{"start":{"row":0,"column":2},"end":{"row":12,"column":3},"action":"insert","lines":["$(\"#search\").keyup(function() {","    var search = $(this).val();","    console.log(search);","    $(\".galleryDiv img\").each(function() {","    console.log($(this).attr(\"alt\").search);","        var searchAttr = $(this).attr(\"alt\");","        if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1) {","            $(this).show();","        } else {","            $(this).fadeOut();","        }","    });","});"],"id":77}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["v"],"id":78}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["i"],"id":79}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":["D"],"id":80}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["y"],"id":81}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["r"],"id":82}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["e"],"id":83}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["l"],"id":84}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["l"],"id":85}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["a"],"id":86}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["g"],"id":87}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["d"],"id":88}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"],"id":89}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["m"],"id":90}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["o"],"id":91}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["-"],"id":92}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["f"],"id":93}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["f"],"id":94}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["g"],"id":95}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["a"],"id":96}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["l"],"id":97}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["l"],"id":98}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"],"id":99}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["r"],"id":100}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["y"],"id":101}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":20},"end":{"row":3,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":119,"mode":"ace/mode/javascript"}},"timestamp":1458237476988,"hash":"44aad512fa068fd18fd8ea2b39ba3b3aa8a68537"}