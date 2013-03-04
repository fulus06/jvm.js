jjvm.types.ConstantPoolClassValue = function(index, constantPool) {

	this.getValue = function() {
		return constantPool.load(index).getValue();
	};

	this.getClassDef = function() {
		var className = this.getValue();
		className = className.replace(/\//g, ".");

		if(jjvm.types.Primitives[className]) {
			className = jjvm.types.Primitives[className];
		}

		return jjvm.core.ClassLoader.loadClass(className);
	};

	this.toString = function() {
		return "class\t\t#" + index + ";\t\t//\t" + this.getValue();
	};
};
