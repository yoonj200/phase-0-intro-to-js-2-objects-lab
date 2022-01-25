// Write your solution in this file!

let employee = {
    name: '',
    streetAddress: '',
};

/* updateEmployeeWithKeyAndValue(employee, key, value)
    1) returns an employee with original key value pairs and new key value pair
    2) it does not modify the original employee, but returns a clone with the new data */
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value});
}

/* destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
    3) updates `employee` with given `key` and `value` (destructive) and returns entire updated employee */
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return Object.assign({}, employee, {[key]:value});
}

/* deleteFromEmployeeByKey(employee, key)
    4) deletes `key` from a clone of employee and returns new employee (non-destructive)
    5) does not modify original employee (non-destructive) */
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

/* destructivelyDeleteFromEmployeeByKey(employee, key)
      6) returns employee without deleted key/value pair
      7) modifies original employee */
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}