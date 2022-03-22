





        let dateInput = "2021-12-12";

        let url = 'https://api.nasa.gov/planetary/apod?api_key=TgCoBzbJpfKWP6W5pHxia9jMxSgmiy7CgsajypsR'
        fetch(url+ "&date=" + dateInput) 
            .then(res => res.json())
            .then(data =>{
        
               
                document.querySelector('#title_id').innerText = data.title
        
                document.querySelector('#date_id').innerText = data.date
        
                document.querySelector('#explanation1').innerText = data.explanation
        
                document.querySelector('#image1').src = data.url
        
                
                
        
               
                
               
            });



/*document.querySelector('button').addEventListener(onclick,getMeDate){
    function getMeDate {
        let date_input = document.querySelector('input').value

    }
    
}

Then replace the date_input with the dateInput and  this data will feed to url and thats it

But for somehow ı coudn't get it to work  PLEASE HELP THANK YOU :)
*/

    