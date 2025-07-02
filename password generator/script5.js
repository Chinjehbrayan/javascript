// radom password generator


function generatepassword(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercasechar ="abcdefghijklmnopqrstuvwxyz";
    const uppercasechar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar ="1234567890";
    const symbolchar ="?!@#$%^&*()_+<>?:";

    let allowedchars ="";
    let password ="";

    allowedchars += includeLowercase ? lowercasechar : "";
    allowedchars += includeUppercase ? uppercasechar : "";
    allowedchars += includeNumbers ? numberchar : "";
    allowedchars += includeSymbols ? symbolchar : "";
     if(length <= 0){
        return `(password legth must be at least 1)`;
     }
     if(allowedchars.length === 0){
        return `at least one set ot character need to be selected`;
     }

     for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randomindex];
     }
    return password;
} 



const passwordlength = 12;
const includelowercase =true;
const includeuppercase =true;
const includenumbers =true;
const includesymbols =true;

 const password =generatepassword(passwordlength,
                                includelowercase,
                                includeuppercase,
                                includenumbers,
                                includesymbols);

console.log(`generate password: ${password} `);