export default function Validation(values) {
  
  // On initialise une erreur vide
  const errors = {};
  // Autorise les lettres, les tirets et les espaces
  const name_pattern = /^[a-zA-Z]*$/;
  // Doit contenir au moins une lettre minuscule, une majuscule, au moins un chiffre et un caractère spécial.
  // Le mot de passe doit contenir au moins 12 caractères.
  const password_pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+.{12, 24}$/;
  // Doit commencer par au moins un caractère, suivi d'un arobase, puis d'au moins un autre cactère, 
  // puis d'un point, puis d'une chaine de caractère entre 2 et 6.
  const email_pattern = /^[^\s@]+@[^\s@]+.[^\s@]{2,6}$/;
  // Ne doit contenir que des lettres et des chiffres et doit commencer par une lettre
  const address_pattern = /^[a-zA-Z0-9\s]*$/;

  // S'il ne reste plus de cactère après avoir retirer les espaces vides
  if (!values.lastname.trim()) {
    // On renvoie le message d'erreur suivant
    errors.lastname = "Votre nom ne peut pas être vide !";
    // Sinon, si le paterne RegEx n'est pas respecté
  } else if (!name_pattern.test(values.lastname)) {
    // On renvoie le code suivant
    errors.lastname = "Votre nom ne peut pas contenir de caractère spécial";
  }

  if (!values.firstname.trim()) {
    errors.firstname = "Votre prénom ne peut pas être vide !";
  } else if (!name_pattern.test(values.firstname)) {
    errors.firstname = "Votre prénom ne peut pas contenir de caractère spécial";
  } 

  if (!values.email.trim()) {
      errors.email = "Votre email ne peut pas être vide !";
  } else if (!email_pattern.test(values.email)) {
      errors.email = "L'email est incorrect";
  }
  
  if (!values.password.trim()) {
      errors.password = "Votre mot de passe ne peut pas être vide !";
      // Si le mot de passe fait moins de 12 ou plus de 24 caractères
  } else if (values.password.length < 12 || values.password.length > 24) {
      // On renvoie le message d'erreur suivant
      errors.password = "Votre mot de passe doit contenir entre 12 caractères et 24 caractères.";
  } else if (!password_pattern.test(values.password)) {
      errors.password = "Votre mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial.";
  }

  if (!values.dateOfBirth.trim()) {
    errors.dateOfBirth = "Veuillez indiquer votre date de naissance !";
  }

  if (!values.address.trim()) {
    errors.address = "Veuillez indiquer votre adresse !";
  } else if (!address_pattern.test(values.address)) {
    errors.address = "Votre adresse doit commencer par un chiffre et ne dois contenir que des chiffres ou des lettres";
  } 

  return errors;
}