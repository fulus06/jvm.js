jjvm.types.StackMapTable = function(className, methodName) {

	this.toJavaP = function() {
		var output = "\t\tEnclosingMethod:\r\n";
		output += "\t\t\t" + className + methodName;

		return output;
	};

	this.getData = function() {
		return table;
	};

	this.toString = function() {
		return "EnclosingMethod";
	};
};
