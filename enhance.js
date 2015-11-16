// Kanban Minimize Columns
$('.KanbanColumn__header').click(function(){
	if(parseInt($(this).parent('ul.KanbanColumn').css('width')) < 200)
		{$(this).parents('ul.KanbanColumn').css({'width':'auto', 'min-width':'300px','overflow':'hidden'});
} else $(this).parents('ul.KanbanColumn').css({'width':'40px', 'min-width':'40px','overflow':'hidden'})
});
// Kanban Minimal Ticket view.
$('.KanbanColumn__lozenge').click(function(){
	if($('.KanbanTicket__status').css('display') !== 'none'){

		$('.KanbanTicket').css('padding','2px');
		$('.KanbanTicketWrapper').css('padding-top','0px');
		$('.KanbanTicket__status, .KanbanTicket__estimate').css('display','none');
		$('.KanbanTicket__subject').css('max-width','100%');

	} else {

		$('.KanbanTicket').css('padding','10px 15px');
		$('.KanbanTicketWrapper').css('padding-top','10px');
		$('.KanbanTicket__status, .KanbanTicket__estimate').css('display','block');
		$('.KanbanTicket__subject').css('max-width','calc(100% - 29px)');
	}

});

// Pre-populate bug tickets with a default template.
$('.TicketProperties__column select').on('change',function(e){
	var selected = $(this).find('option:selected').text();
	if(selected === 'Bug'){
		$('.PostForm__textarea').text("**Browser/Platform:**\n\
\n\
\n\
**Screen shot:**\n\
\n\
\n\
**Steps to Reproduce:**\n\
\n\
\n\
**Expected Result:**\n\n");
	}
});