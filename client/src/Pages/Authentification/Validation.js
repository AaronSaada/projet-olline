export default function Validation(values) {
    const errors = {};
    const password_pattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^\da-zA-Z]).{8,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+.[^\s@]{2,6}$/;
  
    if (!values.lastname.trim()) {
      errors.lastname = "Votre nom ne peut pas être vide !";
    }
  
    if (!values.firstname.trim()) {
      errors.firstname = "Votre prénom ne peut pas être vide !";
    }

    if (!values.email.trim()) {
        errors.email = "Un Email est Requis !";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "L'email est incorrect";
    }
    
    if (!values.password.trim()) {
        errors.password = "Votre mot de passe ne peut pas être vide !";
    } else if (values.password.length < 8) {
        errors.password = "Votre mot de passe doit au moins contenir 8 caractères.";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Votre mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial.";
    }
  
    if (!values.dateOfBirth.trim()) {
      errors.dateOfBirth = "Veuillez indiquer votre date de naissance !";
    }

    if (!values.address.trim()) {
      errors.address = "Veuillez indiquer votre adresse !";
    }


  
    
  
    return errors;
  }