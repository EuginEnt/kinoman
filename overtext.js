<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js></script>
    <script>
		$('.text_description').click(function(){
            $(this).toggleClass('active')
        })
		/document.querySelectorAll('.text_description').forEach(function(item){item.addEventListener('click',function(event){
            event.target.classList.toggle('active')
        })
        })/
    </script>