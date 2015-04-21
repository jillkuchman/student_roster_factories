studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.addStudent = function(){
        var name = $scope.studentName;
        var teacher = $scope.studentTeacher;
        StudentsFactory.addStudent(name, teacher);
        $scope.studentName = null;
        $scope.studentTeacher = null;
    };

    $scope.deleteStudent = function(student) {
        StudentsFactory.deleteStudent(student);
    };

});
