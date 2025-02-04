const ConfirmationBox = ({ selectedStudent, setIsConfirmBox, setIsSelected, setCurUser }) => {
    const [student, setStudent] = selectedStudent;

    const handleDelete = () => {
        console.log(student);
        setCurUser(prev => {
            const newStudentsList = prev.students.filter(curValue => curValue.id !== student.id);
            return { ...prev, students: newStudentsList }
        })
        setStudent({});
        setIsSelected(false);
        setIsConfirmBox(false);
    }

    return (
        <div id="confirm-background">
            <div id="confirm-box">
                <div id="conf-div1">
                    <i className="fa-solid fa-x" onClick={() => setIsConfirmBox(false)}></i>
                </div>
                <p>Do you want to delete this {student.role}?</p>
                <div id="confirm-buttons">
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={() => setIsConfirmBox(false)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationBox;