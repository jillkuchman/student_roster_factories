studentRoster.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [];

    factory.addStudent = function(new_name, new_teacher) {
        var student = { name: new_name, permissionSlip: false, teacher: new_teacher};
        factory.students.push(student);
    };

    factory.deleteStudent = function(student) {
        var index = factory.students.indexOf(student);
        factory.students.splice(index, 1);
    };

    return factory;
});
