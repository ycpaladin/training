var controller = {
	name: 'qqq',
	controller($scope, ele) {
		$scope.name = 'kevin';
        // alert(ele); $('#xxx').on('click',function(){     $scope.name = 'ccw'; })

		setTimeout(function () {
			$scope.name = 'ccw';
		}, 3000);
	}
};

var Scope = function (ele) {
    // this.ele = ele;
	var template = ele.html();
	var watch = {};
	setInterval(function (self) {
		Object
            .keys(self)
            .forEach(function (key, index) {
	if (watch[key] !== self[key]) {
		watch[key] = self[key];
		self.refresh();
	}

});
	}, 0, this);

	this.refresh = function () {
		function compile(template) {
            // var evalExpr = /{{(.+?)%>/g; var expr = /}}([\s\S]+?)%>/g; template =
            // template     .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
            // .replace(expr, '`); \n $1 \n  echo(`');
            
			template = 'echo(`' + template + '`);';

			var script = `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${template}

    return output;
  })`;

			return script;
		}
		var parse = eval(compile(template));

		var result = parse(this);

		ele.html(result);
	};
};

(function init($, {name, controller}) {
	var ele = $(`[my-controller=${name}]`);
	controller(new Scope($(ele[0])), ele);
})(jQuery, controller);