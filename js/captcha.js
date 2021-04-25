jQuery("#refreshimg").live('click',function(){

		jQuery.post('admin/includes/captcha/php/newsession.php');
		jQuery("#captchaimage").load('admin/includes/captcha/php/image_req.php');
		return false;
                
	});