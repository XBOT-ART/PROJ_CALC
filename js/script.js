document.getElementById("operation_result").onclick = function(){
        let a = Number(document.getElementById("first1").value);
        let b = Number(document.getElementById("second2").value);
        let c="Операцію не було обрано";
            if(document.getElementById("plus").checked) {
                    c = a+b;
                }else if(document.getElementById("minus").checked) {
                    c = a-b;
                }else if(document.getElementById("div").checked) {
                    c = a/b;
                }else if(document.getElementById("mult").checked) {
                    c = a*b;
                }
            document.getElementById("result").textContent = `Відповідь: ${c}`
}