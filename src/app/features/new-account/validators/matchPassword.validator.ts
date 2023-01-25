import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPasswordValidator(controlGroup : AbstractControl){
    let error : ValidationErrors | null = null

    if(controlGroup.value["accountProperties.PASSWORD"] && controlGroup.value["accountProperties.CONFIRMPASSWORD"]){
        
        if(controlGroup.value["accountProperties.PASSWORD"] != controlGroup.value["accountProperties.CONFIRMPASSWORD"])
        {
            error = { MatchPassword : "Les deux mots de passe ne correspondent pas..."}

            console.log("error");
            
        }
    }


    return error
}