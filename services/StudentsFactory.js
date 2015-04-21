studentRoster.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [];

    factory.addStudent = function(new_name) {
        var student = { name: new_name, permissionSlip: false};
        factory.students.push(student);
    };

    factory.deleteStudent = function(student) {
        var index = factory.students.indexOf(student);
        factory.students.splice(index, 1);
    };

    return factory;
});
