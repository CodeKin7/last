export default function validateInfo(values) {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = 'Username required';
    }

    if(!values.email) {
        errors.email = 'Email required';
    } else if (values.email) {
        errors.email = 'Email address is required';
    }
    

    if(!values.Password) {
        errors.password = 'Password is required';
    }else if (values.password.length < 6) {
        errors.password = 'password needs to be 6 characters or more';
    }


    if(!values.Password2) {
        errors.password = 'Password is required';
    }else if (values.password2 !==values.password2) {
        errors.password2 = 'password do not match';
    }




    return errors;  
}