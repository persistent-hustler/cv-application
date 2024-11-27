/* eslint-disable react/prop-types */
export default function Result({data}) {

    const {name, email, phone, school, title, date, company, position, responsibilities,joining, resigning} = data;
    return (
        <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            <p>School: {school}</p>
            <p>Title: {title}</p>
            <p>Date: {date}</p>
            <p>Company: {company}</p>
            <p>Position: {position}</p>
            <p>Responsibilities: {responsibilities}</p>
            <p>Joining: {joining}</p>
            <p>Resigning: {resigning}</p>
        </>
    )
}