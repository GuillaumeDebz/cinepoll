import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPasswordValidator(controlGroup : AbstractControl){

    let error : ValidationErrors | null = null

    if(controlGroup.value["password"] && controlGroup.value["confirmpassword"]){
        
        if(controlGroup.value["password"] != controlGroup.value["confirmpassword"])
        {
            error = { MatchPassword : "Les mots de passe ne correspondent pas"}            
        }
        
    }

    return error
}