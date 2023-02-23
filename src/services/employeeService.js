const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId',
}

export const getDepartMentCollections = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertEmployee(data) {
    let employees = getAllEmployees();
    data["id"] = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) === null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));

    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    //map departmentID to department title
    let departments = getDepartMentCollections();
    return employees.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title // what here happen x.departmentId-1 it means id is greater by the 1 from actual index and depending on index it take title of department, then it clone the object using spread operator( it meas it take all x using ... and add then add  department:name and then return )
    }))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) === null) {
        localStorage.setItem(KEYS.employeeId, '0');
    }

    var id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}