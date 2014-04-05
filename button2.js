<script type="text/javascript">

(function () {
  
    "use strict";

kintone.events.on.('app.record.index.show', function{

	//getting html element = btn
	var btn = document.getElementById('btn');
	var box = document.getElementById('box');

	//event to change backgroundcolor to red
	btn.addEventListener('click', function(){
		box.style.backgroungColor = 'red';
	}, false);

	//event to show alert box
	btn.addEventListener('click', function(){
		alert('clicked');
	}, false);

	});
})();

</script>
