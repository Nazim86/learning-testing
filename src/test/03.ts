import {StudentType} from "../city";

debugger
export const sum = (a:number,b:number) =>{

    return a+b;
}
const res = sum(sum(1,2), sum(1,3))

export const addSkill = (st:StudentType, skill: string) =>{
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}