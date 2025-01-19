import { useState } from 'react';
import StudentInfo from "./StudentInfo.jsx";
import EditStudentInfo from './EditStudentInfo.jsx';
import { useNavigate } from 'react-router-dom';

const columns = ["Role", "Name", "Age", "Emai", "Student FB", "Last Update", "Github", "Speed", "Group", "LeaderId", "Parent FB"];

const Students = ({ curUserList }) => {
    const [curUser, setCurUser] = curUserList;
    const [isSelected, setIsSelected] = useState(false); 
    const [student, setStudent] = useState({}); // სხვა კომპონენტვისთვის გადასაცემად(არჩეული მოსწავლის ობიექტი)
    const [isInfo, setIsInfo] = useState(true);
    const [searchStudent, setSearchStudent] = useState("");
    const navigate = useNavigate();

    const handleLogOut = () => {
        setCurUser({});
        navigate("/authorization");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullname = e.target.fullname.value;

        e.target.reset();

        const newStudent = {
            id: Date.now(),
            role: "Student",
            fullname,
            age: 20,
            email: "johndoe@example.com",
            studentLink: "#",
            lastUpdate: "2023-01-01",
            github: "#",
            speed: 2,
            group: 99,
            leaderId: "123333333333333333333333",
            parentLink: "#"
        }

        setCurUser(prev => ({ ...prev, students: [...prev.students, newStudent] }));
    }

    const handleClick = (student) => {
        setIsSelected(true);
        setStudent(student);
    }

    const handleChange = ({ target }) => {
        setSearchStudent(target.value.toLowerCase());
    }

    return (
        <div id="students">
            <header>
                <div id="profile">
                    <div id="short-name">
                        <p>{`${curUser.firstname[0]}${curUser.lastname[0]}`}</p>
                    </div>
                    <div id="profile-info">
                        <p>{`${curUser.firstname} ${curUser.lastname}`}</p>
                        <p style={{fontSize:"12px", fontWeight: "400"}}>{curUser.email}</p>
                    </div>
                </div>
                <button onClick={handleLogOut}>Log out</button>
            </header>
            <div className="border-div"></div>
            <div className="inputs">
                <input type="text" onChange={handleChange} name="fullname" maxLength="25" placeholder="student name..." />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullname" maxLength="25" placeholder="add student" required />
                    <button>Add Student</button>
                </form>
            </div>
            
            <main id="students-name">
                <h1>all <i className="fa-solid fa-chevron-right"></i> students <i className="fa-solid fa-chevron-right"></i> {
                    `${curUser.firstname} ${curUser.lastname}`
                }</h1>
                <section id="students-section">
                    <table>
                        <thead>
                            <tr>
                                {
                                    columns.map((curValue, index) => <th key={index}>{curValue}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [...(searchStudent === "" ? curUser.students : 
                                curUser.students.filter(curValue => curValue.fullname.slice(0, searchStudent.length).toLowerCase() === searchStudent))]
                                .map((curValue, index) => {
                                    return (
                                        <tr key={index} className="student" onClick={() => handleClick(curValue)}>
                                            <td><button>{curValue.role}</button></td>
                                            <td>{curValue.fullname}</td>
                                            <td>
                                                <div className="td-border">
                                                    <p>{curValue.age}</p>
                                                </div>
                                            </td>
                                            <td>{curValue.email}</td>
                                            <td className="links"><a href={curValue.studentLink} target="_blank">Facebook</a></td>
                                            <td>{curValue.lastUpdate}</td>
                                            <td className="links"><a href={curValue.github} target="_blank">github Link</a></td>
                                            <td>
                                                <div className="td-border">
                                                    <p>{curValue.speed}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="td-border">
                                                    <p>{curValue.group}</p>
                                                </div>
                                            </td>
                                            <td className="links"><a href={curValue.leaderId} target="_blank">leaderID</a></td>
                                            <td className="links"><a href={curValue.parentLink} target="_blank">parenLink</a></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
            {    
                isInfo ? isSelected && <StudentInfo setIsSelected={setIsSelected} setIsInfo={setIsInfo} selectedStudent={[student, setStudent]}
                setCurUser={setCurUser} />:
                isSelected && <EditStudentInfo setIsSelected={setIsSelected} setIsInfo={setIsInfo} selectedStudent={[student, setStudent]}
                setCurUser={setCurUser} />
            }
        </div>
    );
}

export default Students;