let img
$(document).ready(()=>{
   $('#mySelect').change(function(){
      if($('#mySelect').val()=='title'){
      
         document.getElementById("text-title").style.display="block";
         document.getElementById("text-year").style.display="none";
         document.getElementById("text-imbid").style.display="none";
         
      }
      if($('#mySelect').val()=='year'){
      	
        document.getElementById("text-title").style.display="none";
        document.getElementById("text-year").style.display="block";
        document.getElementById("text-imbid").style.display="none";
      }
       if($('#mySelect').val()=='imbid'){
       	
        document.getElementById("text-title").style.display="none";
        document.getElementById("text-year").style.display="none";
        document.getElementById("text-imbid").style.display="block";
      }

    })
   $('#title1').click(()=>{
   if($('#first').val()==null || $('#first').val()==""){
   	console.log("1")
   	$('#err').html('<i class="fas fa-times-circle"></i><br>Please Enter the data')
   	$('#img').html('')
   	 document.getElementById("set").style.display="none";
   }
   else{
   	
   	getInfo()
   }
    })


   $('#year1').click(()=>{
   if($('#second').val()==null || $('#second').val()==""){
   	console.log("2")
   	$('#err').html('<i class="fas fa-times-circle"></i><br>Please Enter the data')
   	$('#img').html('')
   	 document.getElementById("set").style.display="none";
   }else{
   
   	getInfo()
   }
    })


   $('#imbid1').click(()=>{
   if($('#third').val()==null || $('#third').val()==""){
   	console.log("3")
   	$('#err').html('<i class="fas fa-times-circle"></i><br>Please Enter the data')
   	$('#img').html('')
   	document.getElementById("set").style.display="none";
            
   }else{
   
   	getInfo()
   }
    })

})




let getInfo=()=>{


	$.ajax({
		type:'GET',
		dataType:'json',
		async:true,
		url:'https://www.omdbapi.com/?i=tt3896198&apikey=d8e3771a',
		success:(data)=>{
         console.log(data)
         img=data.Poster

         if($('#first').val()==data.Title || $('#second').val()==data.Year || $('#third').val()==data.imdbID){
         	document.getElementById("first").value = "";
         	document.getElementById("second").value = "";
         	document.getElementById("third").value = "";
         	 document.getElementById("set").style.display="block";



         	$('#err').html('')
         	$('#img').html(`<div class="co">
            <div id="img">
          <img src="`+img+`" class="img-size"/></div></div>`)

            $('#writer').html( `<div class="co3">
          <div class="card">
  <div class="card-header">
    Writer
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="writer" style="width:95%;">${data.Writer}</p>
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)


         	
         	$('#actor').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Actor
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0"> 
      <p id="actor"  style="width: 95%;">${data.Actors}</p>
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)

         	$('#award').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Award
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="award"  style="width: 95%;">${data.Awards}</p>
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div> `)
            $('#rate1').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Rating
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="rate1" style="width: 95%;">${data.Ratings[0].Source+`:`+data.Ratings[0].Value}</p>
      <p id="rate2" style="width: 95%;">${data.Ratings[1].Source+`:`+data.Ratings[1].Value}</p>
      <p id="rate3" style="width: 95%;">${data.Ratings[2].Source+`:`+data.Ratings[2].Value}</p>


      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
       
            $('#plot').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Plot
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="plot" style="width: 95%;">${data.Plot}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#imdbRating').html(`<div class="co3" >
          <div class="card">
  <div class="card-header">
    ImdbRating
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="imdbRating">${data.imdbRating}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#imdbVotes').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    ImdbVotes
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="imdbVotes" style="width: 95%;">${data.imdbVotes}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#imdbid').html(` <div class="co3">
          <div class="card">
  <div class="card-header">
    ImdbID
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="imdbid" style="width: 95%;">${data.imdbID}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>
`)
            $('#year2017').html(`  <div class="co3">
          <div class="card">
  <div class="card-header">
    Year
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="year2017" style="width: 95%;">${data.Year}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>

`)
            $('#country').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Country
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="country" style="width: 95%;">${data.Country}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>
`)
            $('#boxoffice').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    BoxOffice
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="boxoffice" style="width: 95%;">${data.BoxOffice}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Metascore').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Metascore

  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Metascore" style="width: 95%;">${data.Metascore}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Language').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Language
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Language" style="width: 95%;">${data.Language}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>
`)
            $('#Production').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Production
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Production" style="width: 95%;">${data.Production}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>
`)
            $('#Director').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Director
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Director" style="width: 95%;">${data.Director}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Rated').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Rated
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Rated" style="width: 95%;">${data.Rated}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Released').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
     Released
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Released" style="width: 95%;">${data.Released}</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Website').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Website
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Website" style="width: 95%;"><a href="${data.Website}" class="link">Follow this link</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`)
            $('#Poster').html(`<div class="co3">
          <div class="card">
  <div class="card-header">
    Poster
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p id="Poster" style="width: 95%;"><a href="${img}" class="link">Follow this link</p>
    
      <footer class="blockquote-footer">3 min ago.</footer>
    </blockquote>
  </div>
</div>
        </div>`
)
        }else{
        		$('#err').html('<i class="fas fa-times-circle"></i><br>Wrong input data')
        		
        	$('#img').html('')
            document.getElementById("set").style.display="none";
        }
         	},

		error : (err)=>{
			console.log(err.responseJSON.error.message);
            

		}
	})
}


