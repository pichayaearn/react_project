

function Terms({user, handleChange, handleSignup}) {
    let {fullName, lastName, email, tel ,terms} = user
    console.log('terms :', typeof terms)
    return (
        <form onSubmit={handleSignup}>
            <div>Terms</div>
            <div>Name: {fullName}</div>
            <div>Lastname: {lastName}</div>
            <div>Email: {email}</div>
            <div>Tel: {tel}</div>
            <input type="checkbox" id="terms" name="terms" checked={terms} value={terms} onChange={handleChange}></input>
            <label htmlFor="terms"> I accept terms ...</label><br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Terms