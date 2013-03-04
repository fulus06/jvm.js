
describe("jjvm.runtime.ObjectReference test", function () {
	var source = [
		0xca, 0xfe, 0xba, 0xbe, 0x00, 0x00, 0x00, 0x32,
		0x00, 0x0f, 0x0a, 0x00, 0x03, 0x00, 0x0c, 0x07,
		0x00, 0x0d, 0x07, 0x00, 0x0e, 0x01, 0x00, 0x03,
		0x66, 0x6f, 0x6f, 0x01, 0x00, 0x01, 0x49, 0x01,
		0x00, 0x06, 0x3c, 0x69, 0x6e, 0x69, 0x74, 0x3e,
		0x01, 0x00, 0x03, 0x28, 0x29, 0x56, 0x01, 0x00,
		0x04, 0x43, 0x6f, 0x64, 0x65, 0x01, 0x00, 0x0f,
		0x4c, 0x69, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62,
		0x65, 0x72, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x01,
		0x00, 0x0a, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65,
		0x46, 0x69, 0x6c, 0x65, 0x01, 0x00, 0x12, 0x53,
		0x69, 0x6d, 0x70, 0x6c, 0x65, 0x45, 0x78, 0x61,
		0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x6a, 0x61, 0x76,
		0x61, 0x0c, 0x00, 0x06, 0x00, 0x07, 0x01, 0x00,
		0x0d, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x45,
		0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x01, 0x00,
		0x10, 0x6a, 0x61, 0x76, 0x61, 0x2f, 0x6c, 0x61,
		0x6e, 0x67, 0x2f, 0x4f, 0x62, 0x6a, 0x65, 0x63,
		0x74, 0x00, 0x21, 0x00, 0x02, 0x00, 0x03, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x04, 0x00,
		0x05, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
		0x06, 0x00, 0x07, 0x00, 0x01, 0x00, 0x08, 0x00,
		0x00, 0x00, 0x1d, 0x00, 0x01, 0x00, 0x01, 0x00,
		0x00, 0x00, 0x05, 0x2a, 0xb7, 0x00, 0x01, 0xb1,
		0x00, 0x00, 0x00, 0x01, 0x00, 0x09, 0x00, 0x00,
		0x00, 0x06, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
		0x00, 0x01, 0x00, 0x0a, 0x00, 0x00, 0x00, 0x02,
		0x00, 0x0b
	];

	beforeEach(function() {
		var compiler = new jjvm.compiler.Compiler();
		compiler.compileBytes(source);
	});

	it("should enforce fields not existing", function () {
		var classDef = jjvm.core.ClassLoader.loadClass("java.lang.Object");
		var objectRef = new jjvm.runtime.ObjectReference(classDef);

		expect(_.bind(objectRef._hasField, objectRef, "nonExistent")).toThrow();
	});

	it("should enforce field existing", function () {
		var compiler = new jjvm.compiler.Compiler();
		compiler.compileBytes(source);

		var classDef = jjvm.core.ClassLoader.loadClass("SimpleExample");
		var objectRef = new jjvm.runtime.ObjectReference(classDef);

		expect(_.bind(objectRef._hasField, objectRef, "foo")).not.toThrow();
	});
});
