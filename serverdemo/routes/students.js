var express = require('express');
var router = express.Router();

class Student {
    constructor(name, studId) {
        this.name = name;
        this.studId = studId;
    }
}

const stud1 = new Student("Owen", 123);
const stud2 = new Student("James", 456);
const stud3 = new Student("Susan", 789);
var studList = [stud1, stud2, stud3];


router.get('/', function (req, res, next) {
    res.send(studList);
});

router.get('/:id', function (req, res, next) {
    var found = false;
    studList.forEach(item => {
        if (item.studId == req.params.id) {
            res.send(item)
            found = true;
        }
    })
    if (!found) {
        res.send("Student not Found");
    }
});

router.post('/:id/:name', function (req, res, next) {
    var found = false;
    studList.forEach(item => {
        if (item.studId == req.params.id) {
            res.send("Must Assign Unique ID");
            found = true;
        }
    });
    if (!found) {
        const stud = new Student(req.params.name, req.params.id);

        studList.push(stud);
        res.send("Student added.\nid: " + req.params.id + "\nname: " + req.params.name);
    }
});

router.put('/:id/:name', function (req, res, next) {
    var replaced = false;
    studList.forEach(item => {
        if (item.studId == req.params.id) {
            item.name = req.params.name;
            res.send("Updated Student Profile.\nid: " + item.studId + "\nname: " + item.name);
            replaced = true;
        }
    });
    if (!replaced) {
        const stud = new Student(req.params.name, req.params.id);

        studList.push(stud);
        res.send("Student added:\nid: " + req.params.id + "\nname: " + req.params.name);
    }
});

router.delete('/:id', function (req, res, next) {
    var found = false;
    studList.forEach(item => {
        if (item.studId == req.params.id) {
            const index = studList.indexOf(item);
            studList.splice(index, 1);
            res.send("Deleted student: \nid: " + item.studId + "\nname: " + item.name);
            found = true;
        }
    });
    if (!found) {
        res.send("Error: Student found, cannot delete.");
    }
});





module.exports = router;
