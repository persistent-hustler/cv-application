/* eslint-disable react/prop-types */
function Form({handler}) {
    
    return (
        <form>
            <fieldset>
                <legend>General Information</legend>
                <label htmlFor="name">Name
                    <input type="text" id="name"/>
                </label>
                <label htmlFor="email">Email
                    <input type="email" id="email"/>
                </label>
                <label htmlFor="phone">Phone Number
                    <input type="number" id="phone"/>
                </label>
            </fieldset>

            <fieldset>
                <legend>Educational Experience</legend>
                <label htmlFor="school">School Name
                    <input type="text" id="school"/>
                </label>
                <label htmlFor="title">Title of Study
                    <input type="text" id="title"/>
                </label>
                <label htmlFor="date">Date of Study
                    <input type="date" id="date"/>
                </label>
            </fieldset>

            <fieldset>
                <legend>Practical Experience</legend>
                <label htmlFor="company">Company Name
                    <input type="text" id="company"/>
                </label>
                <label htmlFor="position">Position Title
                    <input type="text" id="position"/>
                </label>
                <label htmlFor="responsibilities">Responsibilities
                    <textarea id="responsibilities"/>
                </label>
                <label htmlFor="joining">Joining Date
                    <input type="date" id="joining"/>
                </label>
                <label htmlFor="resigning">Resigning Date
                    <input type="date" id="resigning"/>
                </label>
            </fieldset>
            
            <button onClick={(e)=> {
                e.preventDefault();
                const name = document.querySelector('#name').value;
                const email = document.querySelector('#email').value;
                const phone = document.querySelector('#phone').value;
                const school = document.querySelector('#school').value;
                const title = document.querySelector('#title').value;
                const date = document.querySelector('#date').value;
                const company = document.querySelector('#company').value;
                const position = document.querySelector('#position').value;
                const responsibilities = document.querySelector('#responsibilities').value;
                const joining = document.querySelector('#joining').value;
                const resigning = document.querySelector('#resigning').value;
                
                handler({name, email, phone, school, title, date, company, position, responsibilities, joining, resigning});
            }}>Submit</button>
        </form>
    )
}

export default Form;