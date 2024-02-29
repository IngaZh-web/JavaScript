const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {
 res = allStudents.filter(item => !failedStudents.includes(item));
 console.log('res: ', res);
 
}
filter(allStudents, failedStudents)


