export default function Employee(props)
{   
    const{name,salary,id}=props;
    return <h1> Employee Id : {id} and Employee Name : {name} ; EmployeeSalary is : {salary} </h1>
}