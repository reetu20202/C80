var student_array =[];
function submit(){
    var student_display=[];
    for(j=1; j<=4; j++){
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name)
        student_array.push(student_name);
        
    }
    var length_student_array=student_array.length;
     console.log(length_student_array)
     for(k=0; k<length_student_array; k++){
         student_display.push("<h4>Name: "+student_array[k]+"</h4>");
         console.log(student_display)
     }
     document.getElementById("display_name_with_commas").innerHTML=student_display
     var remove_comma=student_display.join(" ");
     console.log(remove_comma)
     document.getElementById("display_name_without_commas").innerHTML=remove_comma
     document.getElementById("submit_button").style.display="none"
     document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    student_array.sort()
    console.log(student_array)
    var student_display_sorting=[];
    var length_student_array=student_array.length;
     console.log(length_student_array)
     for(k=0; k<length_student_array; k++){
        student_display_sorting.push("<h4>Name: "+student_array[k]+"</h4>");
        console.log(student_display_sorting)
        var remove_comma=student_display_sorting.join(" ");
     console.log(remove_comma)
     document.getElementById("display_name_without_commas").innerHTML=remove_comma
    }
}
