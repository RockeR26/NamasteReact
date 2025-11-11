export const  validateData = (name,password,email)=>{
    const validName= /^[a-zA-Z][a-zA-Z\s-]*$/.test(name);
    const validEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!validEmail) return ("Invalid Email Format");
    if(!validPassword) return("Invalid Password format");
    if(!validName) return ("Invalid Name it should contain letters");
    return null;
}
