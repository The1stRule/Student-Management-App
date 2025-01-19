import { useEffect, useState } from 'react';

const EditStudentInfo = ({ setIsSelected, setIsInfo, selectedStudent, setCurUser }) => {

    const [student, setStudent] = selectedStudent;
    const [studetnInfo, setStudentInfo] = useState({...student});

    useEffect(() => {
        setStudentInfo({...student});
    }, [student])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setStudentInfo(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCurUser(prev => {
            const newStudentsList = [];

            for(const student of prev.students) {
                if(student.id === studetnInfo.id) {
                    newStudentsList.push(studetnInfo);
                } else {
                    newStudentsList.push(student);
                }
            }

            console.log(newStudentsList);

            return { ...prev, students: newStudentsList };
        })

        setStudent(studetnInfo);
    }

    return (
        <div className="student-info">
            <div className="info-header">
                <div>
                    <h2>Edit Student <span>{student.fullname}</span></h2>
                    <i className="fa-solid fa-x" onClick={() => setIsSelected(false)}></i>
                </div>
                <div>
                    <p style={{fontSize: "11px"}}>Make changes to your profile here. Click save when you're done.</p>
                    <button className="green-btn" onClick={() => setIsInfo(true)}>Info</button>
                </div>
            </div>
            <div className="border-div"></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="info">
                        <p>Leader ID</p>
                        <input type="text" name="leaderId" maxLength="24" onChange={handleChange} value={studetnInfo.leaderId} required />
                    </div>
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Name</p>
                    <input type="text" name="fullname" maxLength="25" onChange={handleChange} value={studetnInfo.fullname} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Age</p>
                    <input type="number" name="age" max="99" min="0" onChange={handleChange} value={studetnInfo.age} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Email</p>
                    <input type="email" name="email" maxLength="25" onChange={handleChange} value={studetnInfo.email} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Role</p>
                    <input type="text" name="role" maxLength="10" onChange={handleChange} value={studetnInfo.role} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Github</p>
                    <input type="text" name="github" maxLength="35" onChange={handleChange} value={studetnInfo.github} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Parent Facebook</p>
                    <input type="text" name="parentLink" maxLength="50" onChange={handleChange} value={studetnInfo.parentLink} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Student Facebook</p>
                    <input type="text" name="studentLink" maxLength="50" onChange={handleChange} value={studetnInfo.studentLink} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Group</p>
                    <input type="number" name="group" max="100" min="0" onChange={handleChange} value={studetnInfo.group} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Speed</p>
                    <input type="number" name="speed" max="8" min="1" onChange={handleChange} value={studetnInfo.speed} required />
                </div>
                <div className="border-div"></div>
                <div className="info">
                    <p>Github Last Update</p>
                    <input type="text" name="lastUpdate" maxLength="10" onChange={handleChange} value={studetnInfo.lastUpdate} required />
                </div>
                <button className="green-btn">Save Changes</button>
            </form>
        </div>
    );
}

export default EditStudentInfo;