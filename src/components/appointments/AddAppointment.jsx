const AddAppointment = ()=>{
    return(
        <div className="card appointment-card">
            <h3>Book New Appointment</h3>

            <form className="appointment-form compact">
                <div className="form-row">
                    <div className="form-group">
                        <label>Patient</label>
                        <select>
                            <option>Select Patient</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Doctor</label>
                        <select>
                            <option>Select Doctor</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Appointment Date</label>
                        <input type="date" />
                    </div>

                    <div className="form-group align-end">
                        <button className="primary-btn">Book Appointment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddAppointment;