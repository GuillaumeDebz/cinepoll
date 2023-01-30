import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPasswordValidator(controlGroup : AbstractControl){
    
    let error : ValidationErrors | null = null

    if(controlGroup.value["AccountProperties.PASSWORD"] && controlGroup.value["AccountProperties.CONFIRMPASSWORD"]){
        
        if(controlGroup.value["AccountProperties.PASSWORD"] != controlGroup.value["AccountProperties.CONFIRMPASSWORD"])
        {
            error = { MatchPassword : "Les mots de passe ne correspondent pas"}            
        }
    }

    return error
}