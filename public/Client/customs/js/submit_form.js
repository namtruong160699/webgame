$('#contact_form').on('submit', function(e){
	e.preventDefault();
	$.ajax({
		url:$(this).attr('action'),
		method:$(this).attr('method'),
		data:new FormData(this),
		processData:false,
		dataType:'json',
		contentType:false,
		beforeSend:function(){
		$(document).find('strong.error-text').text('');
		},
		success:function(data){
		if(data.status == 0){
			$.each(data.error, function(prefix, val){
			$('strong.'+prefix+'_error').text(val[0]);
			});
		}else{
			$('#contact_form')[0].reset();
			$.notify(data.msg, data.status);
		}
		}
	});
});