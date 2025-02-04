
const data = ["Name", "Age", "Email", "Role", "Github", "Parent Facebook", "Student Facebook", "Group", "Speed", "Github Last Update"];

const StudentInfo = ({ setIsSelected, setIsInfo, student, setIsConfirmBox }) => {

    return (
        <div className="student-info">
            <div className="info-header">
                <div>
                    <h2>Info Student <span>{student.fullname}</span></h2>
                    <i className="fa-solid fa-x" onClick={() => setIsSelected(false)}></i>
                </div>
                <div>
                    <p>Get Student information here.</p>
                    <button className="green-btn" onClick={() => setIsInfo(false)}>Edit</button>
                </div>
            </div>
            <div className="border-div"></div>
            <div>
                <p style={{fontSize: "14px", fontWeight: "900", color: "#94a3b8", marginBottom: "5px"}}>Student info</p>
                <div className="info">
                    <p>Leader ID</p>
                    <p>{student.leaderId}</p>
                </div>
            </div>
            <div className="border-div"></div>
            {/* {
                Object.keys(student).map((curValue, index) => {
                    if(curValue !== "id") {
                        if(curValue in ["studentLink", "github", "parentLink"]) {
                            return (
                                <>
                                    <div key={student.curValue} className="info">
                                        <p>{data[index]}</p>
                                        <p className="links"><a href={student[curValue]} target="_blank">{data[index]}</a></p>
                                    </div>
                                    <div className="border-div"></div>
                                </>
                            );
                        }
    
                        return (
                            <>
                                <div key={student.curValue} className="info">
                                    <p>{data[index]}</p>
                                    <p>{student[curValue]}</p>
                                </div>
                                <div className="border-div"></div>
                            </>
                        );
                    }

                })
            } */}
            <div className="info">
                <p>Name</p>
                <p>{student.fullname}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Age</p>
                <p>{student.age}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Email</p>
                <p>{student.email}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Role</p>
                <p>{student.role}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Github</p>
                <p className="links"><a href={student.github} target="_blank">Github</a></p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Parent Facebook</p>
                <p className="links"><a href={student.parentLink} target="_blank">Parent</a></p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Student Facebook</p>
                <p className="links"><a href={student.studentLink} target="_blank">Student</a></p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Group</p>
                <p>{student.group}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Speed</p>
                <p>{student.speed}</p>
            </div>
            <div className="border-div"></div>
            <div className="info">
                <p>Github Last Update</p>
                <p>{student.lastUpdate}</p>
            </div>
            <button className="delBtn" onClick={() => setIsConfirmBox(true)}>Delete Student</button>
        </div>
    );
}

export default StudentInfo;